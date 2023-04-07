import React, { useEffect, useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { commentServiceFactory } from "../../../../services/commentService";
import { formatUsername } from "../../../../utils/userUtils";

export default function Comments({
  username,
  recipeId,
  token,
  isAuthenticated,
  userId,
}) {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const commentService = commentServiceFactory(token);
  const remainingComments = comments.slice(3);

  useEffect(() => {
    // fetch data
    const showAllComments = async () => {
      const allComments = await commentService.getAll(recipeId);
      console.log(allComments);
      // set state when the data received
      setComments(allComments.reverse());
    };

    showAllComments();
  }, []);

  const onCommentSubmit = async (data) => {
    const comment = data.comment;
    const newComment = await commentService.create({
      recipeId,
      username,
      comment,
    });
    console.log(newComment);
    // handle submitted data
    setComments((prevComments) => [newComment, ...prevComments]);
    reset({
      comment: "", //reset form
    });
  };

  function isUserLogged(currComment, userId) {
    return currComment._ownerId === userId;
  }

  return (
    <>
      {isAuthenticated && (
        <Form style={styles.form} onSubmit={handleSubmit(onCommentSubmit)}>
          <Form.Group>
            <Form.Label style={styles.label}>Add a Comment:</Form.Label>
            <Form.Control
              style={styles.control}
              name="comment"
              as="textarea"
              rows={3}
              {...register("comment", { required: true })}
            />
          </Form.Group>
          <Button style={styles.button} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}

      <h4>Comments</h4>
      <ListGroup as="ul">
        {comments.slice(0, 3).map((currComment) => (
          <ListGroup.Item
            as="li"
            key={currComment._id}
            style={styles.commentItem}
          >
            <div style={{ ...{ marginLeft: 0 } }}>
              {/* Changes the color of comments made by current logged user for the first 3 comments*/}
              {isUserLogged(currComment, userId) && (
                <div style={styles.logged}>
                  {formatUsername(currComment.username)}
                </div>
              )}
              {!isUserLogged(currComment, userId) && (
                <div style={styles.unLogged}>
                  {formatUsername(currComment.username)}
                </div>
              )}
              - {currComment.comment}
            </div>
          </ListGroup.Item>
        ))}

        {!showAllComments && remainingComments.length > 0 && (
          // expands the comment section
          <Button
            onClick={() => setShowAllComments(true)}
            variant="info"
            style={styles.expandedButton}
          >
            Show all comments ({remainingComments.length})
          </Button>
        )}
        {showAllComments &&
          remainingComments.map((currComment) => (
            <ListGroup.Item
              as="li"
              key={currComment._id}
              style={styles.commentItem}
            >
              <div style={{ ...{ marginLeft: 0 } }}>
                {/* Changes the color of comments made by current logged user all comments*/}
                {isUserLogged(currComment, userId) && (
                  <div style={styles.logged}>
                    {formatUsername(currComment.username)}
                  </div>
                )}
                {!isUserLogged(currComment, userId) && (
                  <div style={styles.unLogged}>
                    {formatUsername(currComment.username)}
                  </div>
                )}
                - {currComment.comment}
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}

const styles = {
  form: {
    marginTop: "2rem",
  },
  label: {
    marginBottom: "0.5rem",
  },
  control: {
    marginBottom: "2rem",
  },
  button: {
    marginBottom: "1rem",
  },
  logged: {
    color: "#00a6fb",
  },
  unLogged: {
    color: "black",
  },
  expandedButton: {
    marginTop: "3rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  commentItem: {
    marginLeft: "2rem",
    marginRight: "2rem",
  },
};
