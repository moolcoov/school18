import type { RefObject } from "react";
import { useState, useEffect } from "react";

interface Dimensions {
	width: number;
	height: number;
}

export function useContainerDimensions(myRef: RefObject<HTMLDivElement>): Dimensions {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const getDimensions = (): Dimensions => {
			return {
				width: myRef.current?.offsetWidth ?? 0,
				height: myRef.current?.offsetHeight ?? 0,
			};
		};

		const handleResize = (): void => {
			setDimensions(getDimensions());
		};

		if (myRef.current) {
			setDimensions(getDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [myRef]);

	return dimensions;
}
