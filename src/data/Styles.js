// STICKY NAVBAR
const stickyNavBar = {
  color: "#fff",
  bakgroundColor: "#fff",
};
// DONATE BUTTON STYLES
const donate = {
  onHover: {
    backgroundColor: "transparent",
    color: "#fff",
    transition: "background-color, 0.3s",
    borderColor: "#fff",
  },
  defaultStyle: {
    backgroundColor: "#d9534f",
    color: "#fff",
  },
};
// CTA TRANSPARENT BUTTON STYLES
const cta = {
  onHover: {
    backgroundColor: "transparent",
    color: "#35B736",
    transition: "background-color, 0.3s",
    borderColor: "#35B736",
  },
  defaultStyle: {
    backgroundColor: "#35B736",
    color: "#fff",
  },
};

// CTA COLOURED BUTTON STYLES

const ctaColoured = {
  onHover: {
    ...cta.onHover,
    backgroundColor: "#fff",

  },
  defaultStyle: {
    ...cta.defaultStyle
  },
};


export { donate, cta, stickyNavBar, ctaColoured };
