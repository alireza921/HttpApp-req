import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Comment from "../component/comment/CommentCmp";
import http from "../services/httpService";
import FullComment from "./FullComment/fullComment";
import AddComment from "./addNewComment/AddNewComment";
import { getAllComment } from "../services/getAllComment";
import { addNewComment } from "../services/addNewComment";
import { getOneComment } from "../services/getOneComment";
// import {toast } from 'react-toastify';

const HttpApp = () => {
  const [comment, setComment] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await getAllComment();
        setComment(data);
      } catch (err) {
        console.log(err);
      }
    };
    getComment();
  }, []);

  // We also can do like This - ( its True too :): 
  // async function getComment() {
  //   try {
  //     const {data} = await getAllComment() ;
  //     setComment(data);
  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // }

  const selectId = (id) => {
    setCommentId(id);
  };

  const newCommentHandler = async (newComment, setNewComment) => {
    try {
      await addNewComment({
        ...newComment,
        postId: 10,
      });
      const { data } = await getAllComment();
      setComment(data);
    } catch (err) {
      console.log(err);
    }

    setNewComment({
      name: "",
      email: "",
      body: "",
    });
  
  };


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
        <FullComment
          commentId={commentId}
          setCommentId={setCommentId}
          setComment={setComment}
        />
      </section>

      <section className={styles.addCommentHolder}>
        <AddComment onAddComment={newCommentHandler} />
      </section>
    </main>
  );
};

export default HttpApp;
<div>salam az http app</div>;
