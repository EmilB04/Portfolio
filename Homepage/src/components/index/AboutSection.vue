<template>
  <section class="full-screen about-section">
    <div class="content">
      <h2 class="q-mx-none text-center">Hvem er jeg?</h2>

      <h3>Som student</h3>
      <article>
        <p>
          Jeg studerer informatikk - Design og utvikling av IT-systemer på
          HiØ i Halden. Min akademiske reise startet høsten 2023, og jeg
          tar eksamen våren 2026. Jeg har spesialisert meg innen
          programmering og lærer meg Vue og Quasar på fritiden.
        </p>
        <p>
          Som student er jeg lærevillig og liker å utfordre meg selv. Jeg
          anser meg selv som lett å samarbeide med og god på
          kommunikasjon. Jeg er også veldig fokusert på å levere kvalitet
          og være stolt av det jeg leverer. Generelt er jeg veldig
          fokusert på struktur og presisjon i arbeidet mitt, noe jeg mener
          er essensielt i programmering og programvareutvikling.
        </p>
        <p>
          Ved siden av studiene jobber jeg ofte på Elkjøp som selger. Jeg
          har en generell interesse for teknologi og elektronikk og liker
          å holde meg oppdatert på de siste trendene.
        </p>
      </article>

      <h3>Som person</h3>
      <article>
        <p>
          Jeg er {{ new Date().getFullYear() - 2004 }} år gammel og bor i
          Halden, Norge. Jeg er en person med lidenskap for teknologi og
          et ønske om å lære og vokse. Jeg trives med å oppdage kreative
          løsninger på problemer og liker å eksperimentere med ulike
          tilnærminger for å nå målene mine.
        </p>
        <p>
          Som person er jeg svært ansvarlig, strukturert og presis. På
          fritiden liker jeg å spille videospill, se på filmer og serier,
          og være sosial, både digitalt og fysisk.
        </p>
        <p>
          Jeg liker å reise rundt i lokalområdet, og tar ofte med meg
          dronen min for å fange de vakre landskapene. Jeg har også en
          lidenskap for fotografi og elsker å fange øyeblikk som forteller
          en historie.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped lang="scss">
@import 'src/css/IndexStyle.scss';
</style>
