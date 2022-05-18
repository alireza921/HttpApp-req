import http from "../../services/httpService";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FaTrash } from "react-icons/fa";

const FullComment = ({ commentId,setCommentId, setComment }) => {
  const [fullComment, setFullComment] = useState(commentId);
  // console.log(commentId);

  useEffect(() => {
    if (commentId) {
      http
        .get(`/comments/${commentId}`)
        .then((res) => setFullComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deletHandler = () => {
    http
      .delete(`/comments/${commentId}`)
      .then((res) =>
        http
          .get("/comments/")
          .then((res) => setComment(res.data))
      )
      .catch((err) => console.log(err));
      setCommentId(null)
      setFullComment(null)
  };

  // console.log(fullComment);

  let commentDetail = <p> Please select a comment  </p>;

  if (commentId) commentDetail = <p> Loading ... </p>;

  if (fullComment) {
    commentDetail = (
      <div className={styles.holder}>
        <span className={styles.delete} onClick={deletHandler}>
          <FaTrash />
        </span>
        <p> {fullComment.name} </p>
        <p> {fullComment.email}</p>
        <p> {fullComment.body}</p>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
