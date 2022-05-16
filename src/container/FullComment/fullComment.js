import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FaTimes } from "react-icons/fa";

const FullComment = ({ commentId }) => {
  const [fullComment, setFullComment] = useState(commentId);
  // console.log(commentId);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setFullComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deletHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  // console.log(fullComment);

  let commentDetail = <p> hanooz Load nashodim </p>;

  if (commentId) commentDetail = <p> Loading ... </p>;

  if (fullComment) {
    commentDetail = (
      <div className={styles.holder}>
        <span className={styles.close} onClick={deletHandler}>
          <FaTimes />
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
