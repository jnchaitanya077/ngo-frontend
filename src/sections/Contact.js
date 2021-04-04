/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Button from "../components/Button";
import Waypoint from "../components/Waypoint";
import { cta } from "../data/Styles"


function Contact({ element }) {
  return (
    <>
      <Waypoint element={element} />
      <div className="w-100">
        <section className="container">
          <div className="row mt-4">
            <div className="mb-4">
              <h3 className="">Write To Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </p>

            </div>
            <div className="col-md-7">
              <form className="form-group">
                <div className="row">
                  {/* form */}
                  <div class="ui form warning">
                    <div class="two fields">
                      <div class="field">
                        <label>First Name</label>
                        <input placeholder="First Name" type="text" />
                      </div>
                      <div class="field">
                        <label>Last Name</label>
                        <input placeholder="Last Name" type="text" />
                      </div>
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input placeholder="Email" type="email" />
                    </div>
                    <div class="field">
                      <div class="field">
                        <label>Write Your Message</label>
                        <textarea rows="3"></textarea>
                      </div>

                    </div>
                  </div>
                </div>

                <Button type="btn-block w-100 mt-2"
                  style={cta}
                  name="Send Your Message Now"
                  url="" />
              </form>
            </div>

            <div className="col-md-5">
              <div className="col mt-3 md-mt-0">
                <div className="row">
                  <div className="col d-flex justify-content-end pt-4">
                    <i className="big  map marker alternate icon" style={styles} ></i>
                  </div>
                  <div className="col-9">
                    <h4>Address</h4>
                    <p className="text-muted">
                      123 Awesome new Street,<br />
                      Havilton avenue,<br />
                      NY
                  </p>
                  </div>
                </div>
              </div>

              <div className="col mt-2 mt-xl-4">
                <div className="row">
                  <div className="col d-flex justify-content-end pt-4">
                    <i className="big  envelope open outline icon" style={styles}></i>
                  </div>
                  <div className="col-9">
                    <h4>Contact</h4>
                    <p className="text-muted">
                      Tel : 012-3456-7890
                    <br />
                    Email : charityo@yourmail.com
                    <br />
                    Web : https://yourdomain.com
                  </p>
                  </div>
                </div>
              </div>
              <div className="col text-center mt-3">
                <i className="big facebook square icon ml-3" ></i>
                <i className="big twitter icon ml-3" ></i>
                <i className="big youtube icon ml-3" ></i>
                <i className="big instagram icon ml-3" ></i>

              </div>
            </div>
          </div>

          <div className="row mb-3 mb-md-5">
            <div class="mapouter mt-4 shadow-lg">
              <div class="gmap_canvas">
                <iframe width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=IIIT%20h&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0">
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const styles = {
  color: '#35b736'
}

export default Contact;
