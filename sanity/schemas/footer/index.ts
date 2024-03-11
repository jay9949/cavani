export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "copywritetext",
      title: "CopywriteText",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          name: "footerItem",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
