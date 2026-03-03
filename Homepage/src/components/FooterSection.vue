<template>
  <p class="text-center footer-text">
    Laget med ❤️ av
    <a href="https://github.com/EmilB04" target="_blank" rel="noopener noreferrer" class="footer-link"><Strong>Emil
        Berglund</Strong></a>
  </p>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style scoped lang="scss">
.footer-text {
  margin: 3rem 0 1rem 0;
  padding: 1rem;
  width: 100%;
  color: var(--c-text);
  background: inherit;
}

.footer-link {
  color: var(--c-accent);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
    text-decoration: underline;
  }
}
</style>
