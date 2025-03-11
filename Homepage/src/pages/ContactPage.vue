<template>
  <q-page class="columm">
    <header>
      <nav class="flex justify-center">
        <q-btn class="bg-accent q-ma-lg text-white" flat rounded label="Gå tilbake" @click="$router.push('/')" />
      </nav>
    </header>
    <q-separator class="bg-white q-mx-auto" style="max-width: 1280px" />
    <section>
      <h1 class="text-white text-center">Emil Berglund</h1>
    </section>



    <ShootingStars />
  </q-page>
</template>

<script>
import ShootingStars from 'src/components/ShootingStars.vue';
export default {
  name: 'ContactPage',
  components: {
    ShootingStars,
  },
};
</script>

<style scoped lang="scss">
@import 'src/css/ContactStyle.scss';
</style>
