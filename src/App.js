import Contact from "./components/contact";
import First from "./components/first";
import Footer from "./components/footer";
import Second from "./components/second";
import Login from "../src/components/login"
import { Route, Routes } from "react-router-dom"
import Visit from "./components/visit";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<><First /> <Second /><Contact /><Footer /></>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/visit" element={<Visit />}></Route>
      </Routes>
    </>

  );
}

export default App;
