import NavBar from "./components/Navbar";
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </>
  );
}

export default App;
