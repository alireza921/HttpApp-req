import http from "./httpService";

export function getAllComment() {
  return http.get("/comments/");
}
