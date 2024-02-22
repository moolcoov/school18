"use client";
import type { UrlObject } from "node:url";
import cn from "classnames";
import React, { useMemo } from "react";
import Link from "next/link";
import type { Route } from "next";
import styles from "./Button.module.scss";

interface ButtonProps {
	variant?: "primary" | "secondary" | "transparent" | "text";
	size?: "l" | "m" | "s";
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
		variant = "primary",
		size = "l",
		icon,
		label = "",
		href,
		prefetch = true,
		onClick,
		className,
		children,
		type = "button",
		linkComponent = Link,
	}: ButtonProps = props;

	const LinkComponent = linkComponent;

	const buttonStyles = useMemo(
		() => cn(styles.button, styles[`button_${variant}`], styles[`button_${size}`]),
		[size, variant],
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
