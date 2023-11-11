import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "project",
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: "project" }),

		defineField({ type: "string", name: "title", title: "Title", validation: (rule) => rule.required() }),
		defineField({ type: "string", name: "description", title: "Description" }),
		defineField({ type: "image", name: "icon", title: "Icon" }),
		defineField({
			type: "object",
			name: "colors",
			title: "Colors",
			fields: [
				defineField({ type: "color", name: "accent", title: "Accent color" }),
				defineField({ type: "color", name: "background", title: "Background color" }),
				defineField({ type: "color", name: "description", title: "Description color" }),
				defineField({ type: "color", name: "icon", title: "Icon div color" }),
			],
		}),
	],
});
