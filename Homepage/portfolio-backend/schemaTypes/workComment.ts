/* eslint-disable @typescript-eslint/no-explicit-any */
export const workComment = {
  name: 'workComment',
  title: 'Arbeidskommentar',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Firma',
      type: 'string',
      description: 'Navn på firmaet',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'comment',
      title: 'Kommentar',
      type: 'text',
      description: 'Kommentar fra arbeidsgiveren',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Forfatter',
      type: 'string',
      description: 'Navn på personen som skrev kommentaren',
      validation: (Rule: any) => Rule.required()
    }
  ]
};

export default workComment;
