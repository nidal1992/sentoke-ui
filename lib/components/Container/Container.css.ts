import { createTheme, fallbackVar, style } from "@vanilla-extract/css";

import { breakpoints } from "../../global.css.ts";

export const [, vars] = createTheme({
  maxWidth: "",
  maxWidthTab: "",
  maxWidthMob: "",
  paddingInline: "",
  paddingInlineTab: "",
  paddingInlineMob: "",
});

export const className = style({
  marginInline: "auto",
  paddingInline: vars.paddingInline,
  maxWidth: vars.maxWidth,

  "@media": {
    [breakpoints.tab]: {
      paddingInline: fallbackVar(vars.paddingInlineTab, vars.paddingInline),
      maxWidth: fallbackVar(vars.maxWidthTab, vars.maxWidth),
    },

    [breakpoints.mob]: {
      paddingInline: fallbackVar(vars.paddingInlineMob, vars.paddingInlineTab),
      maxWidth: fallbackVar(vars.maxWidthMob, vars.maxWidthTab),
    },
  },
});
