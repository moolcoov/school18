import { defineType } from "sanity";

export default defineType({
	title: "Кластер проектов",
	type: "document",
	name: "projectsCluster",
	fields: [
		{
			title: "Название кластера",
			name: "title",
			type: "string",
		},
		{
			title: "Логотип",
			name: "logo",
			type: "image",
		},
	],
});
