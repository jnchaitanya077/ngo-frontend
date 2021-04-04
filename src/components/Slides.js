import React from "react";

function Slides({ data }) {
  return (
    <div>
      {/* Map through slides only if data is sent. */}
      {data &&
        data.map(eachTestimonial => {
          return (
            <div
              key={eachTestimonial.id}
              className={
                eachTestimonial.id !== 0
                  ? "carousel-item text-center p-4"
                  : "carousel-item active text-center p-4"
              }
            >
              <blockquote className="blockquote text-center">
                <i className="quote right icon"></i>
                <p className="mb-0 ps-3 pe-3">{eachTestimonial.testimonial}</p>
              </blockquote>
              <div className="row">
                <div className="col-4 col-md">
                  <div className="avatar float-end">
                    <img src={eachTestimonial.image} alt={eachTestimonial.name} />
                  </div>
                </div>
                <div className="col">
                  <p className="float-start text-light fst-italic fw-lighter">
                    {eachTestimonial.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Slides;
