import FullComment from "./container/FullComment/fullComment";
import HomePage from "./pages/Home/HomePage";
import NewCommentPage from "./pages/NewComment/NewCommentPage";
import NotFound from "./pages/NotFound/NotFound";

const routes = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/newcomment", element: <NewCommentPage /> },
  { id: 3, path: "*", element: <NotFound /> },
  {id:4 , path:'/fullcomment/:id' , element : <FullComment/>}, 
];
export default routes ;