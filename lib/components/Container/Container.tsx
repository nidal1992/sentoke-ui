import { createElement } from "react";
import clsx from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { ContainerProps } from "./Container.props.ts";
import { className, vars } from "./Container.css.ts";

export const Container: React.FC<ContainerProps> = ({
  tag = "div",
  maxWidth = "500px",
  maxWidthTab = undefined,
  maxWidthMob = undefined,
  paddingInline = "20px",
  paddingInlineTab = undefined,
  paddingInlineMob = undefined,
  className: classNameProps,
  style,
  children,
}) => {
  return createElement(
    tag,
    {
      className: clsx(className, classNameProps),
      style: {
        ...assignInlineVars({
          [vars.maxWidth]: maxWidth,
          [vars.maxWidthTab]: maxWidthTab,
          [vars.maxWidthMob]: maxWidthMob,
          [vars.paddingInline]: paddingInline,
          [vars.paddingInlineTab]: paddingInlineTab,
          [vars.paddingInlineMob]: paddingInlineMob,
        }),
        ...style,
      },
    },
    children,
  );
};
