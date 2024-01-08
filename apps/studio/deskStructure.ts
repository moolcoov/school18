import { BlockElementIcon } from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { StructureBuilder, StructureResolverContext } from "sanity/desk";

export const structure = (S: StructureBuilder, context: StructureResolverContext) => {
	return S.list()
		.title("Content")
		.items([
			orderableDocumentListDeskItem({
				type: "project",
				title: "Projects",
				id: "projects",
				icon: BlockElementIcon,
				S,
				context,
			}),
			S.documentTypeListItem("doc"),
		]);
};
