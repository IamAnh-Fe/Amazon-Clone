import NavBar from './components/Navbar';
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
      <Banner />
      <ProductFeed />
    </>
  );
}

export default App;
