import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "doc",
	fields: [
		{
			type: "object",
			name: "seo",
			title: "Page info",
			fields: [
				{ type: "string", name: "title" },
				{ type: "string", name: "description" },
				{
					type: "slug",
					name: "slug",
					options: { source: "seo.title", maxLength: 150 },
					validation: (r) => r.required(),
				},
			],
		},
		{
			type: "array",
			name: "content",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
					],
					lists: [],
					of: [{ type: "table" }],
				},
			],
		},
		{
			type: "array",
			name: "children",
			of: [{ type: "doc" }],
		},
	],
	preview: {
		select: {
			title: "seo.title",
			slug: "seo.slug",
		},
		prepare(selection) {
			const { title, slug } = selection;
			return {
				title,
				subtitle: slug?.current,
			};
		},
	},
});
