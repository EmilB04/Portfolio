declare module 'src/scripts/CourseList.js' {
  export interface Course {
    name: string;
    link: string;
    code: string;
    description: string;
  }

  export interface CourseSemester {
    semester: string;
    courses: Course[];
  }

  const courseListFallback: CourseSemester[];
  export default courseListFallback;
}

declare module 'src/scripts/ProjectsList.js' {
  export interface Project {
    id: number;
    title: string;
    languages?: string[];
    description: string;
    details: string;
    localPath: string;
    url: string;
    images?: string[];
    videos?: string[];
    tags?: string[];
  }

  const projectsListFallback: Project[];
  export default projectsListFallback;
}
