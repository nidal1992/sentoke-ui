import { createElement } from "react";
import clsx from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { className, vars } from "./Flex.css.ts";
import { FlexProps } from "./Flex.props.ts";

export const Flex: React.FC<FlexProps> = ({
  tag = "div",
  dir = "row",
  dirM = undefined,
  align = "flex-start",
  alignM = undefined,
  jus = "flex-start",
  jusM = undefined,
  wrap = "nowrap",
  wrapM = undefined,
  gap = undefined,
  gapM = undefined,
  style,
  children,
  className: classNameProps,
}) => {
  return createElement(
    tag,
    {
      className: clsx(className, classNameProps),
      style: {
        ...assignInlineVars({
          [vars.dir]: dir,
          [vars.dirM]: dirM,

          [vars.align]: align,
          [vars.alignM]: alignM,

          [vars.jus]: jus,
          [vars.jusM]: jusM,

          [vars.wrap]: wrap,
          [vars.wrapM]: wrapM,

          [vars.gap]: gap,
          [vars.gapM]: gapM,
        }),
        ...style,
      },
    },
    children,
  );
};
