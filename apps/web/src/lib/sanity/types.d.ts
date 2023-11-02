interface SanityDefImage {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
}

interface SanityDefColor {
	_type: "color";
	alpha: number;
	hex: string;
	hsv: {
		_type: "hsvaColor";
		a: number;
		s: number;
		v: number;
		h: number;
	};
	rgb: { _type: "rgbaColor"; r: number; g: number; a: number; b: number };
	hsl: {
		_type: "hslaColor";
		h: number;
		l: number;
		a: number;
		s: number;
	};
}

interface SanityProject {
	_id: string;
	title: string;
	description?: string;
	icon?: SanityDefImage;
	colors?: {
		accent?: SanityDefColor;
		background?: SanityDefColor;
		description?: SanityDefColor;
		icon?: SanityDefColor;
	};
}
