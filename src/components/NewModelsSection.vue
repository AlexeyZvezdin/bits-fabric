<template>
  <section class="new_models">
    <div class="new_models__box">
      <h1>Новые модели</h1>
      <p>
        Обновляем модели каждые три месяца. В новой коллекции теперь больше
        цветных и ярких моделей для всей семьи.
      </p>
      <new-models-gallery />
      <ads-section />
    </div>
  </section>
</template>

<script>
import NewModelsGallery from './NewModelsGallery';
import AdsSection from './AdsSection';

export default {
  name: 'newmodels',
  components: {
    NewModelsGallery,
    AdsSection
  }
};
</script>

<style scoped>
.new_models {
  margin-top: 28px;
}

.new_models__box {
  margin-left: 10px;
}

.new_models__box > h1 {
  font-size: 34px;
  display: inline;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
}
.new_models__box p {
  margin-top: 25px;
  font-size: 1.4em;
  margin-right: 110px;
}
</style>
