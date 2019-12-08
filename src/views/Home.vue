<template>
  <main class="main_home">
    <JumboSection />
    <NewModelsSec />
  </main>
</template>

<script>
// @ is an alias to /src
import JumboSection from '@/components/JumboSection.vue';
import NewModelsSec from '@/components/NewModelsSection.vue';

export default {
  name: 'home',
  components: {
    JumboSection,
    NewModelsSec
  }
};
</script>

<style>
main {
  width: 960px;
}
</style>
