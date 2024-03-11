import merge from 'lodash.merge'
import {
  ArrayDefinition,
  ArrayOfType,
  defineArrayMember,
  defineField,
  FieldDefinitionBase,
} from 'sanity'
const defaultRichTextDefination = {
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      marks: {
        annotations: [
          defineField({
            type: 'object',
            name: 'link',
            fields: [
              {
                type: 'string',
                name: 'href',
                title: 'URL',
                validation: (rule) => rule.required(),
              },
            ],
          }),
        ],
      },
    }),
  ],
}
export const defineRichTextType = (
  defination?: Omit<ArrayDefinition & FieldDefinitionBase, 'type' | 'of'> & {
    of?: ArrayOfType[]
  },
) => {
  return defineField(merge(defination, defaultRichTextDefination))
}
