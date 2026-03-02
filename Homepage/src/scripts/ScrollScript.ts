/*
Purpose:
This script is responsible for the scrolling functionality of the website.
It contains methods to scroll to a specific section of the website and to scroll to the next section.
*/

interface ScrollScriptData {
  sections: string[];
  isAtBottom: boolean;
  showScrollToTop: boolean;
  scrollOffset: number;
}

interface ScrollScriptMethods {
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
  scrollToNextSection: () => void;
  ChangeButtonLabel: () => void;
}

type ScrollScriptContext = ScrollScriptData & ScrollScriptMethods;

export default {
  name: 'ScrollScript',
  data() {
    return {
      // ----------------- Variables -------------------
      sections: [
        '.about-section',
        '.timeline-section',
        '.projects-section',
        '.skills-section',
        '.gitHub-section',
      ],
      // ----------------- Methods ---------------------
      isAtBottom: false,
      showScrollToTop: false,
      scrollOffset: -5, // Adjusted to acommodate for AOS animation
    };
  },
  methods: {
    scrollToSection(this: ScrollScriptContext, sectionId: string) {
      const section = document.querySelector<HTMLElement>(sectionId);
      if (section) {
        const offsetPosition = section.offsetTop - this.scrollOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToNextSection(this: ScrollScriptContext) {
      if (this.isAtBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const currentScrollPos = window.scrollY;
        const viewportHeight = window.innerHeight;

        for (let i = 0; i < this.sections.length; i++) {
          const section = document.querySelector<HTMLElement>(this.sections[i]);
          if (section && section.offsetTop > currentScrollPos + viewportHeight / 2) {
            const offsetPosition = section.offsetTop - this.scrollOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            this.ChangeButtonLabel();
            return;
          }
        }
        const firstSection = document.querySelector<HTMLElement>('.about-section');
        if (firstSection) {
          const offsetPosition = firstSection.offsetTop - this.scrollOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        this.ChangeButtonLabel();
      }
    },
    ChangeButtonLabel(this: ScrollScriptContext) {
      const currentScrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = currentScrollPos + viewportHeight >= documentHeight;

      this.showScrollToTop = currentScrollPos > 1200;

      if (
        isAtBottom ||
        currentScrollPos + viewportHeight >= documentHeight * 0.9
      ) {
        this.isAtBottom = true;
      } else {
        this.isAtBottom = false;
      }
    },
  },
};
