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
      name: "myDetails",
      title: "My Details",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "study",
      title: "Study",
      type: "string",
    },
    {
      name: "degree",
      title: "Degree",
      type: "string",
    },
    {
      name: "mail",
      title: "Mail",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(select: any) {
      const { title } = select;
      if (!title) {
        return {
          title: "Contact",
        };
      }
      return {
        title: title,
      };
    },
  },
};
