import type { TypedObject } from "sanity";

export interface SanityDefImage {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
}

export interface SanityDefColor {
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

export interface SanityProject {
	_id: string;
	title: string;
	description?: string;
	slug: {
		current: string;
	};
	manager?: SanityEmployee;
	cluster?: SanityProjectsCluster;
	card: {
		image?: SanityDefImage;
		infoBlock: "up" | "down";
		cols: 1 | 2 | 3;
		rows: 1 | 2;
	};
	about?: TypedObject[];
}

export interface SanityProjectsCluster {
	_id: string;
	title: string;
	logo: SanityDefImage;
}

export interface SanityDoc {
	seo: {
		title: string;
		description?: string;
		slug: { current: string };
	};
	content?: TypedObject[];
	children?: SanityDoc[];
}

export interface SanityEmployee {
	_id: string;
	firstName: string;
	lastName: string;
	fatherName?: string;
	slug: {
		current: string;
	};
	contacts?: {
		email?: string;
		phone?: string;
	};
	position?: {
		post?: string;
		group?: string;
	};
	image?: SanityDefImage;
}
