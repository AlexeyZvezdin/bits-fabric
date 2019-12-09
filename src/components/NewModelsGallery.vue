<template>
  <div class="new_models_gallery">
    <div class="new_models_gallery__box">
      <Boot price="3700" src="1" alt="Валенки" sex="f" name="Василёк Спорт" />
      <Boot price="1960" src="2" alt="Валенки" sex="f" name="Соловей" />
      <Boot price="2460" src="3" alt="Валенки" sex="m" name="Альфа" />
      <Boot price="3700" src="4" alt="Валенки" sex="f" name="Василиса Янтарная" />
    </div>
  </div>
</template>

<script>
import Boot from './Boot.vue';

export default {
  name: 'new-models-gallery',
  components: {
    Boot
  }
};
</script>

<style scoped>
.new_models_gallery {
  margin-top: 30px;
}

.new_models_gallery__box {
  display: flex;
}
</style>
