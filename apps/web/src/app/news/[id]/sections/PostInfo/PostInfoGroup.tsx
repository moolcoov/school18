import Image from "next/image";
import styles from "./PostInfo.module.scss";

export function PostInfoGroup({ name, imageSrc }: { name: string; imageSrc: string }): JSX.Element {
	return (
		<div className={styles.group}>
			<div className={styles.group__image}>
				<Image alt={name} fill src={imageSrc} />
			</div>
			<span className={styles.group__name}>{name}</span>
		</div>
	);
}
