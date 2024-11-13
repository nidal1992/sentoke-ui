import clsx from "clsx";
import { createElement } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { globalCss } from "../../global.css.ts";
import { WrapperProps } from "./Wrapper.props.ts";
import { className, vars } from "./Wrapper.css.ts";

export const Wrapper: React.FC<WrapperProps> = ({
  tag,
  style,
  children,
  className: classNameProp,
  p = "20px",
  pm = undefined,
  r = "radiusB",
  rm = undefined,
  bgCol = "c900",
  bgColMob = undefined,
}) => {
  return createElement(
    tag || "div",
    {
      className: clsx(className, classNameProp),
      style: {
        ...assignInlineVars({
          [vars.padding]: p,
          [vars.paddingMob]: pm,

          [vars.radius]: globalCss.layout[r],
          [vars.radiusMob]: rm && globalCss.layout[rm],

          [vars.backgroundColor]: globalCss.color[bgCol],
          [vars.backgroundColorMob]: bgColMob && globalCss.color[bgColMob],
        }),
        ...style,
      },
    },
    children,
  );
};
