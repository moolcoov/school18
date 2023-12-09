"use client";

import { useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { IconChevronLeftCircle, IconChevronRightCircle } from "ui";
import Link from "next/link";
import type { Route } from "next";
import styles from "./Gallery.module.scss";
import { useContainerDimensions } from "@/hooks";

export function Gallery({ images }: { images: VkWallGetPostAttachmentPhoto[] }): JSX.Element {
	const imageRef = useRef<HTMLDivElement>(null);

	const { width } = useContainerDimensions(imageRef);
	const count = images.length;

	const [index, setIndex] = useState(0);
	const gap = 8;
	const [offset, setOffset] = useState<null | "right" | "left">(null);

	if (!images.at(0)) {
		return <>{null}</>;
	}

	const sizes = getImageSize(images[0]);

	function handleLeftClick(): void {
		if (index !== 0) {
			setIndex(index - 1);
		}

		if (index === 0 || index === 1) {
			setOffset(null);
		}
	}
	function handleRightClick(): void {
		if (index !== count - 1) {
			setIndex(index + 1);
		}

		if (index === count - 1 || index === count - 2) {
			setOffset(null);
		}
	}

	function handleLeftHover(): void {
		if (index !== 0) {
			setOffset("left");
		}
	}
	function handleRightHover(): void {
		if (index !== count - 1) {
			setOffset("right");
		}
	}

	return (
		<div className={styles.gallery} suppressHydrationWarning>
			<div className={styles.gallery__slider}>
				{images.length > 1 ? (
					<div
						aria-hidden="true"
						className={cn(styles["gallery__control-button"], styles["gallery__control-button_left"], {
							[styles["gallery__control-button_left_inactive"]]: index === 0,
						})}
						onClick={handleLeftClick}
						onMouseEnter={handleLeftHover}
						onMouseLeave={() => {
							setOffset(null);
						}}
					>
						<div className={cn(styles["gallery__control-button__button"])}>
							<IconChevronLeftCircle size={24} />
						</div>
					</div>
				) : null}

				<div className={styles.gallery__content_wrapper}>
					<div
						className={cn(styles.gallery__content, {
							[styles.gallery__content_left]: offset === "left",
							[styles.gallery__content_right]: offset === "right",
						})}
						style={{
							transform: `translate3d(-${(width + gap) * index}px, 0, 0)`,
						}}
					>
						{[...images].map((image, i) => {
							const size = getImageSize(image);
							const thumbnailSize = getImageSize(image, 0);

							return (
								<div
									className={styles.gallery__content__image}
									key={image.photo.id}
									ref={i === 0 ? imageRef : undefined}
									style={{ aspectRatio: `${sizes.width}/${sizes.height}` }}
								>
									<div className={styles.gallery__content__thumbnail}>
										<Image alt="thumbnail" fill loading="eager" quality={1} src={thumbnailSize.url} />
									</div>
									<Link href={size.url as Route} target="_blank">
										<Image
											alt={image.photo.text}
											height={size.height}
											loading="eager"
											quality={100}
											src={size.url}
											width={size.width}
										/>
									</Link>
								</div>
							);
						})}
					</div>
				</div>

				{images.length > 1 ? (
					<div
						aria-hidden="true"
						className={cn(styles["gallery__control-button"], styles["gallery__control-button_right"], {
							[styles["gallery__control-button_right_inactive"]]: index === count - 1,
						})}
						onClick={handleRightClick}
						onMouseEnter={handleRightHover}
						onMouseLeave={() => {
							setOffset(null);
						}}
					>
						<div className={cn(styles["gallery__control-button__button"])}>
							<IconChevronRightCircle size={24} />
						</div>
					</div>
				) : null}
			</div>

			{images.length > 1 ? (
				<div className={styles.gallery__bullets__wrapper}>
					<div
						className={cn(styles.gallery__bullets, { [styles.gallery__bullets_few]: images.length <= 5 })}
						style={images.length > 5 ? { left: getBulletsOffset(index, images.length) } : undefined}
					>
						{[...Array<number>(images.length)].map((s, i) => (
							<button
								className={cn(styles.gallery__bullets__bullet__wrapper, {
									[styles.gallery__bullets__bullet__wrapper_active]: index === i,
								})}
								key={s}
								onClick={() => {
									setIndex(i);
								}}
								type="button"
							>
								<div
									className={cn(styles.gallery__bullets__bullet, {
										[styles.gallery__bullets__bullet_active]: index === i,
										[styles.gallery__bullets__bullet_small]:
											images.length > 5 && isBulletSmall(index, i, images.length),
									})}
								/>
							</button>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
}

function getBulletsOffset(index: number, length: number): number {
	if (index < 3) {
		return 0;
	}

	if (length - index === 1) {
		return (index - 4) * -15;
	}

	if (length - index === 2) {
		return (index - 3) * -15;
	}

	return (index - 2) * -15;
}

function isBulletSmall(index: number, bulletIndex: number, length: number): boolean {
	if (index < 3) {
		return bulletIndex === 4;
	}

	if (index >= length - 3) {
		return length - bulletIndex === 5;
	}

	return Math.abs(bulletIndex - index) === 2;
}

function getImageSize(image: VkWallGetPostAttachmentPhoto, index?: number): VkWallGetPostAttachmentPhotoSize {
	const sizes = [...image.photo.sizes].sort((a, b) => {
		if (a.width >= b.width) {
			return 1;
		}

		return -1;
	});

	return sizes[index ?? sizes.length - 1];
}
