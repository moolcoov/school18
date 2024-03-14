interface SmallLogoProps {
	size?: number;
}

interface LongLogoProps {
	width?: number;
	height?: number;
}

export function SmallLogo({ size = 46 }: SmallLogoProps): JSX.Element {
	return (
		<svg fill="none" height={size} viewBox="0 0 562 562" width={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M33 163C33 103.353 81.3533 55 141 55C200.647 55 249 103.353 249 163V398C249 457.647 200.647 506 141 506C81.3533 506 33 457.647 33 398V163Z"
				fill="var(--color-primary)"
			/>
			<path
				d="M561.998 364.873C561.998 442.639 498.988 505.68 421.261 505.68C343.534 505.68 280.523 442.639 280.523 364.873C280.523 287.108 343.534 224.066 421.261 224.066C498.988 224.066 561.998 287.108 561.998 364.873Z"
				fill="var(--color-primary)"
			/>
			<path
				d="M516.246 150.033C516.246 202.518 473.719 245.066 421.26 245.066C368.8 245.066 326.273 202.518 326.273 150.033C326.273 97.5477 368.8 55 421.26 55C473.719 55 516.246 97.5477 516.246 150.033Z"
				fill="var(--color-primary)"
			/>
		</svg>
	);
}

export function LongLogo({ width = 145, height = 46 }: LongLogoProps): JSX.Element {
	return (
		<svg fill="none" height={height} viewBox="0 0 145 46" width={width} xmlns="http://www.w3.org/2000/svg">
			<rect fill="url(#pattern0)" height="46" width="46" />
			<path
				d="M58.3213 30.9842V19.0313H62.4652V21.3036H62.5889C62.8054 20.4632 63.1481 19.8484 63.6171 19.4593C64.0913 19.0702 64.6454 18.8757 65.2793 18.8757C65.4649 18.8757 65.6478 18.8912 65.8282 18.9224C66.0138 18.9483 66.1916 18.9872 66.3617 19.0391V22.7044C66.1504 22.6317 65.8901 22.5773 65.5808 22.5409C65.2716 22.5046 65.0062 22.4865 64.7845 22.4865C64.367 22.4865 63.9908 22.5824 63.6558 22.7744C63.3259 22.9612 63.0656 23.2257 62.8749 23.5681C62.6842 23.9054 62.5889 24.3022 62.5889 24.7588V30.9842H58.3213Z"
				fill="currentColor"
			/>
			<path
				d="M85.734 28.1517L85.7649 23.0468H86.3216L89.1976 19.0313H93.9909L89.1666 25.2879H87.9606L85.734 28.1517ZM81.8993 30.9842V15.047H86.1669V30.9842H81.8993ZM89.2285 30.9842L86.5071 26.2529L89.2903 23.2024L94.1146 30.9842H89.2285Z"
				fill="currentColor"
			/>
			<path
				d="M95.2259 30.9842V28.6186L100.421 22.362V22.2997H95.4115V19.0313H105.462V21.646L100.73 27.6536V27.7159H105.647V30.9842H95.2259Z"
				fill="currentColor"
			/>
			<path
				d="M107.286 30.9842V28.6186L112.482 22.362V22.2997H107.472V19.0313H117.522V21.646L112.791 27.6536V27.7159H117.708V30.9842H107.286Z"
				fill="currentColor"
			/>
			<path
				d="M122.887 30.9844C122.13 30.9844 121.46 30.8598 120.877 30.6108C120.3 30.3566 119.846 29.9727 119.516 29.4591C119.187 28.9455 119.022 28.2918 119.022 27.4981C119.022 26.8444 119.132 26.2867 119.354 25.825C119.576 25.3581 119.885 24.9768 120.282 24.681C120.679 24.3853 121.14 24.1597 121.666 24.004C122.197 23.8484 122.769 23.7472 123.382 23.7005C124.047 23.6487 124.58 23.5864 124.982 23.5138C125.39 23.436 125.683 23.3296 125.864 23.1947C126.044 23.0546 126.134 22.8705 126.134 22.6422V22.6111C126.134 22.2998 126.016 22.0612 125.779 21.8951C125.542 21.7291 125.237 21.6461 124.866 21.6461C124.459 21.6461 124.127 21.7369 123.869 21.9185C123.616 22.0949 123.464 22.3672 123.413 22.7356H119.485C119.537 22.0093 119.766 21.34 120.174 20.7279C120.586 20.1105 121.186 19.6177 121.975 19.2493C122.763 18.8758 123.748 18.689 124.928 18.689C125.779 18.689 126.541 18.7902 127.217 18.9925C127.892 19.1897 128.466 19.4672 128.941 19.8252C129.415 20.178 129.776 20.593 130.023 21.0703C130.276 21.5424 130.402 22.056 130.402 22.6111V30.7976H126.413V29.1167H126.32C126.083 29.5629 125.794 29.9234 125.454 30.1984C125.119 30.4733 124.735 30.6731 124.302 30.7976C123.874 30.9221 123.403 30.9844 122.887 30.9844ZM124.279 28.2763C124.604 28.2763 124.908 28.2088 125.191 28.0739C125.48 27.9391 125.714 27.7445 125.895 27.4903C126.075 27.2361 126.165 26.9274 126.165 26.5643V25.5682C126.052 25.6149 125.931 25.659 125.802 25.7005C125.678 25.742 125.544 25.7809 125.4 25.8172C125.261 25.8535 125.111 25.8872 124.951 25.9184C124.797 25.9495 124.634 25.978 124.464 26.004C124.134 26.0558 123.864 26.1414 123.653 26.2608C123.446 26.3749 123.292 26.5176 123.189 26.6888C123.091 26.8548 123.042 27.0415 123.042 27.2491C123.042 27.5811 123.158 27.8353 123.39 28.0117C123.622 28.1881 123.918 28.2763 124.279 28.2763Z"
				fill="currentColor"
			/>
			<path
				d="M136.289 27.965L136.32 22.8601H136.877L139.753 18.8447H144.546L139.722 25.1013H138.516L136.289 27.965ZM132.455 30.7976V14.8604H136.722V30.7976H132.455ZM139.784 30.7976L137.062 26.0662L139.846 23.0157L144.67 30.7976H139.784Z"
				fill="currentColor"
			/>
			<path
				d="M75.4612 25.7548V19.0313H79.7288V30.9842H75.6777V28.7119H75.554C75.2963 29.4746 74.8453 30.0712 74.2011 30.5018C73.5568 30.9272 72.7914 31.1399 71.9049 31.1399C71.0751 31.1399 70.3484 30.9479 69.7247 30.564C69.1062 30.1801 68.6243 29.651 68.279 28.9765C67.9388 28.3021 67.7662 27.5291 67.761 26.6575V19.0313H72.0286V25.7548C72.0338 26.3463 72.1832 26.8106 72.477 27.1478C72.776 27.485 73.1934 27.6536 73.7295 27.6536C74.0851 27.6536 74.3918 27.5784 74.6495 27.4279C74.9123 27.2723 75.1133 27.0544 75.2525 26.7743C75.3968 26.4889 75.4664 26.1491 75.4612 25.7548Z"
				fill="currentColor"
			/>
			<defs>
				<pattern height="1" id="pattern0" patternContentUnits="objectBoundingBox" width="1">
					<use href="#image0_1408_1452" transform="scale(0.0078125)" />
				</pattern>
				<image
					height="128"
					href="data:image/png;base64,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"
					id="image0_1408_1452"
					width="128"
				/>
			</defs>
		</svg>
	);
}
