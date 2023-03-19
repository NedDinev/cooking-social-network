import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Create from "./components/Create/Create";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
