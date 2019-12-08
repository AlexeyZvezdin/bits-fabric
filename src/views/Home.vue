<template>
  <main class="main_home">
    <JumboSection />
  </main>
</template>

<script>
// @ is an alias to /src
import JumboSection from '@/components/JumboSection.vue';

export default {
  name: 'home',
  components: {
    JumboSection
  }
};
</script>

<style>
main {
  width: 960px;
}
</style>
