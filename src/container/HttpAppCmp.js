import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Comment from "../component/comment/CommentCmp";
import axios from "axios";
import FullComment from "./FullComment/fullComment";
import AddComment from "./addNewComment/AddNewComment";

const HttpApp = () => {
  const [comment, setComment] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => setErr(true));
  }, []);

  const selectId = (id) => {
    setCommentId(id);
  };

  const newCommentHandler = (newComment, setNewComment) => {
    axios
      .post("http://localhost:3001/comments", {
        ...newComment,
        postId: 10,
      })
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => setComment(res.data))
      .catch();
    setNewComment({
      name: "",
      email: "",
      body: "",
    });
  };
  // console.log(commentId);

  const renderComments = () => {
    let renderCm = <p> the data is Loading . . . </p>;

    if (err) renderCm = <p> data fetching field . . . </p>;

    if (comment) {
      renderCm = comment.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectId(c.id)}
        />
      ));
    }
    return renderCm;
  };

  return (
    <main className={styles.main}>
      <section className={styles.commentHolder}>{renderComments()}</section>

      <section className={styles.fullCommentHolder}>
        <FullComment commentId={commentId} setComment={setComment} />
      </section>

      <section className={styles.addCommentHolder}>
        <AddComment onAddComment={newCommentHandler} />
      </section>
    </main>
  );
};

export default HttpApp;
<div>salam az http app</div>;
