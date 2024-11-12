import clsx from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import type { Color } from "../../types.ts";

import { globalCss, Radius } from "../../global.css.ts";
import { className, vars } from "./Wrapper.css.ts";

interface WrapperProps extends React.HTMLProps<HTMLDivElement> {
  r?: Radius;
  rm?: Radius;
  bgCol?: Color;
  bgColMob?: Color;
  p?: string;
  pm?: string;
}

export const Wrapper = ({
  p = "20px",
  pm = undefined,
  r = "radiusB",
  rm = undefined,
  bgCol = "c900",
  bgColMob = undefined,
  style,
  children,
  className: classNameProp,
}: WrapperProps) => {
  return (
    <div
      className={clsx(className, classNameProp)}
      style={{
        ...assignInlineVars({
          [vars.padding]: p,
          [vars.paddingMob]: pm,

          [vars.radius]: globalCss.layout[r],
          [vars.radiusMob]: rm && globalCss.layout[rm],

          [vars.backgroundColor]: globalCss.color[bgCol],
          [vars.backgroundColorMob]: bgColMob && globalCss.color[bgColMob],
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
