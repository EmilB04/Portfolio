export const course = {
  name: 'course',
  title: 'Kurs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Tittel på kurset'
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      description: 'Kort beskrivelse av kurset'
    },
    {
      name: 'semester',
      title: 'Semester',
      type: 'reference',
      to: [{ type: 'courseSemester' }],
      description: 'Semesteret kurset tilhører'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Lenke til kursets nettside eller ressurser'
    },
    {
      name : 'code',
      title: 'Kurskode',
      type: 'string',
      description: 'Koden som identifiserer kurset, f.eks. ITF10219'
    }
  ]
}

export default course;
