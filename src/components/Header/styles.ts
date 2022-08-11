import { styled } from "../../styles/stitches.config";

export const StyledHeaderContainer = styled("header", {
  padding: "4rem  0 10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray900",

  ".first": {
    position: "absolute",
    left: 0,
    top: 0,
  },

  ".second": {
    position: "absolute",
    right: 0,
    top: 0,
  },

  "@media (max-width: 768px)": {
    ".first, .second": {
      display: "none",
    },
  },
});
