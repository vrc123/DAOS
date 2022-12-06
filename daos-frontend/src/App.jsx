import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindMusician from "./pages/FindMusician";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import FindEnsemble from "./pages/FindEnsemble";
import Musician from "./pages/Musician";
import Ensemble from "./pages/Ensemble";
import EditProfile from "./pages/EditProfile";
import ProfileSettings from "./pages/ProfileSettings";
import ProfileChangePassword from "./pages/ProfileChangePassword";
import ProfileChangeNewsletterSettings from "./pages/ProfileChangeNewsletterSettings";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicians" element={<FindMusician />} />
          <Route path="/musicians/:id" element={<Musician />} />
          <Route path="/ensembles" element={<FindEnsemble />} />
          <Route path="/ensembles/:id" element={<Ensemble />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
          <Route path="/profile/change-password" element={<ProfileChangePassword />} />
          <Route path="/profile/change-newsletter-settings" element={<ProfileChangeNewsletterSettings />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}