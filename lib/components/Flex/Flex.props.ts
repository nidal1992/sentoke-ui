import { ContainerTag } from "../../types.ts";

type DirType = "column" | "row" | "row-reverse" | "column-reverse";
type AlignType = "center" | "flex-start" | "flex-end" | "stretch";
type WrapType = "wrap" | "nowrap";
type Justify =
  | "center"
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "flex-start"
  | "flex-end";

export interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  tag?: ContainerTag;

  dir?: DirType;
  dirM?: DirType;

  align?: AlignType;
  alignM?: AlignType;

  jus?: Justify;
  jusM?: Justify;

  wrap?: WrapType;
  wrapM?: WrapType;

  gap?: string;
  gapM?: string;
}
