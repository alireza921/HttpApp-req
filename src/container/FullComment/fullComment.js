import http from "../../services/httpService";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FaTrash } from "react-icons/fa";
import { deleteComment } from "../../services/deleteComment";
import { getOneComment } from "../../services/getOneComment";
import { getAllComment } from "../../services/getAllComment";

const FullComment = ({ commentId, setCommentId, setComment }) => {
  const [fullComment, setFullComment] = useState(commentId);
  // console.log(commentId);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setFullComment(res.data))
        .catch((err) => console.log(err));
    }
  }, [commentId]);

  // We Also Can  get Comment that clicked  on it like this : (wit async -await)

  // useEffect(() => {
  //   if (commentId) {
  //     const get = async () => {
  //       try {
  //         const { data } = await getOneComment(commentId);
  //         setFullComment(data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     get();
  //   }
  // }, [commentId]);

  // const deletHandler = () => {
  //   deleteComment(commentId)
  //     .then((res) => getAllComment().then((res) => setComment(res.data)))
  //     .catch((err) => console.log(err));
  //   setCommentId(null);
  //   setFullComment(null);
  // };

  // gettin data whit async - await in deleteHandler 
  const deletHandler = async () =>{ 
    try { 
      await deleteComment(commentId);
      const {data} = await getAllComment(); 
      setComment(data); 
      setFullComment(null); 
      setCommentId(null)
    }
    catch(err) { console.log(err);}

  }

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
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
