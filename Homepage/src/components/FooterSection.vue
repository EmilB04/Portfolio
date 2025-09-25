<template>
  <p
    class="text-center"
    :class="isShortPage ? 'fixed-bottom' : 'regular-bottom'"
  >
    Made with ❤️ by Emil Berglund
  </p>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      isShortPage: false,
    };
  },
  mounted() {
    this.checkHeight();
    window.addEventListener('resize', this.checkHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkHeight);
  },
  methods: {
    checkHeight() {
      this.isShortPage = document.body.scrollHeight <= window.innerHeight;
    },
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0 0 1rem 0;
}
.fixed-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: inherit;
  z-index: 100;
}

.regular-bottom{
  margin-top: 5rem;
  position: relative;
  width: 100vw;
  background: inherit;
  z-index: 100;
}
</style>
