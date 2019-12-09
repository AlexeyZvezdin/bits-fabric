<template>
  <section class="long_walking">
    <SectionHeader :h1="h1" :par="par" />
    <!-- section content -->
    <LongWalkingContent />
  </section>
</template>

<script>
import SectionHeader from './SectionHeader';
import LongWalkingContent from './LongWalkingContent';

export default {
  name: 'walking-section',
  components: {
    SectionHeader,
    LongWalkingContent
  },
  data() {
    return {
      h1: 'Для долгих прогулок',
      par:
        'В этих валенках можно гулять 5—6 часов подряд. C массажной стелькой ноги не устанут. Резиновая подошва не скользит и не промерзает.'
    };
  }
};
</script>

<style>
.long_walking {
  margin-top: 28px;
  padding-left: 10px;
}
</style>
