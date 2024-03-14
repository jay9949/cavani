import { type SchemaTypeDefinition } from "sanity";
import header from "./schemas/header";
import herosection from "./schemas/herosection";
import footer from "./schemas/footer";
import about from "./schemas/about";
import contact from "./schemas/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, herosection, footer, about],
};
