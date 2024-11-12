import { createGlobalTheme } from "@vanilla-extract/css";

import type { Color, Device } from "./types";

const color: Record<Color, string> = {
  c1000: "hsl(0, 0%, 8%)",
  c900: "hsl(0, 0%, 11%)",
  c800: "hsl(0, 0%, 13%)",
  c700: "hsl(0, 0%, 15%)",
  c600: "hsl(0, 1%, 19%)",
  c500: "hsl(0, 0%, 25%)",
  c300: "hsl(0, 0%, 54%)",
  c200: "hsl(0, 0%, 69%)",
  c100: "hsl(0, 0%, 100%)",

  primary: "#ffc800",
  failure: "#d02338",
  success: "#16a71a",
};

export const layout = {
  radiusS: "5px",
  radiusM: "10px",
  radiusB: "15px",
  radiusL: "30px",
} as const;
export type Radius = keyof typeof layout;

export const breakpoints: Record<Device, string> = {
  mob: "(max-width: 520px)",
  tab: "(max-width: 768px)",
  desc: "(max-width: 1080px)",
};

export const globalCss = createGlobalTheme(":root", {
  color,
  layout,
});
