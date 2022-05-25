import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Comment from "./comment/CommentCmp";
import { getAllComment } from "../../services/getAllComment";
import { Link } from "react-router-dom";
// import {toast } from 'react-toastify';

const HttpApp = () => {
  const [comment, setComment] = useState(null);
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

  const renderComments = () => {
    let renderCm = <p> the data is Loading . . . </p>;

    if (err) {
      renderCm = <p> data fetching field . . . </p>;
      // toast.error('ridi k amoo')
    }

    if (comment) {
      // toast.success('data recived')
      renderCm = comment.map((c) => (
        <Link to={`/fullcomment/${c.id}`} key={c.id}>
          <Comment
            name={c.name}
            email={c.email}
          />
        </Link>
      ));
    }
    return renderCm;
  };

  return <section className={styles.commentHolder}>{renderComments()}</section>;
};

export default HttpApp;

