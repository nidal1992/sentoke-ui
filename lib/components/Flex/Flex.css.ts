import { createTheme, fallbackVar, style } from "@vanilla-extract/css";

import { breakpoints } from "../../global.css.ts";

export const [, vars] = createTheme({
  dir: "",
  dirM: "",
  wrap: "",
  wrapM: "",
  jus: "",
  jusM: "",
  align: "",
  alignM: "",
  gap: "",
  gapM: "",
});

export const className = style({
  display: "flex",

  flexDirection: vars.dir,
  alignItems: vars.align,
  justifyContent: vars.jus,
  flexWrap: vars.wrap,
  gap: vars.gap,

  "@media": {
    [breakpoints.mob]: {
      flexDirection: fallbackVar(vars.dirM, vars.dir),
      alignItems: fallbackVar(vars.alignM, vars.align),
      justifyContent: fallbackVar(vars.jusM, vars.jus),
      flexWrap: fallbackVar(vars.wrapM, vars.wrap),
      gap: fallbackVar(vars.gapM, vars.gap),
    },
  },
});
