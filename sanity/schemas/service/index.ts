export default {
  name: "service",
  title: "Service",
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
          name: "servicesItem",
          of: [
            {
              name: "serviceItems",
              title: "ServicetItems",
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                },
                {
                  name: "head",
                  title: "Head",
                  type: "string",
                },
                {
                  name: "desc",
                  title: "Desc",
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
