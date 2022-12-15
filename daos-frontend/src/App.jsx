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
import Welcome from "./pages/Welcome";
import EditEnsemble from "./pages/EditEnsemble";
import CreateEnsemble from "./pages/CreateEnsemble";
import AddInstrument from "./pages/AddInstrument";
import EditInstrument from "./pages/EditInstrument";
import EditEnsemblePost from "./pages/EditEnsemblePost";
import AddEnsemblePost from "./pages/AddEnsemblePost";
import Post from "./pages/Post";
import { useState } from "react";
import { useEffect } from "react";
import Profile from "./pages/Profile";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("token") == null && localStorage.getItem("profileId") == null) {
      setLoggedIn(false);
    } else if (localStorage.getItem("token") != "undefined" && localStorage.getItem("profileId") != "undefined") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

  }, [loggedIn]);

  return (

      <div className="app">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musicians" element={<FindMusician />} />
            <Route path="/musicians/:id" element={<Musician />} />
            <Route path="/ensembles" element={<FindEnsemble />} />
            <Route path="/ensembles/:id" element={<Ensemble />} />
            <Route path="/ensembles/:id/posts/:postId" element={<Post />} />
            <Route path="/sign-up" element={<SignUp setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/profile/settings/change-password" element={<ProfileChangePassword />} />
            <Route path="/profile/settings/change-newsletter-settings" element={<ProfileChangeNewsletterSettings />} />
            <Route path="/profile/instruments/add" element={<AddInstrument />} />
            <Route path="/profile/instruments/:id/edit" element={<EditInstrument />} />
            <Route path="/profile/ensembles/create" element={<CreateEnsemble />} />
            <Route path="/profile/ensembles/:id/edit" element={<EditEnsemble />} />
            <Route path="/profile/ensembles/:id/posts/add" element={<AddEnsemblePost />} />
            <Route path="/profile/ensembles/:id/posts/:postId/edit" element={<EditEnsemblePost />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>

  );
}