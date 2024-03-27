import { type SchemaTypeDefinition } from "sanity";
import header from "./schemas/header";
import herosection from "./schemas/herosection";
import footer from "./schemas/footer";
import about from "./schemas/about";
import projects from "./schemas/projects";
import service from "./schemas/service";
import contact from "./schemas/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, herosection, footer, about, projects, service, contact],
};
