import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "project",
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: "project" }),

		defineField({
			type: "slug",
			name: "slug",
			title: "Slug",
			validation: (rule) => rule.required(),
			options: { source: "card.title" },
		}),

		defineField({
			type: "object",
			name: "card",
			title: "Project card",
			description: "Used for project cards on the main page",
			fields: [
				defineField({ name: "title", type: "string", title: "Card title", validation: (rule) => rule.required() }),
				defineField({ name: "description", type: "string", title: "Card description" }),
				defineField({
					name: "cols",
					type: "number",
					title: "Columns",
					description: "Number of columns the card occupies in the grid system. Between 1 - 3",
					options: { list: [1, 2, 3] },
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "rows",
					type: "number",
					title: "Rows",
					description: "Number of columns the card occupies in the grid system. Between 1 - 2",
					options: { list: [1, 2] },
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "infoBlock",
					type: "string",
					title: "Position of info block",
					description: "Up or Down",
					options: { list: ["up", "down"] },
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "image",
					type: "image",
					title: "Card image",
				}),
			],
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: "card.title",
			description: "card.description",
			image: "card.image",
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: selection.description,
				media: selection.image,
			};
		},
	},
});
