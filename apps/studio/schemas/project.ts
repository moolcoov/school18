import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export default defineType({
	title: "Проект",
	type: "document",
	name: "project",

	orderings: [orderRankOrdering],

	fields: [
		orderRankField({ type: "project" }),

		{ name: "title", type: "string", title: "Заголовок", validation: (rule) => rule.required() },
		{ name: "description", type: "string", title: "Описание" },
		{
			title: "Короткое имя",
			name: "slug",
			type: "slug",
			validation: (rule) => rule.required(),
			options: { source: "info.title" },
		},
		{
			title: "Руководитель",
			name: "manager",
			type: "reference",
			to: [{ type: "employee" }],
		},
		{
			name: "cluster",
			type: "reference",
			to: [{ type: "projectsCluster" }],
		},
		{
			title: "Карточка проекта",
			name: "card",
			type: "object",
			description: "Используется для карточек на главной странице",
			fields: [
				{
					name: "cols",
					type: "number",
					title: "Столбцы",
					description: "Количество столбцов, которых карточка занимает в сеточной системе. Между 1 - 3",
					options: { list: [1, 2, 3] },
					validation: (rule) => rule.required(),
				},
				{
					name: "rows",
					type: "number",
					title: "Rows",
					description: "Number of columns the card occupies in the grid system. Between 1 - 2",
					options: { list: [1, 2] },
					validation: (rule) => rule.required(),
				},
				{
					name: "infoBlock",
					type: "string",
					title: "Position of info block",
					description: "Up or Down",
					options: { list: ["up", "down"] },
					validation: (rule) => rule.required(),
				},
				{
					name: "image",
					type: "image",
					title: "Card image",
				},
			],
			validation: (rule) => rule.required(),
		},
		{
			title: "О проекте",
			name: "about",
			type: "array",
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
				},
			],
		},
	],
	preview: {
		select: {
			title: "title",
			description: "description",
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
