import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    // // <Hero ></Hero>
    // // <Footer></Footer>
  );
}

export default App;
