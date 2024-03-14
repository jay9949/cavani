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
              name: "role",
              title: "Role",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: "role",
                maxLength: 200,
                slugify: (input: string) => input.toLowerCase().slice(0, 200),
              },
            },
          ],
        },
      ],
    },
  ],
};
