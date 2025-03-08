// ----------------- External CSS/JS ------------------------
import CourseList from 'src/scripts/CourseList.js';
import { WorkComments, randomIndex } from 'src/scripts/WorkComments.js';
import LinkedInIcon from 'src/assets/icons/linkdin_icon.png';
import GitHubIcon from 'src/assets/icons/github_icon.png';
import InstagramIcon from 'src/assets/icons/instagram_icon.png';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

export default {
  data() {
    return {
      // ----------------- Data ------------------------
      CourseList,
      WorkComments,
      // ----------------- Variables -------------------
      sections: [
        '.about-section',
        '.timeline-section',
        '.skills-section',
        '.gitHub-section',
        '.comments-section',
      ],
      semesters: ['semester-1', 'semester-2', 'semester-3', 'semester-4'],
      currentSemester: 0,
      // ----------------- Methods ---------------------
      currentIndex: randomIndex(),
      isAtBottom: false,
      // ----------------- Icons -----------------------
      LinkedInIcon,
      GitHubIcon,
      InstagramIcon,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToNextSection() {
      console.log('scrollToNextSection called');
      if (this.isAtBottom) {
        console.log('Scrolling to top');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const currentScrollPos = window.scrollY;
        const viewportHeight = window.innerHeight;
        console.log('Current scroll position:', currentScrollPos);
        console.log('Viewport height:', viewportHeight);

        for (let i = 0; i < this.sections.length; i++) {
          const section = document.querySelector(this.sections[i]);
          if (section) {
            console.log(
              'Checking section:',
              this.sections[i],
              'Offset top:',
              section.offsetTop
            );
            if (section.offsetTop > currentScrollPos + viewportHeight / 2) {
              console.log('Scrolling to section:', this.sections[i]);
              section.scrollIntoView({ behavior: 'smooth' });
              this.ChangeButtonLabel();
              return;
            }
          } else {
            console.warn('Section not found:', this.sections[i]);
          }
        }

        console.log('Scrolling to about section');
        document
          .querySelector('.about-section')
          .scrollIntoView({ behavior: 'smooth' });
        this.ChangeButtonLabel();
      }
    },
    ChangeButtonLabel() {
      const currentScrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = currentScrollPos + viewportHeight >= documentHeight;

      if (
        isAtBottom ||
        currentScrollPos + viewportHeight >= documentHeight * 0.9
      ) {
        this.isAtBottom = true;
      } else {
        this.isAtBottom = false;
      }
    },
    nextSemester() {
      if (this.currentSemester < this.semesters.length - 1) {
        this.currentSemester++;
      } else {
        this.currentSemester = 0; // Gå tilbake til første semester
      }
      this.scrollToSemester();
    },
    prevSemester() {
      if (this.currentSemester > 0) {
        this.currentSemester--;
      } else {
        this.currentSemester = this.semesters.length - 1; // Gå til siste semester
      }
      this.scrollToSemester();
    },
    scrollToSemester() {
      const container = document.querySelector('.timeline-container');
      const offset = -this.currentSemester * window.innerWidth;
      container.style.transform = `translateX(${offset}px)`;
    },
    startCommentRotation() {
      this.commentInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.WorkComments.length;
      }, 8000); // Bytter kommentar hvert 8. sekund
    },
  },
};
