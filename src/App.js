import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useSticky from "./hooks/useSticky";
import Homepage from "./pages/Homepage";
import Schemes from "./sections/Schemes";
import SchemeDisplay from "./components/displayScheme";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./css/App.css";
import Team from "./pages/AboutTeam";
import AboutTeam from "./pages/AboutTeam";
import FaqDispaly from "./pages/Faq";
import AnnualReports from "./pages/AnnualReports";
import About from "./pages/About";
import DonarDetails from "./pages/DonarDetails";
import CashAwards from "./pages/CashAwards";
import Gallery from "./pages/Gallery"
import GalleryDisplay from "./components/GalleryDisplay";
import MediaDisplay from "./components/MediaDisplay";
import Media from "./pages/Media";
import Contact from "./sections/Contact";
import GovernmentOrganization from "./pages/GovernmentOrganization"
import CorporateOrganizations from "./pages/CorporateOrganizations";
import Institutions from "./pages/Institutions";


function App() {
  // sticky Navigation
  const { isSticky, element } = useSticky();
  // Gallery state
  const [albumPhotos, setAlbumPhotos] = useState([]);

  function setAlbum(photos) {
    setAlbumPhotos(photos);
    console.log(albumPhotos)
  }


  return (
    <Router>
      <Navigation sticky={isSticky} />
      {/* for github pages */}
      <Route exact path="/ngo-website/" render={() => <Homepage element={element} />} />

      <Route exact path="/" render={() => <Homepage element={element} />} />

      <Route exact path="/About" render={() => <About element={element} />} />

      <Route exact path="/Contact" render={() => <Contact element={element} />} />

      <Route
        exact
        path="/Schemes"
        render={(match) => <Schemes match={match} element={element} />}
      />
      <Route
        exact
        path="/Team"
        render={() => <Team element={element} />}
      />
      <Route
        exact
        path="/Faq"
        render={() => <FaqDispaly element={element} />}
      />
      <Route
        exact
        path="/AnnualReports"
        render={() => <AnnualReports element={element} />}
      />

      <Route
        exact
        path="/DonarDetails"
        render={() => <DonarDetails element={element} />}
      />

      {/* Awards */}

      <Route
        exact
        path="/Awards/:category"
        render={() => <CashAwards element={element} />}
      />

      {/* Support */}
      <Route
        exact
        path="/Government"
        render={() => <GovernmentOrganization element={element} />}
      />
      <Route
        exact
        path="/Corporate"
        render={() => <CorporateOrganizations element={element} />}
      />
      <Route
        exact
        path="/Institutions"
        render={() => <Institutions element={element} />}
      />





      {/* Gallery Routes */}
      <Route
        exact
        path="/Gallery"
        render={() => <Gallery element={element} onAblumSelectSendPhotos={setAlbum} />}
      />
      <Route
        path="/Gallery/:albumTitle"
        render={() =>
          <GalleryDisplay
            element={element}
            albumPhotos={albumPhotos} />}
      />

      {/* Media  */}
      <Route
        exact
        path="/Media"
        render={() => <Media element={element} />}
      />

      <Route
        path="/Media/:category"
        render={() =>
          <MediaDisplay element={element} />}
      />

      {/* Scheme Routes */}
      <Route
        path="/Schemes/:schemeId"
        render={() => <SchemeDisplay element={element} />}
      />
      {/* Team Routes */}
      <Route
        path="/Team/:teamId"
        render={() => <AboutTeam element={element} />}
      />
      <Footer />
    </Router>
  );
}

export default App;
