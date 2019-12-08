<template>
  <div class="new_models_gallery">
    <div class="new_models_gallery__box">
      <div class="new_models_gallery__box__item">
        <!-- можно конечно разбивать на еще компоненты, но сейчас наверное это излишне -->
        <img src="../assets/section_new/1.jpg" alt="Валенок" />
        <div class="new_models_gallery__box__item_desc">
          <div>
            <span>Женские валенки</span><br /><span>Василёк Спорт</span>
          </div>
          <span>3700 &#8381;</span>
        </div>
      </div>
      <div class="new_models_gallery__box__item">
        <img src="../assets/section_new/2.jpg" alt="Валенок" />
        <div class="new_models_gallery__box__item_desc">
          <div><span>Женские валенки</span><br /><span>Соловей</span></div>
          <span>1960 &#8381;</span>
        </div>
      </div>
      <div class="new_models_gallery__box__item">
        <img src="../assets/section_new/3.jpg" alt="Валенок" />
        <div class="new_models_gallery__box__item_desc">
          <div><span>Мужские валенки</span><br /><span>Альфа</span></div>
          <span>2460 &#8381;</span>
        </div>
      </div>
      <div class="new_models_gallery__box__item">
        <img src="../assets/section_new/4.jpg" alt="Валенок" />
        <div class="new_models_gallery__box__item_desc">
          <div>
            <span>Женские валенки</span><br /><span>Василиса Янтарная</span>
          </div>
          <span>3700 &#8381;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-models-gallery'
};
</script>

<style scoped>
.new_models_gallery__box__item_desc > span {
  font-weight: bold;
  margin-top: 2px;
  margin-right: 15px;
}

.new_models_gallery__box__item_desc > div {
  margin-top: 10px;
  font-size: 0.8em;
  margin-left: 10px;
}

.new_models_gallery__box__item_desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.new_models_gallery {
  margin-top: 30px;
}

.new_models_gallery__box {
  display: flex;
}

.new_models_gallery__box__item {
  max-width: 220px;
  margin-left: 10px;
}

.new_models_gallery__box__item img {
  object-fit: contain;
  object-position: 50% 50%;
  width: 220px;
  height: 200px;
}
</style>
