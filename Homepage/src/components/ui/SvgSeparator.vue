<template>
  <div class="svg-separator-wrapper">
    <svg class="editorial" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0
          58-18 88-18s
          58 18 88 18
          58-18 88-18
          58 18 88 18
          v44h-352z" />
      </defs>
      <g class="parallax1">
        <use xlink:href="#gentle-wave" x="50" y="3" fill="#26a69a" />
      </g>
      <g class="parallax2">
        <use xlink:href="#gentle-wave" x="50" y="0" fill="#f1376e" />
      </g>
      <g class="parallax3">
        <use xlink:href="#gentle-wave" x="50" y="9" fill="#f1376e" />
      </g>
      <g class="parallax4">
        <use xlink:href="#gentle-wave" x="50" y="6" />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';

.svg-separator-wrapper {
  position: relative;
  width: 100%;
  height: 60px; // Make sure this matches the SVG height
  overflow: hidden;
  margin: 0;
  z-index: 5;
}

.editorial {
  display: block;
  width: 100%;
  height: 60px; // Match the wrapper
  margin: 0;
  position: static; // Remove absolute positioning
  left: 0;
  bottom: 0;
}

.parallax1>use {
  animation: move-forever1 10s linear infinite;
}

.parallax2>use {
  animation: move-forever2 8s linear infinite;
}

.parallax3>use {
  animation: move-forever3 6s linear infinite;
}

.parallax4>use {
  animation: move-forever4 4s linear infinite;
  fill: var(--c-bg-opacity);
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever4 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}
</style>
