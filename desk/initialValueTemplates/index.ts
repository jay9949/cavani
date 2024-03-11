import { Template } from "sanity";
import { OLD_PAGE_ID_LIST } from "../helper/defaults";
export const getPageId = (new_id: string) => OLD_PAGE_ID_LIST[new_id] ?? new_id;
export const InitialValueTemplates = {
  HEADER: getPageId("header"),
};

export const templateBuilders: Template[] = [
  {
    id: "",
    title: "",
    schemaType: "",
    value: {
      type: "",
    },
  },
];

export default [...templateBuilders.map((template) => template)];
