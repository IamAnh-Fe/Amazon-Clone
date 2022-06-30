import NavBar from "./components/Navbar";
import { Outlet } from 'react-router-dom';
import Banner from "./components/Banner";
function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
      <Banner />
    </>
  );
}

export default App;
