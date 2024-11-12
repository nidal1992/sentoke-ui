import { createTheme, fallbackVar, style } from "@vanilla-extract/css";

import { breakpoints } from "../../global.css.ts";

export const [, vars] = createTheme({
  padding: "",
  paddingMob: "",
  radius: "",
  radiusMob: "",
  backgroundColor: "",
  backgroundColorMob: "",
});

export const className = style({
  padding: vars.padding,
  borderRadius: vars.radius,
  backgroundColor: vars.backgroundColor,

  "@media": {
    [breakpoints.mob]: {
      padding: fallbackVar(vars.paddingMob, vars.padding),
      borderRadius: fallbackVar(vars.radiusMob, vars.radius),
      backgroundColor: fallbackVar(
        vars.backgroundColorMob,
        vars.backgroundColor,
      ),
    },
  },
});
