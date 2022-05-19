import "./App.css";
import HttpApp from "./container/HttpAppCmp";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <div className='App'>
    <ToastContainer /> 
    <HttpApp/> 
  </div>;
}

export default App;
