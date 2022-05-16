import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Comment from "../component/comment/CommentCmp";
import axios from "axios";
import FullComment from "./FullComment/fullComment";
import AddComment from "./addNewComment/AddNewComment";

const HttpApp = () => {
  const [comment, setComment] = useState(null);
  const [commentId, setCommentId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then((res) => {
        setComment(res.data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);

  const selectId = (id) => {
    setCommentId(id);
  };

  // console.log(commentId);

  return (
    <main className={styles.holder}>
      <section className={styles.commentHolder}>
        {comment ? (
          comment.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectId(c.id)}
            />
          ))
        ) : (
          <p> loading . . . </p>
        )}
      </section>

      <section className={styles.fullCommentHolder}>
        <FullComment commentId={commentId} />
      </section>

      <section className={styles.addCommentHolder}>
        <AddComment />
      </section>
    </main>
  );
};

export default HttpApp;
<div>salam az http app</div>;
