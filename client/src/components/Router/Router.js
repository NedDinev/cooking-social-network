import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import Create from "../Create/Create";
import Register from "../Register/Register";
import Login from "../Login/Login";
import About from "../About/About";
import Logout from "../Logout/Logout";
import Details from "../Details/Details";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";
import Search from "../Search/Search";

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
      <Route path="/details/:recipeId" element={<Details />} />
      <Route path="/details/:recipeId/edit" element={<Edit />} />
      <Route path="/details/:recipeId/delete" element={<Delete />} />
      <Route path="/search/:recipeName" element={<Search />} />
    </Routes>
  );
}
