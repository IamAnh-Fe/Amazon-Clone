import NavBar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from "./components/Banner";
import SubNav from "./components/Subnav";
import ThumbNail from "./components/Thumbnail"
function App() {
  return (
    <>
      <nav>
        <NavBar />
        <SubNav />
      </nav>
      <Outlet />
      <Banner />
      <ThumbNail />
    </>
  );
}

export default App;
