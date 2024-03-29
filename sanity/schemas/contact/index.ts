export default {
  name: "contact",
  title: "Contact",
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
          name: "contactItem",
          of: [
            {
              name: "contactItems",
              title: "ContactItems",
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                },
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "button",
      title: "Button",
      type: "string",
    },
  ],
};
