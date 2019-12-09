<template>
  <div class="content">
    <div class="content_boots">
      <Boot src="5" alt="Детские Валенки" sex="m" name="Модник" price="2341" />
      <Boot src="7" alt="Женские Валенки" sex="f" name="Аляска Лось" price="4231" />
    </div>
    <div class="content__showcase">
      <img src="../assets/woman.jpg" alt="Девушка в валенках" />
      <div class="content__showcase__desc">
        <p>Женские валенки с узором</p>
        <span>5600 &#8381;</span>
      </div>
    </div>
    <div class="content_boots">
      <Boot src="8" alt="Мужские Валенки" sex="f" name="Звезда" price="3314" />
      <Boot src="6" alt="Валенки" sex="m" name="Polar Bear" price="4142" />
    </div>
  </div>
</template>

<script>
import Boot from './Boot';

export default {
  name: 'lang-walking-content',
  components: {
    Boot
  }
};
</script>

<style scoped>
.content {
  margin-top: 25px;
  display: flex;
}

.content__showcase {
  height: 590px;
  width: 420px;
}

.content__showcase img {
  height: 550px;
  width: 420px;
  object-fit: contain;
  object-position: 50% 50%;
}

.content__showcase__desc {
  margin: 10px 20px;
  display: flex;
  justify-content: space-between;
}

.content__showcase__desc span {
  font-weight: bold;
}
</style>