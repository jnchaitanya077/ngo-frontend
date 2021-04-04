import React from "react";
import ActionButton from "../components/Button";
import { ctaColoured } from "../data/Styles"
import "../css/Footer.css";

function Footer(props) {
  return (
    <div className="w-100 bg-dark h-75 p-5">
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-2 col-lg-3  col-sm-6 text-light">
            <h5 className="f-title">About Us</h5>
            <ul className="list-group" style={list}>
              <li>
                <a href=".." className="footer-nav-link">
                  Mission
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Vision
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Board Members
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Media Coverage
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 mt-3 mt-lg-0 col-sm-6 text-light">
            <h5 className="f-title">Important Links</h5>
            <ul className="list-group" style={list}>
              <li>
                <a href=".." className="footer-nav-link">
                  Donate Now
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Volunteer
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Careers
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Schemes
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Scholorships
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 mt-3 mt-lg-0 text-light">
            <h5 className="f-title">Get Info</h5>
            <ul className="list-group" style={list}>
              <li>
                <a href=".." className="footer-nav-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Support
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href=".." className="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* ------------------------------- */}
          <div className="col-xl-4 col-lg-4  mt-3 mt-lg-0">
            <h5 className="f-title text-light">Write To Us</h5>
            <form className="form-group">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    tabIndex="1"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12 mt-2 mt-md-0 ps-0">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="email"
                    name="email"
                    placeholder="Enter Mail"
                    tabIndex="1"
                    required
                  />
                </div>
              </div>
              <textarea
                className="w-100 mt-2 text-muted"
                placeholder="Enter Your Message"
                style={{
                  height: "150px",
                  border: "2px solid #d9d9d9",
                  paddingLeft: "10px",
                }}
              />
              <ActionButton
                url="/"
                name="Send Your Message Now"
                style={ctaColoured}
                type="btn-block w-100 mt-1"
              />
            </form>
          </div>
          {/* -------------------------------- */}
        </div>
        <hr className="bg-light" />

        <div className="text-secondary">
          <p className="d-flex justify-content-center">
            2020 &#169; Samagra Foundation &#8482;
          </p>
        </div>
        <ul className="text-secondary d-flex justify-content-center social-links">
          <li>
            <a href=".." className="footer-nav-link">
              <i className="facebook f icon"></i>
            </a>
          </li>
          <li>
            <a href=".." className="footer-nav-link">
              <i className="twitter icon"></i>
            </a>
          </li>
          <li>
            <a href=".." className="footer-nav-link">
              <i className="youtube icon"></i>
            </a>
          </li>
          <li>
            <a href=".." className="footer-nav-link">
              <i className="instagram icon"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

const list = {
  listStyleType: "none",
};

export default Footer;
