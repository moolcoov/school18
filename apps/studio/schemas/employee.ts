import { defineType } from "sanity";

export default defineType({
	title: "Работник",
	type: "document",
	name: "employee",
	fields: [
		{
			title: "Фамилия",
			name: "lastName",
			type: "string",
			validation: (rule) => rule.required(),
		},
		{
			title: "Имя",
			name: "firstName",
			type: "string",
			validation: (rule) => rule.required(),
		},
		{
			title: "Отчество",
			name: "fatherName",
			type: "string",
		},
		{
			title: "Короткое имя (slug)",
			name: "slug",
			type: "slug",
			options: {
				source: (doc) => `${doc.lastName}-${doc.firstName}`,
			},
		},
		{
			title: "Позиция",
			name: "position",
			type: "object",
			fields: [
				{
					title: "Группа",
					name: "group",
					type: "string",
					options: { list: ["Педагог", "Администрация", "Другое"] },
				},
				{
					title: "Должность",
					name: "post",
					type: "string",
				},
			],
		},
		{
			title: "Контакты",
			name: "contacts",
			type: "object",
			fields: [
				{
					title: "Номер телефона",
					name: "phone",
					type: "string",
					validation: (rule) => rule.regex(/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/),
				},
				{
					title: "Почта",
					name: "email",
					type: "string",
					validation: (rule) =>
						rule.regex(
							/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
						),
				},
			],
		},
		{
			title: "Изображение",
			name: "image",
			type: "image",
		},
	],
	preview: {
		select: {
			lastName: "lastName",
			firstName: "firstName",
			fatherName: "fatherName",

			group: "position.group",
			post: "position.post",

			image: "image",
		},
		prepare(selection) {
			return {
				title: [selection?.lastName, selection?.firstName, selection?.fatherName].join(" "),
				subtitle: [selection?.group, selection?.post].join(" / "),
				media: selection.image,
			};
		},
	},
});
