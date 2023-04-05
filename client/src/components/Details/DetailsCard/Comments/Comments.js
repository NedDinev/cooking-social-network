import React, { useEffect, useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { commentServiceFactory } from "../../../../services/commentService";

export default function Comments({
  username,
  recipeId,
  token,
  isAuthenticated,
}) {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const { handleSubmit, register } = useForm();

  const commentService = commentServiceFactory(token);

  useEffect(() => {
    try {
      // fetch data
      const showAllComments = async () => {
        const allComments = await commentService.getAll(recipeId);
        console.log(allComments);
        // set state when the data received
        setComments(allComments);
      };

      showAllComments();
    } catch (error) {
      setComments([]);
    }
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
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const remainingComments = comments.slice(3);

  return (
    <>
      {isAuthenticated && (
        <Form className="my-3" onSubmit={handleSubmit(onCommentSubmit)}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
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
              <div className="fw-bold text-info">{currComment.username}</div>-{" "}
              {currComment.comment}
            </div>
          </ListGroup.Item>
        ))}

        {!showAllComments && remainingComments.length > 0 && (
          // expands the comment section
          <Button onClick={() => setShowAllComments(true)} variant="link">
            Show more comments ({remainingComments.length})
          </Button>
        )}
        {showAllComments &&
          remainingComments.map((currComment) => (
            <ListGroup.Item as="li" key={currComment._id}>
              <div className="ms-2 me-auto">
                <div className="fw-bold text-info">{currComment.username}</div>-{" "}
                {currComment.comment}
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}
