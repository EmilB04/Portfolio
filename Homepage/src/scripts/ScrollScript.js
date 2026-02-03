/*
Purpose:
This script is responsible for the scrolling functionality of the website.
It contains methods to scroll to a specific section of the website and to scroll to the next section.
*/

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
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        const offsetPosition = section.offsetTop - this.scrollOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToNextSection() {
      if (this.isAtBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const currentScrollPos = window.scrollY;
        const viewportHeight = window.innerHeight;

        for (let i = 0; i < this.sections.length; i++) {
          const section = document.querySelector(this.sections[i]);
          if (section.offsetTop > currentScrollPos + viewportHeight / 2) {
            const offsetPosition = section.offsetTop - this.scrollOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            this.ChangeButtonLabel();
            return;
          }
        }
        const firstSection = document.querySelector('.about-section');
        if (firstSection) {
          const offsetPosition = firstSection.offsetTop - this.scrollOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        this.ChangeButtonLabel();
      }
    },
    ChangeButtonLabel() {
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
