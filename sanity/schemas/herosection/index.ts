export default {
  name: "herosection",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "span",
          title: "Span",
          type: "string",
        },
        {
          name: "buttonText",
          title: "ButtonText",
          type: "string",
        },
      ],
    },
  ],
};
