import { styled } from "../../styles/stitches.config";

export const PostContainer = styled("div", {
  height: "100vh",
});

export const StyledPostWrapper = styled("div", {
  width: "100%",
  maxWidth: 864,
  margin: "0 auto",

  main: {
    marginTop: "-100px",
  },
});

export const StyledPostInfo = styled("div", {
  padding: "2rem",
  background: "$gray900",
  borderRadius: 10,
  boxShadow: "0px 2px 28px rgba(0, 0, 0, 0.2)",

  ".post-header": {
    marginBottom: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    a: {
      textTransform: "uppercase",
      color: "$blue",
      fontSize: ".75rem",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      gap: ".5rem",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  strong: {
    fontSize: "1.4rem",
    color: "$gray100",
  },

  ".post-footer": {
    marginTop: ".5rem",
    display: "flex",
    alignItems: "center",
    gap: "2rem",

    span: {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
      color: "$gray400",
    },
  },
});

export const StyledPostContent = styled("div", {
  padding: "2.5rem 2rem",

  a: {
    display: "block",
    margin: "1rem 0",
    color: "$blue",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
