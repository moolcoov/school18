import type { IconProps } from "./Icon.props";

const fillPrimary = "var(--fill-primary, currentColor)";
const fillSecondary = "var(--fill-secondary, var(--color-background-100))";

export function IconChevronRightBorder({ size }: IconProps): JSX.Element {
	return (
		<svg height={size} viewBox="0 0 25 25" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.105 24.21C18.7369 24.21 24.2121 18.7273 24.2121 12.105C24.2121 5.47312 18.7273 0 12.0954 0C5.47523 0 0 5.47312 0 12.105C0 18.7273 5.48484 24.21 12.105 24.21ZM12.105 21.8255C6.71085 21.8255 2.39412 17.4991 2.39412 12.105C2.39412 6.71085 6.70124 2.38452 12.0954 2.38452C17.4895 2.38452 21.8276 6.71085 21.8276 12.105C21.8276 17.4991 17.4991 21.8255 12.105 21.8255Z"
				fill={fillPrimary}
			/>
			<path
				d="M9.47112 17.8805C9.80744 18.2072 10.4948 18.1859 10.8567 17.8474L15.6305 13.3495C16.3427 12.6959 16.3427 11.5376 15.6305 10.8839L10.8567 6.38813C10.4555 6.00821 9.85525 6.00282 9.48916 6.35297C9.07198 6.73078 9.06237 7.38421 9.46362 7.75452L14.1049 12.105L9.46362 16.4789C9.07409 16.845 9.06354 17.4729 9.47112 17.8805Z"
				fill={fillSecondary}
			/>
		</svg>
	);
}

export function IconChevronLeftBorder({ size }: IconProps): JSX.Element {
	return (
		<svg height={size} viewBox="0 0 25 25" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.105 24.21C18.7369 24.21 24.2121 18.7273 24.2121 12.105C24.2121 5.47312 18.7273 0 12.0954 0C5.47523 0 0 5.47312 0 12.105C0 18.7273 5.48484 24.21 12.105 24.21ZM12.105 21.8255C6.71085 21.8255 2.39412 17.4991 2.39412 12.105C2.39412 6.71085 6.70124 2.38452 12.0954 2.38452C17.4895 2.38452 21.8276 6.71085 21.8276 12.105C21.8276 17.4991 17.4991 21.8255 12.105 21.8255Z"
				fill={fillPrimary}
			/>
			<path
				d="M14.4327 17.8805C14.8424 17.4729 14.8222 16.845 14.4402 16.4789L9.79884 12.105L14.4402 7.75452C14.8339 7.38421 14.8243 6.73077 14.4167 6.35297C14.0506 6.00282 13.4504 6.00821 13.0471 6.38813L8.27541 10.8839C7.56314 11.5376 7.56314 12.6959 8.27541 13.3495L13.0471 17.8474C13.411 18.1859 14.0963 18.2072 14.4327 17.8805Z"
				fill={fillSecondary}
			/>
		</svg>
	);
}

