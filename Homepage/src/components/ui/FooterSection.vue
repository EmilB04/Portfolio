<template>
  <footer class="footer-shell" aria-label="Site footer">
    <div class="footer-content text-center">
      <p class="footer-eyebrow">Tilgjengelig for samarbeid og nye prosjekter</p>

      <a href="https://github.com/EmilB04" target="_blank" rel="noopener noreferrer" class="footer-link"
        aria-label="Besøk GitHub-profilen til Emil Berglund">
        <q-icon name="fab fa-github" size="1.15rem" />
        <span>Se kildekode på GitHub</span>
      </a>

      <p class="footer-text">
        Laget med ❤️ av <strong>Emil Berglund</strong>
        <span class="footer-separator" aria-hidden="true">•</span>
        <span>Sist oppdatert: April 2026</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style scoped lang="scss">
.footer-shell {
  width: 100%;
  max-width: $max-width;
  margin: 3rem 0 1rem;
  padding: 0 1rem;
  margin-inline: auto;
  box-sizing: border-box;
}

.footer-content {
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  border-radius: 1.5rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.footer-eyebrow {
  margin: 0 0 0.9rem;
  color: var(--c-text-muted);
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.9rem;
  padding: 0.8rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--c-text);
  text-decoration: none;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: var(--c-border-hover);
    background: rgba(255, 255, 255, 0.08);
    color: var(--c-accent);
    text-decoration: none;
  }

  .q-icon {
    color: var(--c-accent);
  }
}

.footer-text {
  margin: 0;
  color: var(--c-text-muted);
  font-size: 0.98rem;
}

.footer-separator {
  margin: 0 0.55rem;
  color: var(--c-text-subtle);
}

@media (max-width: 600px) {
  .footer-shell {
    margin-top: 2rem;
    padding-inline: 0.75rem;
  }

  .footer-content {
    padding: 1rem 1rem 1.1rem;
    border-radius: 1rem;
  }

  .footer-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
