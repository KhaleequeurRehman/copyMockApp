import './App.css';
import { Routes, Route } from "react-router-dom";
import Desktop2 from "./screens/desktop2"
import Desktop3 from "./screens/desktop3"
import Desktop4 from "./screens/desktop4"
import Login from "./screens/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Desktop2 />} />
        <Route path="/desktop3" element={ <Desktop3 />} />
        <Route path="/desktop4" element={ <Desktop4 />} />
        <Route path="/login" element={ <Login />} />
      </Routes>
    </>
  );
}

export default App;
