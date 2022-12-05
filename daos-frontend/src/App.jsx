import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindMusician from "./pages/FindMusician";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import TestLogin from "./pages/TestLogin";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicians" element={<FindMusician />} />
          <Route path="/ensembles" element={<h1>Find ensemble</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TestLogin" element={<TestLogin />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}