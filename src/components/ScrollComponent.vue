<template>
  <div class="scroll-component" @click="handleScroll">
    <i :class="iconClass"></i>
  </div>
</template>

<script>
import '../assets/scrollComponent.css';

export default {
  name: 'ScrollComponent',
  data() {
    return {
      isLastSection: false,
    };
  },
  mounted() {
    this.updateIcon();
    window.addEventListener('scroll', this.updateIconOnScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateIconOnScroll);
  },
  computed: {
    iconClass() {
      return this.isLastSection ? 'icon-circle-up' : 'icon-circle-down';
    }
  },
  methods: {
    scrollToNextSection() {
      const sections = document.querySelectorAll('.section');
      const currentScroll = window.scrollY || window.pageYOffset;
      const sectionHeights = Array.from(sections).map(section => section.offsetTop);
      
      let currentIndex = sectionHeights.findIndex((height, index) => {
        return currentScroll >= height && (index === sectionHeights.length - 1 || currentScroll < sectionHeights[index + 1]);
      });

      if (currentIndex === -1) {
        currentIndex = 0;
      }

      if (this.isLastSection) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        window.scrollTo({
          top: sectionHeights[nextIndex],
          behavior: 'smooth'
        });
      }
    },
    updateIcon() {
      const sections = document.querySelectorAll('.section');
      const currentScroll = window.scrollY || window.pageYOffset;
      const sectionHeights = Array.from(sections).map(section => section.offsetTop);
      const lastIndex = sectionHeights.length - 1;

      this.isLastSection = currentScroll >= sectionHeights[lastIndex];
    },
    updateIconOnScroll() {
      this.updateIcon();
    },
    handleScroll() {
      this.scrollToNextSection();
    }
  }
}
</script>

