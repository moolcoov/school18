import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { colorInput } from "@sanity/color-input";
import { structure } from "./deskStructure";
import { table } from "@sanity/table";

export default defineConfig({
	name: "default",
	title: "school18",

	projectId: "0fb73v5v",
	dataset: "production",

	plugins: [deskTool({ structure }), visionTool(), colorInput(), table()],

	schema: {
		types: schemaTypes,
	},
});
