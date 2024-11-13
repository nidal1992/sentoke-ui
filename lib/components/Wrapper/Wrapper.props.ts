import { Radius } from "../../global.css.ts";
import type { Color } from "../../types.ts";

export interface WrapperProps extends React.HTMLProps<HTMLDivElement> {
  r?: Radius;
  rm?: Radius;
  bgCol?: Color;
  bgColMob?: Color;
  p?: string;
  pm?: string;
}
