const densityIndependentPixels = (ratio = 4, num = 25) => {
  let result = [];

  for (let i = 1; i < num - 1; i++) result.push(ratio * i);

  return result;
};

const typeStyle = (
  size = 12,
  spacing = 0,
  transform = "none",
  weight = "Regular"
) => `
  font-size: ${size}px;
  font-weight: ${weight};
  letter-spacing: ${spacing}px;
  text-transform: ${transform};
`;

const min_width = "320px";
const mobile = "768px";
const tablet = "1024px";
const desktop = "1250px";
const largeDesktop = "1400px";

export const globalStyles = `
  html,body,#root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: ${min_width};
    overflow-x: hidden;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default {
  // 4dp Grid for grid-styled,
  space: densityIndependentPixels(),

  // media query break points for grid-styled
  breakpoints: [mobile, tablet, desktop, largeDesktop],

  // sidebar properties
  sidebar: {
    color: "#DCDCDC",
    backgroundColor: "#424e67",
    width: 240
  },

  // header properties
  header: {
    backgroundColor: "#fff",
    height: 60,
    shadow: "2px 4px 20px -4px rgba(0, 0, 0, 0.1)"
  },

  // view properties
  view: {
    backgroundColor: '#F5F7FA'
  },

  // avatar properties
  avatar: {
    backgroundColor: "#424e67"
  },

  // card properties
  card: {
    backgroundColor: '#FFFFFF',
    shadow: '0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06)',
  },

  // typeography
  type: {
    overline: typeStyle(10, 1.5, "uppercase"),
    caption: typeStyle(12, 0.4),
    button: typeStyle(14, 0.75, "uppercase", "medium"),
    body2: typeStyle(14, 0.25),
    body1: typeStyle(16, 0.5),
    subtitle2: typeStyle(14, 0.1, null, "medium"),
    subtitle1: typeStyle(16, 0.15),
    h6: typeStyle(20, 0.15, null, "medium"),
    h5: typeStyle(24),
    h4: typeStyle(34, 0.25),
    h3: typeStyle(48),
    h2: typeStyle(60, -0.5, null, "light"),
    h1: typeStyle(96, -0.15, null, "light")
  }
};
