
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FaTrash } from "react-icons/fa";
import { deleteComment } from "../../services/deleteComment";
import { getOneComment } from "../../services/getOneComment";
import { Link, useNavigate, useParams } from "react-router-dom";

const FullComment = () => {
  const params = useParams();
  const commentId = params.id;
  const navigate = useNavigate();

  const [fullComment, setFullComment] = useState(null);
  // console.log(commentId);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setFullComment(res.data))
        .catch((err) => console.log(err));
    }
  }, [commentId]);


  // gettin data whit async - await in deleteHandler
  const deletHandler = async () => {
    try {
      await deleteComment(commentId);
      navigate("/");
      setFullComment(null);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(fullComment);

  let commentDetail = <p> Please select a comment </p>;

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
        <Link to='/' > Back to Home </Link>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
