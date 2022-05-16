import axios from "axios";
import { useState } from "react";
import styles from "../addNewComment/style.module.css";

const AddComment = () => {
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const postHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/comments", {
        ...newComment,
        postId: 10,
      })
      .then((res) => console.log(res.data))
      .catch();
    setNewComment({
      name: "",
      email: "",
      body: "",
    });
  };

  return (
    <div className={styles.holder}>
      <p> Add New Comment</p>
      <form className={styles.addComment} onSubmit={postHandler}>
        <div className={styles.inputContainer}>
          <label> Name : </label>
          <input
            type='text'
            name='name'
            onChange={changeHandler}
            value={newComment.name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label> Email : </label>
          <input
            type='email'
            name='email'
            onChange={changeHandler}
            value={newComment.email}
          />
        </div>
        <div className={styles.inputContainer}>
          <label> Body : </label>
          <textarea
            type='textarea'
            name='body'
            onChange={changeHandler}
            value={newComment.body}
          />
        </div>
        <button type='submit' className={styles.btn}>
          Add New Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
