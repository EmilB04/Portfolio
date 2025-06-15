export const courseList = {
  name: 'courseSemester',
  title: 'Semesterkurs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'Tittel på semesteret'
    },
    {
      name: 'courses',
      title: 'Kurs i semesteret',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'course' }] }]
    }
  ],
}

export default courseList
