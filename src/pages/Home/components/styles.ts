import { styled } from "../../../styles/stitches.config";

export const StyledSectionProfile = styled("section", {
  background: "$gray900",
  borderRadius: 10,
  boxShadow: "0px 2px 28px rgba(0, 0, 0, 0.2)",
});

export const StyledSectionWrapper = styled("div", {
  width: "100%",
  padding: "2rem",
  display: "flex",
  gap: 32,

  img: {
    width: "9.25rem",
    height: "9.25rem",
    borderRadius: 8,
  },
});

export const StyledSectionContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-between",
  flex: 1,

  ".section-header": {
    marginBottom: ".5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    a: {
      display: "flex",
      gap: ".5rem",
      textTransform: "uppercase",
      color: "$blue",
      fontSize: ".75rem",

      "&:hover": {
        textDecoration: 'underline'
      }
    },
  },

  ".section-footer": {
    marginTop: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",

    span: {
      color: "$gray200",
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
    },
  },
});
