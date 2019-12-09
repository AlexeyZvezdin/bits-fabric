<template>
  <div class="new_models_gallery__box__item">
    <!-- можно конечно разбивать на еще компоненты, но сейчас наверное это излишне -->
    <img v-bind:src="require(`../assets/section_new/${src}.jpg`)" v-bind:alt="alt" />
    <div class="new_models_gallery__box__item_desc">
      <div>
        <span v-if="sex === 'f'">Женские валенки</span>
        <span v-if="sex === 'm'">Мужские валенки</span>
        <br />
        <span>{{ name }}</span>
      </div>
      <span>{{ price }} &#8381;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boot-el',
  data() {
    return {
      f: 'Женские Валенки',
      m: 'Мужские Валенки'
    };
  },
  props: {
    name: String,
    src: String,
    price: String,
    alt: String,
    sex: String
  }
};
</script>

<style>
.new_models_gallery__box__item {
  max-width: 220px;
  margin-left: 10px;
  cursor: pointer;
}

.new_models_gallery__box__item:hover {
  -webkit-box-shadow: 0px 2px 5px 0px rgba(102, 99, 102, 1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(102, 99, 102, 1);
  box-shadow: 0px 2px 5px 0px rgba(102, 99, 102, 1);
}

.new_models_gallery__box__item img {
  object-fit: contain;
  object-position: 50% 50%;
  width: 220px;
  height: 200px;
}

.new_models_gallery__box__item_desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

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
</style>
