import { defineType, defineField, defineArrayMember } from "sanity";

export const product = defineType({
  type: "document",
  name: "product",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      type: "image",
      name: "Main_Image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "reference",
      name: "productCategory",
      to: [{ type: "productCategory" }],
    }),
    defineField({
      type: "array",
      name: "content",
      of: [{ type: "block" }],
    }),
  ],
});
