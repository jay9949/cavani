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
                  name: "richText",
                  type: "array",
                  title: "Rich Text",
                  of: [
                    {
                      type: "block",
                      styles: [
                        { title: "Normal", value: "normal" },
                        { title: "Heading 1", value: "h1" },
                        { title: "Heading 2", value: "h2" },
                        { title: "Heading 3", value: "h3" },
                        { title: "Heading 4", value: "h4" },
                        { title: "Paragraph", value: "p" },
                      ],
                      marks: {
                        decorators: [
                          { title: "Strong", value: "strong" },
                          { title: "Emphasis", value: "em" },
                        ],
                      },
                    },
                    {
                      type: "image",
                      fields: [
                        {
                          name: "caption",
                          type: "string",
                          title: "Caption",
                          options: {
                            isHighlighted: true,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
