import type { ContainerTag } from "../../types.ts";

export interface ContainerProps extends React.HTMLProps<HTMLElement> {
  tag?: ContainerTag;
  maxWidth?: string;
  maxWidthTab?: string;
  maxWidthMob?: string;
  paddingInline?: string;
  paddingInlineTab?: string;
  paddingInlineMob?: string;
}
