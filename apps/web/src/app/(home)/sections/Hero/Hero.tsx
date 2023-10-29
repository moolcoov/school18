import Image from "next/image";
import HeroImage from "./image.png";
import styles from "./Hero.module.scss";

export function Hero(): JSX.Element {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__textbox}>
				<span className={styles.hero__subtitle}>МБОУ СОШ №18</span>
				<div className={styles.hero__title}>
					<h1 className={styles.hero__title_first}>ШКОЛА, ГДЕ</h1>
					<h1 className={styles.hero__title_second}>ЦЕНЯТ</h1>
				</div>
			</div>
			<Image
				alt="МБОУ СОШ №18"
				className={styles.hero__image}
				fetchPriority="high"
				fill
				placeholder="blur"
				quality={100}
				src={HeroImage}
			/>
		</div>
	);
}
