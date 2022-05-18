import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Comment from "../component/comment/CommentCmp";
import http from "../services/httpService";
import FullComment from "./FullComment/fullComment";
import AddComment from "./addNewComment/AddNewComment";
import {toast } from 'react-toastify';


const HttpApp = () => {
  const [comment, setComment] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    http
      .get("/comments")
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => setErr(true));
  }, []);

  const selectId = (id) => {
    setCommentId(id);
  };

  const newCommentHandler = (newComment, setNewComment) => {
    http
      .post("/comments", {
        ...newComment,
        postId: 10,
      })
      .then((res) => http.get("/comments"))
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

    if (err) {
      renderCm = <p> data fetching field . . . </p>;
      // toast.error('ridi k amoo')
    }

    if (comment) {
      // toast.success('data recived')
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
        <FullComment commentId={commentId} setCommentId={setCommentId} setComment={setComment} />
      </section>

      <section className={styles.addCommentHolder}>
        <AddComment onAddComment={newCommentHandler} />
      </section>
    </main>
  );
};

export default HttpApp;
<div>salam az http app</div>;
