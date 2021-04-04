import React from "react";
import ActionButton from "../components/Button";
import "../css/Newsletter.css";
import { cta } from "../data/Styles"

function Newsletter(props) {
  return (
    <div className="w-100 mail odd">
      <section className="container">
        <h2 className="text-center">Our NewsLetters</h2>
        <div className="d-flex justify-content-center">
          <div className="col-8">
            <p className="text-center text-muted">
              Subscribe to our news letters to get notifed about the new
              campaigns and funding programs.
            </p>
          </div>
        </div>
        <form>
          <div className="form-group d-flex justify-content-center mt-5">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter mail"
              tabIndex="1"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <ActionButton style={cta} name="Subscribe Now" type="btn-sm w-100 mt-4" url="" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Newsletter;

