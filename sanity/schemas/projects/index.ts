export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          type: "array",
          name: "projectItem",
          of: [
            {
              name: "projectItems",
              title: "ProjectItems",
              type: "object",
              fields: [
                {
                  name: "number",
                  title: "Number",
                  type: "string",
                },
                {
                  name: "date",
                  title: "Date",
                  type: "string",
                },
                {
                  name: "brand",
                  title: "Brand",
                  type: "string",
                },
                {
                  name: "comment",
                  title: "Comment",
                  type: "string",
                },
                {
                  name: "tag",
                  title: "Tag",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                },
                {
                  name: "span",
                  title: "Span",
                  type: "string",
                },
                {
                  name: "heading",
                  title: "Heading",
                  type: "string",
                },
                {
                  name: "par",
                  title: "Par",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
