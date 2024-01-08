import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "project",
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: "project" }),

		defineField({ type: "string", name: "title", title: "Title", validation: (rule) => rule.required() }),
	],
});
