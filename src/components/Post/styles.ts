import { Link } from "react-router-dom";
import { styled } from "../../styles/stitches.config";

export const StyledPostContainer = styled(Link, {
  marginTop: "3rem",
  background: "$gray700",
  border: "2px solid transparent",
  borderRadius: 10,
  transition: ".2s all",

  "&:hover": {
    borderColor: "$gray500",
  },
});

export const StyledPostWrapper = styled("div", {
  padding: "2rem",

  "> div": {
    marginBottom: "1.25rem",
    display: "flex",

    strong: {
      maxWidth: 280,
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "$gray100",
    },

    time: {
      color: "$gray400",
    },
  },

  p: {
    color: "$gray300",
  },
});
