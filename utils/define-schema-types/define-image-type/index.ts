import merge from 'lodash.merge'
import { defineField, FieldDefinitionBase, ImageDefinition } from 'sanity'
const defaultImageDefination = {
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Image caption',
      description: 'Caption displayed below the image.',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
    }),
    defineField({
      name: 'priority',
      type: 'boolean',
      title: 'Should Load In Priority',
      description: 'Load image on highest priority. (Helpful for increasing FCP score).',
    }),
  ],
}
export const defineImageType = (
  defination?: Omit<ImageDefinition & FieldDefinitionBase, 'type'>,
) => {
  return defineField(merge(defination, defaultImageDefination))
}
