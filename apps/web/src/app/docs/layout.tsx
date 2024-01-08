import type { ReactNode } from "react";
import cn from "classnames";
import { DocsNavigation } from "./sections/DocsNavigation";
import styles from "./Docs.module.scss";

export default function DocsLayout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div className={cn("wrapper", styles.docs)}>
			<DocsNavigation />
			{children}
		</div>
	);
}
