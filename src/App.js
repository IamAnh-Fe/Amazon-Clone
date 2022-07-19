import NavBar from './components/Navbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from 'react-router-dom';
import Banner from "./components/Banner";
import SubNav from "./components/Subnav";
import ProductFeed from "./components/ProductFeed"


function App() {
  return (
    <>
      <nav>
        <NavBar />
        <SubNav />
      </nav>
      <Outlet />
      {/* <Banner />
      <ProductFeed /> */}
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
