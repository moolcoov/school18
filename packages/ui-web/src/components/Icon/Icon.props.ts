import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLOrSVGElement>, HTMLOrSVGElement> {
	size: number;
}