export function IconArrowLeft({ size }: IconProps): JSX.Element {
	return (
		<svg height={size} viewBox="0 0 20 21" width={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M0 10.5485C0 10.8684 0.139303 11.1785 0.379589 11.4101L7.36065 18.3786C7.61046 18.6217 7.888 18.7418 8.18588 18.7418C8.84173 18.7418 9.32696 18.273 9.32696 17.6351C9.32696 17.3068 9.19364 17.0128 8.98422 16.814L6.6131 14.4138L2.66897 10.8116L2.29236 11.4885L5.95425 11.704H18.8322C19.5275 11.704 20 11.2304 20 10.5485C20 9.86656 19.5275 9.39297 18.8322 9.39297H5.95425L2.29236 9.60849L2.66897 10.2959L6.6131 6.6831L8.98422 4.28106C9.19364 4.07169 9.32696 3.78821 9.32696 3.45986C9.32696 2.82199 8.84173 2.35327 8.18588 2.35327C7.888 2.35327 7.61046 2.46463 7.34328 2.73371L0.379589 9.68682C0.139303 9.91842 0 10.2286 0 10.5485Z" />
		</svg>
	);
}

export function IconThemeLight({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.0278 16.8343C14.7888 16.8343 17.0783 14.5448 17.0783 11.7761C17.0783 8.99928 14.7888 6.70981 12.0278 6.70981C9.25898 6.70981 6.96951 8.99928 6.96951 11.7761C6.96951 14.5448 9.25898 16.8343 12.0278 16.8343ZM12.0278 15.0462C10.2347 15.0462 8.74975 13.5613 8.74975 11.7761C8.74975 9.98288 10.2347 8.49622 12.0278 8.49622C13.8131 8.49622 15.2998 9.98288 15.2998 11.7761C15.2998 13.5613 13.8131 15.0462 12.0278 15.0462ZM12.9997 2.01323C12.9997 1.48534 12.5574 1.04138 12.0278 1.04138C11.5078 1.04138 11.0656 1.48534 11.0656 2.01323V3.97407C11.0656 4.4958 11.5078 4.93803 12.0278 4.93803C12.5574 4.93803 12.9997 4.4958 12.9997 3.97407V2.01323ZM16.849 5.60108C16.4845 5.97168 16.4863 6.58775 16.8542 6.96355C17.2248 7.328 17.8488 7.33242 18.2228 6.95835L19.612 5.56565C19.9844 5.19504 19.9827 4.56319 19.6069 4.19528C19.2424 3.82468 18.6184 3.82814 18.254 4.20047L16.849 5.60108ZM21.7722 12.7383C22.3 12.7383 22.744 12.296 22.744 11.7761C22.744 11.2543 22.3 10.8121 21.7722 10.8121H19.8192C19.2974 10.8121 18.8553 11.2543 18.8553 11.7761C18.8553 12.296 19.2974 12.7383 19.8192 12.7383H21.7722ZM18.2114 16.5982C17.847 16.2258 17.2231 16.2293 16.849 16.6033C16.4845 16.9678 16.4863 17.59 16.8542 17.964L18.261 19.3629C18.6253 19.7257 19.2493 19.716 19.6172 19.3482C19.9878 18.9775 19.9861 18.3536 19.6103 17.9874L18.2114 16.5982ZM12.9997 19.5763C12.9997 19.0483 12.5574 18.6062 12.0278 18.6062C11.5078 18.6062 11.0656 19.0483 11.0656 19.5763V21.5371C11.0656 22.0589 11.5078 22.5028 12.0278 22.5028C12.5574 22.5028 12.9997 22.0589 12.9997 21.5371V19.5763ZM4.44535 17.9795C4.07744 18.3457 4.0757 18.9696 4.43052 19.3403C4.79843 19.7081 5.43028 19.7178 5.80262 19.3551L7.1936 17.964C7.5694 17.5979 7.57113 16.9757 7.20842 16.6033C6.84051 16.2372 6.20866 16.2337 5.83632 16.5982L4.44535 17.9795ZM2.28351 10.8121C1.76351 10.8121 1.32129 11.2543 1.32129 11.7761C1.32129 12.296 1.76351 12.7383 2.28351 12.7383H4.23646C4.76609 12.7383 5.21004 12.296 5.21004 11.7761C5.21004 11.2543 4.76609 10.8121 4.23646 10.8121H2.28351ZM5.83285 6.95835C6.20692 7.32453 6.83088 7.328 7.1936 6.96355C7.5694 6.60354 7.57113 5.96379 7.20842 5.60108L5.81744 4.20047C5.46089 3.83604 4.82904 3.82468 4.45671 4.19528C4.09053 4.56319 4.08706 5.19504 4.44361 5.55775L5.83285 6.95835Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function IconThemeDark({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 72 72" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M53.35 46.1006C36.2859 46.1006 25.6778 35.8368 25.6778 19.3223C25.6778 14.6403 26.4465 10.4442 27.6297 8.15946C28.1811 7.12346 28.3353 6.50006 28.3353 5.7359C28.3353 4.38049 27.1946 3 25.5557 3C25.1598 3 24.4394 3.13111 23.4471 3.51929C11.3781 8.41465 3 20.976 3 34.5477C3 54.1109 17.2291 68.3722 36.7924 68.3722C50.7246 68.3722 62.2243 60.93 67.4821 48.8307C67.9313 47.8621 68.036 47.028 68.036 46.53C68.036 44.9464 66.8015 43.9019 65.5163 43.9019C64.8573 43.9019 64.2694 43.9919 63.3363 44.3911C60.8722 45.4282 57.0732 46.1006 53.35 46.1006ZM9.17874 34.3632C9.17874 25.2196 13.783 16.3788 21.2498 11.3491C20.3834 13.979 19.9239 16.8666 19.9239 20.0498C19.9239 39.8447 32.0861 51.7466 52.3044 51.7466C55.0994 51.7466 57.4673 51.4244 59.7295 50.649C55.0416 57.8701 46.3723 62.2142 36.9506 62.2142C20.8975 62.2142 9.17874 50.4954 9.17874 34.3632Z"
				fill={fillPrimary}
			/>
		</svg>
	);
}

export function IconThemeSystem({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.0865 21.7496C17.5341 21.7496 22.0316 17.246 22.0316 11.8062C22.0316 6.35863 17.5262 1.86285 12.0786 1.86285C6.64058 1.86285 2.14307 6.35863 2.14307 11.8062C2.14307 17.246 6.64847 21.7496 12.0865 21.7496ZM12.0865 19.7909C7.65555 19.7909 4.10967 16.2371 4.10967 11.8062C4.10967 7.37534 7.64766 3.82157 12.0786 3.82157C16.5094 3.82157 20.0729 7.37534 20.0729 11.8062C20.0729 16.2371 16.5173 19.7909 12.0865 19.7909Z"
				fill="currentColor"
			/>
			<path
				d="M12.0978 14.7952C13.7392 14.7952 15.0963 13.4494 15.0963 11.7949C15.0963 10.1438 13.7392 8.79633 12.0978 8.79633C10.445 8.79633 9.08789 10.1438 9.08789 11.7949C9.08789 13.4494 10.445 14.7952 12.0978 14.7952Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function IconCheck({ size }: IconProps): JSX.Element {
	return (
		<svg height={size} viewBox="0 0 10 10" width={size} xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1914_1548)">
				<path d="M3.22883 8.60948C2.94497 8.60959 2.67274 8.49677 2.47219 8.29588L0.184609 6.00915C-0.0615362 5.76293 -0.0615362 5.3638 0.184609 5.11758C0.430832 4.87143 0.829961 4.87143 1.07618 5.11758L3.22883 7.27022L8.92382 1.57523C9.17004 1.32909 9.56917 1.32909 9.81539 1.57523C10.0615 1.82146 10.0615 2.22059 9.81539 2.46681L3.98547 8.29588C3.78492 8.49677 3.51269 8.60959 3.22883 8.60948Z" />
			</g>
			<defs>
				<clipPath id="clip0_1914_1548">
					<rect height="10" width="10" />
				</clipPath>
			</defs>
		</svg>
	);
}

// Arrows
// - Default
export function IconChevronLeft({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 14 14" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.00054 7.1869C4.00269 7.38614 4.07709 7.55781 4.23479 7.70969L8.79845 12.1806C8.93134 12.3087 9.08977 12.373 9.28114 12.373C9.65801 12.373 9.96094 12.077 9.96094 11.6964C9.96094 11.5109 9.88547 11.3392 9.75481 11.2059L5.63472 7.188L9.75481 3.16795C9.88442 3.03565 9.96094 2.86775 9.96094 2.67635C9.96094 2.2968 9.65801 1.99975 9.28114 1.99975C9.09188 1.99975 8.93134 2.06405 8.79845 2.19695L4.23479 6.66415C4.07604 6.82085 4.00054 6.98875 4.00054 7.1869Z"
				fill={fillPrimary}
			/>
		</svg>
	);
}
export function IconChevronRight({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 14 14" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.9604 7.18615C9.95825 6.98691 9.88385 6.81524 9.72615 6.66336L5.16249 2.19242C5.0296 2.06434 4.87116 2 4.6798 2C4.30293 2 4 2.29601 4 2.67664C4 2.86214 4.07547 3.03382 4.20613 3.16718L8.32621 7.18505L4.20613 11.2051C4.07652 11.3374 4 11.5053 4 11.6967C4 12.0763 4.30293 12.3733 4.6798 12.3733C4.86905 12.3733 5.0296 12.309 5.16249 12.1761L9.72615 7.7089C9.8849 7.5522 9.9604 7.3843 9.9604 7.18615Z"
				fill={fillPrimary}
			/>
		</svg>
	);
}
// - Circle
export function IconChevronRightCircle({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 25 25" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.105 24.21C18.7369 24.21 24.2121 18.7273 24.2121 12.105C24.2121 5.47312 18.7273 0 12.0954 0C5.47523 0 0 5.47312 0 12.105C0 18.7273 5.48484 24.21 12.105 24.21Z"
				fill="var(--fill-primary)"
			/>
			<path
				d="M9.33993 18.1148C8.92391 17.687 8.93446 17.0273 9.34204 16.6452L14.1631 12.115L9.34204 7.59854C8.92063 7.20268 8.93024 6.52487 9.35586 6.12902C9.74961 5.75542 10.3817 5.77792 10.801 6.17378L15.7608 10.8227C16.505 11.5178 16.4954 12.726 15.7608 13.4116L10.801 18.0721C10.4211 18.4361 9.7018 18.4553 9.33993 18.1148Z"
				fill="var(--fill-secondary)"
			/>
		</svg>
	);
}

export function IconChevronLeftCircle({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 25 25" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.105 24.21C18.7369 24.21 24.2121 18.7273 24.2121 12.105C24.2121 5.47312 18.7273 0 12.0954 0C5.47523 0 0 5.47312 0 12.105C0 18.7273 5.48484 24.21 12.105 24.21Z"
				fill="var(--fill-primary)"
			/>
			<path
				d="M14.473 17.9566C14.1304 18.2875 13.4324 18.2683 13.06 17.9236L8.22924 13.3708C7.50432 12.7045 7.50432 11.5272 8.22924 10.8609L13.06 6.31023C13.4718 5.9261 14.0826 5.92281 14.4571 6.27719C14.8731 6.66344 14.8827 7.33164 14.4805 7.70616L9.78852 12.1052L14.4805 16.5255C14.8689 16.9 14.889 17.5385 14.473 17.9566Z"
				fill="var(--fill-secondary)"
			/>
		</svg>
	);
}

export function IconChevronDoubleRightCircle({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 21 21" width={size} xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#IconChevronDoubleRightCircle)">
				<path
					d="M10.5009 0.500001C5.0227 0.500001 0.499999 5.02928 0.499999 10.5C0.499998 15.9786 5.03063 20.5 10.5088 20.5C15.9773 20.5 20.5 15.9786 20.5 10.5C20.5 5.02929 15.9693 0.500002 10.5009 0.500001Z"
					fill="var(--fill-primary)"
				/>
				<path
					d="M7.11203 6.05965C7.00137 5.95079 6.86144 5.89062 6.70334 5.89062C6.37527 5.89062 6.11654 6.14523 6.11654 6.47056C6.11654 6.6305 6.18623 6.77853 6.29641 6.89193L10.0774 10.5863L10.0774 10.095L6.29641 13.7816C6.18533 13.8959 6.11654 14.0472 6.11654 14.202C6.11654 14.5283 6.37527 14.7861 6.70334 14.7861C6.86234 14.7861 6.99905 14.7269 7.11203 14.6171L11.0255 10.789C11.1598 10.6661 11.2286 10.5116 11.2305 10.3367C11.2305 10.1669 11.1607 10.0198 11.0255 9.88456L7.11203 6.05965Z"
					fill="var(--fill-secondary)"
				/>
				<path
					d="M11.5973 6.05965C11.4867 5.95079 11.3508 5.89062 11.1886 5.89062C10.8606 5.89062 10.605 6.14523 10.605 6.47056C10.605 6.6305 10.6706 6.77853 10.7817 6.89193L14.5669 10.5863L14.5669 10.095L10.7817 13.7816C10.6697 13.8959 10.605 14.0472 10.605 14.202C10.605 14.5283 10.8606 14.7861 11.1886 14.7861C11.3518 14.7861 11.4876 14.7269 11.5973 14.6171L15.5108 10.789C15.6442 10.6661 15.7139 10.5116 15.7148 10.3367C15.7148 10.1669 15.6493 10.0198 15.515 9.88456L11.5973 6.05965Z"
					fill="var(--fill-secondary)"
				/>
			</g>
			<defs>
				<clipPath id="IconChevronDoubleRightCircle">
					<rect fill="white" height="20" transform="translate(20.5 20.5) rotate(-180)" width="20" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function IconChevronDoubleLeftCircle({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 21 21" width={size} xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#IconChevronDoubleLeftCircle)">
				<path
					d="M10.5009 0.500001C5.0227 0.500001 0.499999 5.02928 0.499999 10.5C0.499998 15.9786 5.03063 20.5 10.5088 20.5C15.9773 20.5 20.5 15.9786 20.5 10.5C20.5 5.02929 15.9693 0.500002 10.5009 0.500001Z"
					fill="var(--fill-primary)"
				/>
				<path
					d="M13.888 14.9404C13.9986 15.0492 14.1386 15.1094 14.2967 15.1094C14.6247 15.1094 14.8835 14.8548 14.8835 14.5294C14.8835 14.3695 14.8138 14.2215 14.7036 14.1081L10.9226 10.4137V10.905L14.7036 7.21842C14.8147 7.10412 14.8835 6.95284 14.8835 6.79796C14.8835 6.47171 14.6247 6.21387 14.2967 6.21387C14.1377 6.21387 14.0009 6.27313 13.888 6.38292L9.97447 10.211C9.84016 10.3339 9.77137 10.4884 9.76953 10.6633C9.76953 10.8331 9.83926 10.9802 9.97447 11.1154L13.888 14.9404Z"
					fill="var(--fill-secondary)"
				/>
				<path
					d="M9.40266 14.9404C9.51335 15.0492 9.64917 15.1094 9.81138 15.1094C10.1394 15.1094 10.395 14.8548 10.395 14.5294C10.395 14.3695 10.3294 14.2215 10.2183 14.1081L6.43314 10.4137V10.905L10.2183 7.21842C10.3303 7.10412 10.395 6.95284 10.395 6.79796C10.395 6.47171 10.1394 6.21387 9.81138 6.21387C9.64823 6.21387 9.51244 6.27313 9.40266 6.38292L5.48916 10.211C5.35577 10.3339 5.28606 10.4884 5.28516 10.6633C5.28516 10.8331 5.35075 10.9802 5.48504 11.1154L9.40266 14.9404Z"
					fill="var(--fill-secondary)"
				/>
			</g>
			<defs>
				<clipPath id="IconChevronDoubleLeftCircle">
					<rect fill="white" height="20" transform="translate(20.5 20.5) rotate(-180)" width="20" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function IconTelegram({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 72 72" width={size} xmlns="http://www.w3.org/2000/svg">
			<g opacity="1">
				<path
					d="M4.78954 30.9326L64.7546 9.24042C66.7576 8.51673 68.993 9.48164 69.7488 11.3991C70.0138 12.0733 70.0717 12.8032 69.9103 13.5053L59.5732 58.6651C59.0499 60.9538 56.6885 62.4041 54.2979 61.8999C53.7036 61.7764 53.1448 61.5349 52.6504 61.195L32.0636 46.9499C30.8261 46.0933 30.5451 44.4354 31.4432 43.2478C31.54 43.1211 31.6499 43.0005 31.7661 42.8892L52.9348 23.4143C53.374 23.0092 53.387 22.3381 52.9639 21.9143C52.5988 21.5525 52.0172 21.4844 51.5717 21.7566L22.718 39.2923C21.0092 40.3314 18.8997 40.5665 16.9841 39.9324L4.86384 35.9182C3.41989 35.442 2.65428 33.9294 3.15175 32.5471C3.4231 31.8049 4.02071 31.2109 4.78954 30.9326Z"
					fill={fillPrimary}
				/>
			</g>
		</svg>
	);
}

export function IconVk({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 72 72" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				clipRule="evenodd"
				d="M45.0234 3H26.9766C24.5619 3.03525 22.1449 3.1373 19.7256 3.30615C17.4828 3.44899 15.2806 3.82497 13.1191 4.43408C8.57262 5.85466 5.64537 8.85711 4.3374 13.4414C3.7928 15.5026 3.44905 17.5973 3.30615 19.7256C3.13776 22.1234 3.03571 24.5189 3 26.9121V45.0879C3.03571 47.481 3.13776 49.8764 3.30615 52.2744C3.42994 54.0111 3.67702 55.7297 4.04736 57.4307C5.30957 63.1831 8.81689 66.6903 14.5693 67.9526C16.271 68.3171 17.9897 68.564 19.7256 68.6938C22.1449 68.8624 24.5619 68.9642 26.9766 69H45.0234C47.4382 68.9642 49.8552 68.8624 52.2744 68.6938C54.4027 68.5511 56.4974 68.2072 58.5586 67.6626C63.2798 66.3146 66.3146 63.2798 67.6626 58.5586C68.2072 56.4974 68.5511 54.4027 68.6938 52.2744C68.863 49.8658 68.9652 47.4594 69 45.0557V26.9443C68.9652 24.5404 68.863 22.1342 68.6938 19.7256C68.5511 17.5973 68.2072 15.5026 67.6626 13.4414C66.3146 8.72021 63.2798 5.68555 58.5586 4.3374C56.6244 3.8199 54.6585 3.48689 52.6611 3.33838C50.1136 3.14654 47.5677 3.03375 45.0234 3ZM38.9487 33.9214V23.061H31.8589V42.0747C31.505 42.0086 31.1613 41.9065 30.8276 41.7686C28.8657 40.9245 27.2383 39.6516 25.9453 37.9497C24.4611 35.9372 23.3976 33.7134 22.7549 31.2788C22.0543 28.5856 21.6945 25.8463 21.6753 23.061H14.1343C14.1701 26.264 14.5622 29.4222 15.3105 32.5356C15.9124 34.9317 16.7933 37.2198 17.9531 39.3999C20.7082 44.4208 24.8278 47.7775 30.312 49.4707C33.1336 50.2673 36.0126 50.6167 38.9487 50.5181V40.7212C40.8814 40.9197 42.6754 41.5265 44.3306 42.542C47.2677 44.4878 49.2657 47.1465 50.3247 50.5181C52.9299 50.5287 55.5293 50.5181 58.1235 50.4858C57.9199 49.6976 57.6675 48.9241 57.3662 48.1655C55.257 43.0818 51.7604 39.2736 46.8765 36.7412C49.3695 35.1935 51.4697 33.2223 53.1768 30.8276C54.8593 28.4927 55.9605 25.9038 56.48 23.061C54.1165 23.0503 51.7533 23.061 49.3901 23.0933C48.7985 25.1039 47.8906 26.9516 46.667 28.6362C45.4672 30.3195 43.9903 31.6999 42.2358 32.7773C41.2478 33.3682 40.1843 33.7389 39.0454 33.8892C39.0225 33.9183 38.9903 33.929 38.9487 33.9214Z"
				fill={fillPrimary}
				fillRule="evenodd"
			/>
		</svg>
	);
}

export function IconMenu({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 72 72" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.95932 27.9363H63.0406C65.7015 27.9363 68 25.6668 68 22.9539C68 20.241 65.7015 18 63.0406 18H8.95932C6.34694 18 4 20.241 4 22.9539C4 25.6668 6.34694 27.9363 8.95932 27.9363ZM8.95932 57H63.0406C65.7015 57 68 54.7669 68 52.054C68 49.3411 65.7015 47.0636 63.0406 47.0636H8.95932C6.34694 47.0636 4 49.3411 4 52.054C4 54.7669 6.34694 57 8.95932 57Z"
				fill={fillPrimary}
			/>
		</svg>
	);
}

export function IconHome({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 24 23" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.97674 19.3193H14.5154V12.3669C14.5154 11.9172 14.2249 11.6249 13.7752 11.6249H9.72834C9.27073 11.6249 8.97674 11.9172 8.97674 12.3669V19.3193ZM5.20945 20.5724H18.2353C19.6906 20.5724 20.5484 19.7321 20.5484 18.3134V7.64707L18.6625 6.3543V17.7368C18.6625 18.3469 18.3308 18.6865 17.7383 18.6865H5.70654C5.10606 18.6865 4.77434 18.3469 4.77434 17.7368V6.36219L2.88841 7.64707V18.3134C2.88841 19.7321 3.74456 20.5724 5.20945 20.5724ZM0 9.70436C0 10.2012 0.373876 10.6252 0.983784 10.6252C1.28277 10.6252 1.54921 10.4704 1.78428 10.2773L11.3455 2.25548C11.6041 2.02657 11.9073 2.02657 12.1676 2.25548L21.7237 10.2773C21.9525 10.4704 22.219 10.6252 22.518 10.6252C23.0709 10.6252 23.4938 10.2819 23.4938 9.72801C23.4938 9.40289 23.3682 9.15145 23.1244 8.94355L13.1054 0.522406C12.2822 -0.174135 11.2389 -0.174135 10.4077 0.522406L0.377341 8.94527C0.125716 9.15318 0 9.43616 0 9.70436ZM17.8291 5.04245L20.5484 7.33095V2.68444C20.5484 2.25049 20.272 1.97403 19.8381 1.97403H18.5412C18.1152 1.97403 17.8291 2.25049 17.8291 2.68444V5.04245Z"
				fill={fillPrimary}
			/>
		</svg>
	);
}

export function IconMegaphone({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 23 23" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0.822266 11.0762C0.822266 13.6752 2.28042 15.1054 4.99769 15.1054H8.31023C11.6668 15.5009 15.1525 16.6191 18.2669 18.5185V16.5157C15.2572 14.6939 11.8591 13.6816 8.26286 13.301H4.99769C3.29155 13.301 2.62676 12.6712 2.62676 11.0762V9.68541C2.62676 8.08245 3.29155 7.4606 4.99769 7.4606H8.17103C11.8278 7.09134 15.308 6.04402 18.2669 4.23797V2.23787C15.3435 4.10515 11.4356 5.32188 8.37145 5.65437H4.99769C2.28042 5.65437 0.822266 7.07403 0.822266 9.68541V11.0762ZM10.0361 14.7759H8.31485L9.13734 18.9303C9.20215 19.3011 9.01197 19.5421 8.75072 19.6324C8.47021 19.7324 8.10557 19.6421 7.91709 19.2476L5.73119 14.5912H3.88222L6.1665 19.6567C6.99049 21.4962 8.44922 21.6229 9.45745 21.2891C10.4476 20.9595 11.0564 20.0264 10.8009 18.7149L10.0361 14.7759ZM6.87729 6.40848V14.3531H8.69141V6.40848H6.87729ZM17.6142 17.3203C17.6142 18.8212 18.6739 19.8729 20.1652 19.8729C21.6757 19.8729 22.7239 18.8212 22.7239 17.3203V3.37047C22.7239 1.8713 21.6723 0.821289 20.1652 0.821289C18.6739 0.821289 17.6142 1.86957 17.6142 3.37047V17.3203ZM19.4284 17.3203V3.37047C19.4284 2.92362 19.7166 2.62579 20.1652 2.62579C20.6138 2.62579 20.9178 2.92362 20.9178 3.37047V17.3203C20.9178 17.7688 20.6138 18.065 20.1652 18.065C19.7166 18.065 19.4284 17.7688 19.4284 17.3203Z"
				fill={fillPrimary}
			/>
		</svg>
	);
}

export function IconPhotoStack({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 23 23" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.07717 22.1429H18.5707C20.3527 22.1429 21.271 21.2362 21.271 19.4334V18.8506L16.4936 14.3521C16.1031 13.9889 15.6251 13.8128 15.135 13.8128C14.6473 13.8128 14.2035 13.973 13.7876 14.3442L9.72332 17.9298L8.09861 16.4758C7.71954 16.1335 7.31428 15.961 6.88707 15.961C6.48181 15.961 6.10023 16.1431 5.72462 16.4662L2.36722 19.3987C2.36722 21.2379 3.28305 22.1429 5.07717 22.1429ZM9.03485 14.571C10.2287 14.571 11.2063 13.5776 11.2063 12.39C11.2063 11.2023 10.2287 10.2264 9.03485 10.2264C7.83755 10.2264 6.86955 11.2023 6.86955 12.39C6.86955 13.5776 7.83755 14.571 9.03485 14.571ZM4.80032 22.6273H18.8265C20.8981 22.6273 21.986 21.5551 21.986 19.5012V9.60129C21.986 7.5455 20.8981 6.47508 18.8265 6.47508H4.80032C2.71473 6.47508 1.64258 7.5455 1.64258 9.60129V19.5012C1.64258 21.5551 2.71473 22.6273 4.80032 22.6273ZM4.90967 20.7413C4.01463 20.7413 3.52851 20.2718 3.52851 19.3348V9.76583C3.52851 8.83058 4.01463 8.36102 4.90967 8.36102H18.7093C19.5965 8.36102 20.0984 8.83058 20.0984 9.76583V19.3348C20.0984 20.2718 19.5965 20.7413 18.7093 20.7413H4.90967ZM3.76032 4.90795H19.8762C19.7387 3.99559 19.2832 3.4779 18.2617 3.4779H5.3748C4.35328 3.4779 3.89778 3.99559 3.76032 4.90795ZM5.72077 2.13236H17.9157C17.851 1.27603 17.3457 0.821289 16.4175 0.821289H7.20936C6.2891 0.821289 5.78546 1.27603 5.72077 2.13236Z"
				fill={fillPrimary}
			/>
		</svg>
	);
}

export function IconInfo({ size }: IconProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 23 23" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				clipRule="evenodd"
				d="M11.4993 3.83317C9.46602 3.83317 7.51598 4.64091 6.0782 6.07869C4.64042 7.51646 3.83268 9.46651 3.83268 11.4998C3.83268 12.5066 4.03099 13.5036 4.41627 14.4337C4.80156 15.3639 5.36628 16.2091 6.0782 16.921C6.79011 17.6329 7.63528 18.1976 8.56544 18.5829C9.49561 18.9682 10.4925 19.1665 11.4993 19.1665C12.5062 19.1665 13.5031 18.9682 14.4333 18.5829C15.3634 18.1976 16.2086 17.6329 16.9205 16.921C17.6324 16.2091 18.1971 15.3639 18.5824 14.4337C18.9677 13.5036 19.166 12.5066 19.166 11.4998C19.166 9.46651 18.3583 7.51646 16.9205 6.07869C15.4827 4.64091 13.5327 3.83317 11.4993 3.83317ZM4.72291 4.7234C6.52013 2.92617 8.95769 1.9165 11.4993 1.9165C14.041 1.9165 16.4786 2.92617 18.2758 4.7234C20.073 6.52062 21.0827 8.95818 21.0827 11.4998C21.0827 12.7583 20.8348 14.0045 20.3532 15.1672C19.8716 16.3299 19.1657 17.3864 18.2758 18.2763C17.3859 19.1662 16.3294 19.8721 15.1667 20.3537C14.004 20.8353 12.7579 21.0832 11.4993 21.0832C10.2408 21.0832 8.99467 20.8353 7.83197 20.3537C6.66926 19.8721 5.6128 19.1662 4.72291 18.2763C3.83301 17.3864 3.12711 16.3299 2.6455 15.1672C2.1639 14.0045 1.91602 12.7583 1.91602 11.4998C1.91602 8.95818 2.92569 6.52062 4.72291 4.7234ZM10.541 7.6665C10.541 7.13723 10.9701 6.70817 11.4993 6.70817H11.5089C12.0382 6.70817 12.4673 7.13723 12.4673 7.6665C12.4673 8.19578 12.0382 8.62484 11.5089 8.62484H11.4993C10.9701 8.62484 10.541 8.19578 10.541 7.6665ZM9.58268 11.4998C9.58268 10.9706 10.0117 10.5415 10.541 10.5415H11.4993C12.0286 10.5415 12.4577 10.9706 12.4577 11.4998V14.3748C12.987 14.3748 13.416 14.8039 13.416 15.3332C13.416 15.8624 12.987 16.2915 12.4577 16.2915H11.4993C10.9701 16.2915 10.541 15.8624 10.541 15.3332V12.4582C10.0117 12.4582 9.58268 12.0291 9.58268 11.4998Z"
				fill={fillPrimary}
				fillRule="evenodd"
			/>
		</svg>
	);
}
