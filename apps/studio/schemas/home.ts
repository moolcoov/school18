import { defineField, defineType } from "sanity";

export default defineType({ type: "file", name: "home", fields: [defineField({ type: "string", name: "test" })] });
