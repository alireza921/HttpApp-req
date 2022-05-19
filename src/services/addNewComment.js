import http from "./httpService";
export function addNewComment(data) {

// const username = ''
// const password = ''
// const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

  const token = "AliReza_ESM";
  const header = {
    headers: {
      Authorization: `Basic  ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
