import { globalCss } from "./stitches.config";

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  button: {
    cursor: "pointer",
  },

  li: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
  },

  "html, body": {
    height: "100vh",
  },

  body: {
    fontSize: "1rem",
    fontFamily: "$nunito",
    background: "$gray1000",
    color: "$gray300"
  },
});
