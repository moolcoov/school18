"use client";
import type { UrlObject } from "node:url";
import cn from "classnames";
import React, { useMemo } from "react";
import Link from "next/link";
import type { Route } from "next";
import styles from "./Button.module.scss";

interface ButtonProps {
	buttonType?: "action" | "navigation";
	variant?: "primary" | "secondary" | "transparent";
	align?: "left" | "center" | "right";
	icon?: React.ReactNode;
	label?: string;
	href?: string | UrlObject;
	prefetch?: boolean;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset";
	linkComponent?: JSX.ElementType;
}

export function Button(props: ButtonProps): JSX.Element {
	const {
		buttonType = "action",
		variant = "primary",
		align = "center",
		icon,
		label = "",
		href,
		prefetch = true,
		onClick,
		className,
		children,
		type,
		linkComponent = Link,
	}: ButtonProps = props;

	const LinkComponent = linkComponent;

	const buttonStyles = useMemo(
		() => cn(styles.button, styles[`button_${buttonType}`], styles[`button_${variant}`], styles[`button_${align}`]),
		[buttonType, variant, align],
	);

	if (typeof href !== "undefined") {
		return (
			<LinkComponent
				className={cn(buttonStyles, className)}
				href={href as Route}
				onClick={onClick}
				prefetch={prefetch}
			>
				<>
					{icon}
					{label ? <span>{label}</span> : null}
					{children}
				</>
			</LinkComponent>
		);
	}

	return (
		<button className={cn(buttonStyles, className)} onClick={onClick} type={type}>
			{icon}
			{label ? <span>{label}</span> : null}
			{children}
		</button>
	);
}
