import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#fff",
  primaryBright: "#E4E7EC",
  primaryDark: "#0098A1",
  secondary: "#965a50ff",
  success: "#31D0AA",
  warning: "#FFB237",
  green: "#009859ff",
  yellow: "#FFB300",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#965a50ff",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#E5E5E5",
  text: "#000",
  textGray: "#101828",
  link: "#667085",
  textDisabled: "#BDC2C4",
  textSubtle: "#009859ff",
  borderColor: "#965a50ff",
  card: "#FFFFFF",
  yellow: "#FFB300",
  white: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#191A2B",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#000",
  text: "#FFFFFF",
  textGray: "#46484b",
  link: "#989DFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#000",
  yellow: "#FFB300",
  white: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
