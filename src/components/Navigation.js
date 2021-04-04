import React from "react";
import Button from "./Button";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import { donate, stickyNavBar } from "../data/Styles";
import "../css/navigation.css";
import Logo from "../images/24.png"

export default function Navigation({ sticky }) {
  return (
    <nav
      className={
        sticky
          ? "navbar navbar-expand-xxl fixed-top navbar-light"
          : "navbar navbar-light navbar-expand-xxl"
      }
    >
      <img src={Logo} width="75" height="75" alt="logo" />
      <Link className="navbar-brand" to="/">
        Samagra Foundation
      </Link>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse  d-xs-flex flex-xs-row-reverse"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav ms-auto">
          <NavList navItems={navItems} styles={stickyNavBar} sticky={sticky} />
        </ul>
      </div>
      <Button name={"Donate"} style={donate} url="/" type="btn-sm" />
    </nav>
  );
}

const navItems = [
  {
    id: 0,
    isActive: false,
    tabTitle: "About Us",
    navList: [
      { linkTitle: "Mission/Vision", link: "/About", id: 0 },
      { linkTitle: "Our Team", link: "/Team", id: 1 },
      { linkTitle: "FAQs", link: "/Faq", id: 2 },
    ],
    url: ""
  },
  {
    id: 1,
    isActive: false,
    tabTitle: "Schemes",
    navList: [
      { linkTitle: "Bharatiya Balavikas Yojana", link: "/Schemes/Bharatiya-Balavikas-Yojana", id: 0 },
      { linkTitle: "Bharatiya Naari Shakti Yojana", link: "/Schemes/Bharatiya-Naari-Shakti-Yojana", id: 1 },
      { linkTitle: "Bharatiya Jaldhar Yojana", link: "/Schemes/Bharatiya-Jaldhar-Yojana", id: 2 },
      { linkTitle: "Bharatiya Suraj Bijili Yojana", link: "/Schemes/Bharatiya-Suraj-Bijili-Yojana", id: 3 },
      {
        linkTitle: "Bharatiya Varshjal Sanchayan Yojana",
        link: "/Schemes/Bharatiya-Varshjal-Sanchayan-Yojana",
        id: 4,
      },
      { linkTitle: "Bharatiya Rakshak Yuva Sena", link: "/Schemes/Bharatiya-Rakshak-YuvaSena", id: 5 },
      { linkTitle: "Grameen Kalabharati Yojana", link: "/Schemes/Grameen-Kalabharati-Yojana", id: 6 },
      {
        linkTitle: "Matha Shishu Samrakshana Yojana",
        link: "/Schemes/Matha-Shishu-Samrakshana-Yojana",
        id: 7,
      },
    ],
    url: ""
  },
  {
    id: 2,
    isActive: false,
    tabTitle: "Creating Impact",
    navList: [
      { linkTitle: "Donate Online", link: "", id: 0 },
      { linkTitle: "Join Us", link: "", id: 1 },
    ],
    url: ""
  },
  {
    id: 3,
    isActive: false,
    tabTitle: "Support",
    navList: [
      { linkTitle: "Government Organizations", link: "/Government", id: 0 },
      { linkTitle: "Corporate Organizations", link: "/Corporate", id: 1 },
      { linkTitle: "Institution & Organization", link: "/Institutions", id: 2 },
      { linkTitle: "Philanthropists", link: "", id: 3 },
    ],
    url: "/Organizations"
  },
  {
    id: 4,
    isActive: false,
    tabTitle: "Scholarships",
    navList: [
      { linkTitle: "Cash Awards", link: "/Awards/Cash Awards", id: 0 },
      { linkTitle: "Student Scholarships", link: "/Awards/Scholarships", id: 1 },
      { linkTitle: "Medals", link: "/Awards/Medals", id: 2 },
      { linkTitle: "Certificates", link: "/Awards/Certificates", id: 3 },
    ],
    url: ""
  },
  {
    id: 5,
    isActive: false,
    tabTitle: "Finance",
    navList: [
      { linkTitle: "Annual Reports", link: "/AnnualReports", id: 0 },
      { linkTitle: "Donar Details", link: "/DonarDetails", id: 1 },
    ],
    url: ""
  },
  {
    id: 6,
    isActive: false,
    tabTitle: "Media",
    navList: [
      { linkTitle: "Print Media", link: "/Media/PrintMedia", id: 0 },
      { linkTitle: "Electronic Media", link: "/Media/ElectronicMedia", id: 1 },
      { linkTitle: "Social Media", link: "/Media/SocialMedia", id: 2 },
      { linkTitle: "Gallery", link: "/Gallery", id: 3 },
      { linkTitle: "Video Interview", link: "/Media/VideoInterviews", id: 4 },
    ],
    url: "/Media"
  },
  {
    id: 8,
    isActive: false,
    tabTitle: "Contact Us",
    navList: [],
    url: "/Contact"
  },
];
