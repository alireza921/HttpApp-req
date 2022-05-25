import FullComment from "./pages/FullComment/fullComment";
import AddComment from "./pages/addNewComment/AddNewComment";
import HomePage from "./pages/Home/HomePage";

import NotFound from "./pages/NotFound/NotFound";

const routes = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/newcomment", element: <AddComment /> },
  { id: 3, path: "*", element: <NotFound /> },
  {id:4 , path:'/fullcomment/:id' , element : <FullComment/>}, 
];
export default routes ;