import http from "./httpService";
export function deleteComment(id) { 
   return http
   .delete(`/comments/${id}`)
}