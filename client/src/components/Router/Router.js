import { Navigate, Route, Routes } from "react-router-dom";

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
import RouteGuard from "./RouteGuard/RouteGuard";
import Profile from "../Profile/Profile";
import InvalidPath from "../InvalidPath/InvalidPath";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route
        path="/create"
        element={
          <RouteGuard>
            <Create />
          </RouteGuard>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/logout"
        element={
          <RouteGuard>
            <Logout />
          </RouteGuard>
        }
      />
      <Route
        path="/profile/:userId"
        element={
          <RouteGuard>
            <Profile />
          </RouteGuard>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/details/:recipeId" element={<Details />} />
      <Route
        path="/details/:recipeId/edit"
        element={
          <RouteGuard>
            <Edit />
          </RouteGuard>
        }
      />
      <Route
        path="/details/:recipeId/delete"
        element={
          <RouteGuard>
            <Delete />
          </RouteGuard>
        }
      />
      <Route path="/search/:recipeName" element={<Search />} />
      {/* for invalid path */}
      <Route path="*" element={<InvalidPath />} />
    </Routes>
  );
}
