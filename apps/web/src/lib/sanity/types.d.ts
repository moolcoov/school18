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
	slug: {
		current: string;
		_type: "slug";
	};
	card: {
		title: string;
		image?: SanityDefImage;
		description?: string;
		infoBlock: "up" | "down";
		cols: 1 | 2 | 3;
		rows: 1 | 2;
	};
}

interface SanityDoc {
	seo: {
		title: string;
		description?: string;
		slug: { current: string };
	};
	content?: TypedObject[];
	children?: SanityDoc[];
}
