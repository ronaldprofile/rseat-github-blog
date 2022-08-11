import { styled } from "../../styles/stitches.config";

export const HomeContainer = styled("div", {
  main: {
    marginTop: "-100px",
  },
});

export const StyledHomeWrapper = styled("div", {
  width: "100%",
  maxWidth: 864,
  margin: "0 auto",
});

export const StyledSectionPublications = styled("section", {
  marginTop: "4.5rem",

  "> div": {
    marginBottom: ".75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "span:first-child": {
      fontSize: "1.125rem",
      fontWeight: 700,
      color: "$gray200",
    },

    span: {
      fontSize: ".875rem",
      color: "$gray400",
    },
  },
});

export const StyledSearchPostForm = styled("form", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: ".75rem",

  input: {
    flex: 1,
    height: "3.125rem",
    paddingInline: "1rem",
    background: "$gray2000",
    color: "$gray300",
    border: "1px solid $gray600",
    borderRadius: 6,
    transition: ".2s all",

    "&::placeholder": {
      color: "$gray500",
    },

    "&:focus": {
      outline: "none",
      borderColor: "$blue",
    },
  },

  button: {
    height: "3.125rem",
    paddingInline: "1rem",
    background: "transparent",
    color: "$gray300",
    border: "1px solid $gray600",
    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    transition: ".2s all",

    "&:hover": {
      background: "$blue",
      color: "White",
    },

    "&:focus": {
      outline: "none",
      borderColor: "$blue",
    },
  },
});

export const StyledSectionPosts = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: "2rem",
});
