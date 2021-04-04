import React from "react";
import "../css/Carousel.css";

function Carousel({ data, title, content }) {
  return (
    <div
      id="client-testimonial-carousel"
      className="carousel slide text-light"
      data-ride="carousel"
    >
      <h2 className="text-center mb-md-4 title-center">{title}</h2>
      <div className="carousel-inner" role="listbox">
        {/* Pass data as a props to slides */}
        {content}
      </div>

      {/* footer Indicators */}
      <ol className="carousel-indicators">
        <li
          data-bs-target="#client-testimonial-carousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        {/*map only if length greater than one and data is sent as props */}
        {data &&
          data.length > 1 &&
          data.map(
            (each) =>
              each.id > 0 && ( //map all the elements except zeroth element
                <li
                  key={each.id}
                  data-bs-target="#client-testimonial-carousel"
                  data-bs-slide-to={each.id}
                ></li>
              )
          )}
      </ol>

      {/* Side Controls */}
      <a
        className="carousel-control-prev"
        href="#client-testimonial-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#client-testimonial-carousel"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
