export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          name: "headerItem",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: "title",
                maxLength: 20,
                slugify: (input: any) =>
                  input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
              },
            },
          ],
        },
      ],
    },
  ],
};
