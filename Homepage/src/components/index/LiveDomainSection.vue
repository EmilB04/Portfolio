<template>
  <section class="live-domain-section">
    <!-- Blurred background screenshot -->
    <div class="bg-preview" />

    <!-- Dark overlay -->
    <div class="bg-overlay" />

    <!-- Floating decorative shapes mimicking the logo -->
    <div class="deco deco--circle1" />
    <div class="deco deco--circle2" />
    <div class="deco deco--plus1"><i class="fas fa-plus" /></div>
    <div class="deco deco--plus2"><i class="fas fa-plus" /></div>
    <div class="deco deco--times"><i class="fas fa-times" /></div>

    <div class="content-wrapper q-mx-auto">
      <!-- Left: info -->
      <div class="info-side">
        <img src="/images/projects/SpillArena/logo.png" alt="SpillArena logo" class="site-logo" />

        <div class="heading-row">
          <h2 class="site-name">SpillArena</h2>
          <span class="status-badge">
            <span class="status-badge__dot" />
            Live
          </span>
        </div>

        <p class="site-url text-white">spillarena.no</p>

        <p class="site-desc text-white">
          Arenaen hvor spillene dine samles. En samling av nettbaserte spill du
          kan spille direkte i nettleseren — ingen nedlasting nødvendig.
        </p>

        <div class="tags">
          <span class="tag"><i class="fas fa-gamepad q-mr-xs" />Nettspill</span>
          <span class="tag"><i class="fas fa-robot q-mr-xs" />Bot-motstander</span>
          <span class="tag"><i class="fas fa-globe q-mr-xs" />Norsk/Engelsk</span>
        </div>

        <a href="https://spillarena.no" target="_blank" rel="noopener noreferrer" class="visit-btn">
          Besøk siden
          <i class="fas fa-arrow-right q-ml-sm" />
        </a>
      </div>

      <!-- Right: browser mockup with screenshot -->
      <div class="preview-side">
        <div class="browser-mockup">
          <div class="browser-bar">
            <div class="browser-dots">
              <span class="dot dot--red" />
              <span class="dot dot--yellow" />
              <span class="dot dot--green" />
            </div>
            <div class="browser-url">
              <i class="fas fa-lock q-mr-xs lock-icon" />
              spillarena.no
            </div>
          </div>
          <div class="browser-content">
            <img src="/images/projects/SpillArena/spillarena-preview.jpeg" alt="SpillArena nettside forhåndsvisning"
              class="preview-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LiveDomainSection',
};
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';

// ── Section shell ────────────────────────────────────────────────────────────
.live-domain-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

// ── Blurred background ───────────────────────────────────────────────────────
.bg-preview {
  position: absolute;
  inset: 0;
  background: url('/images/projects/SpillArena/spillarena-preview.jpeg') center / cover no-repeat;
  filter: blur(18px) saturate(1.4);
  transform: scale(1.08); // hide blur edges
  z-index: 0;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
      rgba(10, 5, 25, 0.92) 0%,
      rgba(40, 10, 60, 0.85) 50%,
      rgba(10, 5, 25, 0.92) 100%);
  z-index: 1;
}

// ── Floating decorative shapes ───────────────────────────────────────────────
.deco {
  position: absolute;
  z-index: 2;
  opacity: 0.15;
  color: #cc44ff;
  pointer-events: none;
}

.deco--circle1 {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, #aa00ff, #ff2d78);
  top: -60px;
  right: 8%;
  animation: float 8s ease-in-out infinite alternate;
}

.deco--circle2 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, #ff2d78, #aa00ff);
  bottom: 10%;
  left: 5%;
  animation: float 11s ease-in-out infinite alternate-reverse;
}

.deco--plus1 {
  font-size: 3rem;
  top: 12%;
  left: 3%;
  animation: float 9s ease-in-out infinite alternate;
}

.deco--plus2 {
  font-size: 2rem;
  bottom: 15%;
  right: 4%;
  animation: float 13s ease-in-out infinite alternate-reverse;
}

.deco--times {
  font-size: 2.5rem;
  top: 55%;
  left: 1.5%;
  animation: float 10s ease-in-out infinite alternate;
}

@keyframes float {
  from {
    transform: translateY(0px) rotate(0deg);
  }

  to {
    transform: translateY(-20px) rotate(15deg);
  }
}

// ── Content layout ───────────────────────────────────────────────────────────
.content-wrapper {
  position: relative;
  z-index: 3;
  max-width: 1280px;
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.5rem;
    padding: 4rem 1.25rem;
  }
}

// ── Left side ────────────────────────────────────────────────────────────────
.info-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  color: #fff;
}

.site-logo {
  width: 72px;
  height: 72px;
  object-fit: contain;
  border-radius: 1rem;
  box-shadow: 0 0 24px rgba(170, 0, 255, 0.4);
}

.heading-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.site-name {
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #cc44ff, #ff2d78);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.site-url {
  font-size: 0.85rem;
  opacity: 0.45;
  margin: 0;
  letter-spacing: 0.05em;
}

.site-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.82;
  margin: 0;
  max-width: 480px;
}

// ── Tags ─────────────────────────────────────────────────────────────────────
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(204, 68, 255, 0.15);
  border: 1px solid rgba(204, 68, 255, 0.35);
  color: #e0aaff;
}

// ── Visit button ─────────────────────────────────────────────────────────────
.visit-btn {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(90deg, #aa00ff, #ff2d78);
  box-shadow: 0 4px 20px rgba(170, 0, 255, 0.45);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(170, 0, 255, 0.65);
  }
}

// ── Status badge ─────────────────────────────────────────────────────────────
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #4caf50;
  background: rgba(76, 175, 80, 0.12);
  border: 1px solid rgba(76, 175, 80, 0.35);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
}

.status-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4caf50;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.4;
    transform: scale(0.7);
  }
}

// ── Right side: browser mockup ───────────────────────────────────────────────
.preview-side {
  flex: 1.1;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
}

.browser-mockup {
  width: 100%;
  max-width: 640px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.6),
    0 0 60px rgba(170, 0, 255, 0.2);
  animation: float-mockup 6s ease-in-out infinite alternate;
}

@keyframes float-mockup {
  from {
    transform: translateY(0px) rotate(-0.5deg);
  }

  to {
    transform: translateY(-12px) rotate(0.5deg);
  }
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background: #1e1e2e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.browser-dots {
  display: flex;
  gap: 0.35rem;
  flex-shrink: 0;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;

  &--red {
    background: #ff5f57;
  }

  &--yellow {
    background: #febc2e;
  }

  &--green {
    background: #28c840;
  }
}

.browser-url {
  flex: 1;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  text-align: center;
  letter-spacing: 0.03em;
}

.lock-icon {
  font-size: 0.65rem;
  opacity: 0.6;
}

.browser-content {
  line-height: 0;
  background: #0d0d1a;
}

.preview-img {
  width: 100%;
  display: block;
  object-fit: cover;
}
</style>
