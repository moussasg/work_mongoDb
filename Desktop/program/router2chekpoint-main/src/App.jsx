import { Link , Route, Routes } from "react-router-dom"
import './App.css'
import Home from './pages/home'
import Desc from "./description/index"
function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/Home">
          <h1>Home</h1>
        </Link>
        <Link to="/Desc">
          <h1>Desc</h1>
        </Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Desc" element={<Desc/>}/>
      </Routes>
    </>
  );
}
export default App;
