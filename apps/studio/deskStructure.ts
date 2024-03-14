import { BlockElementIcon } from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { StructureBuilder, StructureResolverContext } from "sanity/desk";

export const structure = (S: StructureBuilder, context: StructureResolverContext) => {
	return S.list()
		.title("Контент")
		.items([
			orderableDocumentListDeskItem({
				type: "project",
				title: "Проекты",
				id: "projects",
				icon: BlockElementIcon,
				S,
				context,
			}),
			S.listItem({
				title: "Кластеры проектов",
				id: "projectsClusters",
				schemaType: "projectsCluster",
				child: () => S.documentTypeList("projectsCluster"),
			}),
			S.documentTypeListItem("doc"),
			S.listItem({
				title: "Состав школы",
				id: "employers",
				schemaType: "employee",
				child: () => S.documentTypeList("employee"),
			}),
		]);
};
