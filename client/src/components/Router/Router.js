import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import Create from "../Create/Create";
import Register from "../Register/Register";
import Login from "../Login/Login";
import About from "../About/About";
import Logout from "../Logout/Logout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/create" element={<Create />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
