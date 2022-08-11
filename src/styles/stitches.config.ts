import { createStitches } from "@stitches/react";

export const {
  keyframes,
  css,
  styled,
  getCssText,
  createTheme,
  globalCss,
  prefix,
  reset,
} = createStitches({
  theme: {
    colors: {
      blue: "#3294f8",
      gray100: "#E7edf4",
      gray200: "#c4d4e3",
      gray300: "#afc2d4",
      gray400: "#7b96b2",
      gray500: "#3a536b",
      gray600: "#1c2f41",
      gray700: "#112131",
      gray900: "#0b1b2b",
      gray1000: "#071422",
      gray2000: "#040f1a",
    },

    fonts: {
      nunito: "'Nunito', sans-serif",
    },
  },
});
