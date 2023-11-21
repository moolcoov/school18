interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLOrSVGElement>, HTMLOrSVGElement> {
	size: number;
}

type IconComponent = ({ size }: IconProps) => ReactNode;
