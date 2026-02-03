/* eslint-disable @typescript-eslint/no-explicit-any */
export const project = {
  name: 'project',
  title: 'Prosjekt',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Tittel på prosjektet',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'languages',
      title: 'Programmeringsspråk og teknologier',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste over språk og teknologier brukt i prosjektet'
    },
    {
      name: 'description',
      title: 'Kort beskrivelse',
      type: 'text',
      description: 'Kort beskrivelse av prosjektet',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'details',
      title: 'Detaljert beskrivelse',
      type: 'text',
      description: 'Detaljert beskrivelse av prosjektet'
    },
    {
      name: 'localPath',
      title: 'Lokal sti',
      type: 'string',
      description: 'Lokal URL-sti for prosjektet (f.eks. "pageprobe")'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Lenke til prosjektets GitHub eller nettside',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Bilder av prosjektet'
    },
    {
      name: 'videos',
      title: 'Videoer',
      type: 'array',
      of: [{ type: 'file' }],
      description: 'Videoer av prosjektet'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags for søk og kategorisering'
    }
  ]
};

export default project;
