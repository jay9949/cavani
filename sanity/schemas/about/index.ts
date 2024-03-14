export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "personal",
      title: "Personal",
      type: "string",
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "string",
    },
    {
      name: "services",
      title: "Services",
      type: "string",
    },
    {
      name: "interests",
      title: "Interests",
      type: "string",
    },
    {
      name: "programming",
      title: "Programming",
      type: "string",
    },
    {
      name: "languages",
      title: "Languages",
      type: "string",
    },
    {
      name: "education",
      title: "Education",
      type: "string",
    },
    {
      name: "experience",
      title: "Experience",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          type: "array",
          name: "aboutItem",
          of: [
            {
              name: "aboutitems",
              title: "aboutItems",
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                },
                {
                  name: "detail",
                  title: "Detail",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "content2",
      title: "Content2",
      type: "object",
      fields: [
        {
          type: "array",
          name: "aboutItem2",
          of: [
            {
              name: "aboutitems2",
              title: "aboutItems2",
              type: "object",
              fields: [
                {
                  name: "service",
                  title: "Service",
                  type: "string",
                },
                {
                  name: "interest",
                  title: "Interest",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "content3",
      title: "Content3",
      type: "object",
      fields: [
        {
          type: "array",
          name: "aboutItem3",
          of: [
            {
              name: "aboutitems3",
              title: "aboutItems3",
              type: "object",
              fields: [
                {
                  name: "program",
                  title: "Program",
                  type: "string",
                },
                {
                  name: "percentage",
                  title: "Percentage",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "content4",
      title: "Content4",
      type: "object",
      fields: [
        {
          type: "array",
          name: "aboutItem4",
          of: [
            {
              name: "aboutitems4",
              title: "aboutItems4",
              type: "object",
              fields: [
                {
                  name: "language",
                  title: "Language",
                  type: "string",
                },
                {
                  name: "marks",
                  title: "Marks",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "content5",
      title: "Content5",
      type: "object",
      fields: [
        {
          type: "array",
          name: "aboutItem5",
          of: [
            {
              name: "aboutitems5",
              title: "aboutItems5",
              type: "object",
              fields: [
                {
                  name: "year",
                  title: "Year",
                  type: "string",
                },
                {
                  name: "university",
                  title: "University",
                  type: "string",
                },
                {
                  name: "degree",
                  title: "Degree",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          type: "array",
          name: "aboutItem6",
          of: [
            {
              name: "aboutitems6",
              title: "aboutItems6",
              type: "object",
              fields: [
                {
                  name: "exp",
                  title: "Exp",
                  type: "string",
                },
                {
                  name: "company",
                  title: "Company",
                  type: "string",
                },
                {
                  name: "job",
                  title: "Job",
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
