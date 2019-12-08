<template>
  <main class="main_home">
    <JumboSection />
    <NewModelsSec />
    <ads-section />
    <!-- интересная ошибка, я почему-то не могу использовать компнент LongWalking по имени -->
    <LongWalkingSection />
  </main>
</template>

<script>
// @ is an alias to /src
import JumboSection from '@/components/JumboSection.vue';
import NewModelsSec from '@/components/NewModelsSection.vue';
import LongWalkingSection from '@/components/LongWalkingSection';
import AdsSection from '@/components/AdsSection';

export default {
  name: 'home',
  components: {
    JumboSection,
    NewModelsSec,
    LongWalkingSection,
    AdsSection
  }
};
</script>

<style>
main {
  width: 960px;
}
</style>
