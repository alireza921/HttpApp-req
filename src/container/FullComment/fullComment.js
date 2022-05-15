import axios from "axios";
import { useEffect, useState } from "react";

const FullComment = ({ commentId }) => {
  const [fullComment, setFullComment] = useState(commentId);
  // console.log(commentId);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setFullComment(res.data))
        .catch();
    }
  }, [commentId]);

  // console.log(fullComment);

  let commentDetail = <p> hanooz Load nashodim </p>;

  if (commentId) commentDetail = <p> Loading ... </p>;

  if (fullComment) {
    commentDetail = 
    <div>
      <p> {fullComment.name} </p>
      <p> {fullComment.email}</p>
      <p> {fullComment.body}</p>
    </div>;
  }

  return commentDetail;
};

export default FullComment;
