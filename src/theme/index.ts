import { ModalTheme } from "../widgets/Modal/types";
import {
  Colors,
  Breakpoints,
  MediaQueries,
  Spacing,
  Shadows,
  Radii,
  ZIndices,
  FontFamily,
} from "./types";
import { ButtonTheme } from "../components/Button/types";
import { lightColors, darkColors } from "./colors";
import { AlertTheme } from "../components/Alert/types";

export interface TheiaTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  fontFamily: FontFamily;
  modal: ModalTheme;
  button: ButtonTheme;
  alert: AlertTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors, darkColors };
