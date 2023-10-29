import type { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level: 0 | 1 | 2 | "tiny";
	// children?: string | JSX.Element | JSX.Element[];
}

export function Heading({ level, children, className, ...props }: HeadingProps): JSX.Element {
	switch (level) {
		case 0:
			return (
				<h1 className={cn(styles.heading_0, className)} {...props}>
					{children}
				</h1>
			);
		case 1:
			return (
				<h1 className={cn(styles.heading_1, className)} {...props}>
					{children}
				</h1>
			);
		case 2:
			return (
				<h2 className={cn(styles.heading_2, className)} {...props}>
					{children}
				</h2>
			);
		case "tiny":
			return (
				<h3 className={cn(styles.heading_tiny, className)} {...props}>
					{children}
				</h3>
			);
	}
}
