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
      comment: "",
    });
  };

  return (
    <>
      {isAuthenticated && (
        <Form className="my-3" onSubmit={handleSubmit(onCommentSubmit)}>
          <Form.Group>
            <Form.Label>Add a Comment:</Form.Label>
            <Form.Control
              className="mb-2"
              name="comment"
              as="textarea"
              rows={3}
              {...register("comment", { required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}

      <h4>Comments</h4>
      <ListGroup as="ul">
        {comments.slice(0, 3).map((currComment) => (
          <ListGroup.Item as="li" key={currComment._id}>
            <div className="ms-2 me-auto">
              {/* Changes the color of comments made by current logged user for the first 3 comments*/}
              {currComment._ownerId === userId ? (
                <div className="fw-bold username">
                  {formatUsername(currComment.username)}
                </div>
              ) : (
                <div className="fw-bold text-info">
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
            className="mt-3 mx-auto"
          >
            Show all comments ({remainingComments.length})
          </Button>
        )}
        {showAllComments &&
          remainingComments.map((currComment) => (
            <ListGroup.Item as="li" key={currComment._id}>
              <div className="ms-2 me-auto">
                {/* Changes the color of comments made by current logged user all comments*/}
                {currComment._ownerId === userId ? (
                  <div className="fw-bold username">
                    {formatUsername(currComment.username)}
                  </div>
                ) : (
                  <div className="fw-bold text-info">
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
