import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Button({ name, style, url, type }) {
  const [hover, isHovered] = useState(false);
  const [styles, setStyles] = useState();

  useEffect(() => {
    let defaultStyles = style.defaultStyle;
    setStyles(defaultStyles);
  }, []);

  function handleMouseEnter() {
    isHovered(!hover);
    setStyles(style.onHover);
  }
  function handleLeave() {
    isHovered(!hover);
    setStyles(style.defaultStyle);
  }
  return (
    <div>
      <Link to={!url ? "" : url}>
        <button
          type="button"
          className={`btn ${type}`}
          style={styles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleLeave}
        >
          {name}
        </button>
      </Link>
    </div>
  );
}

export default Button;
