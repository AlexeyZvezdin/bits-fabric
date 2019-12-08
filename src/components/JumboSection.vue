<template>
  <section class="main__home__jumbo">
    <div class="main__home__jumbo__box">
      <img src="../assets/valen.jpg" alt="Делаем Валенки" />
      <div class="main__home__jumbo__box__desc">
        <h1>Делаем валенки<br />Из чистой шерсти.<br />Валяем с 1897 года.</h1>
      </div>
      <div class="main__home__jumbo__box__item_info">
        <span class="main__home__jumbo__box__item_info__name"
          >Женские валенки</span
        ><br /><span class="main__home__jumbo__box__item_info__desc"
          ><span>Лосина</span><br /><span>1790 &#8381;</span></span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'jumbosection'
};
</script>

<style scoped>
/* read styles from bottom to top */

.main__home__jumbo__box__item_info__desc span:last-child {
  font-size: 16px;
  font-weight: 700;
}
.main__home__jumbo__box__item_info__desc span:first-child {
  font-size: 13px;
}
.main__home__jumbo__box__item_info__name {
  font-size: 13px;
}

.main__home__jumbo__box__item_info {
  position: absolute;
  top: 100px;
  right: 20px;
  color: black;
  cursor: pointer;
}

.main__home__jumbo__box {
  overflow: hidden;
  position: relative;
  max-height: 451px;
  min-height: 451px;
}

.main__home__jumbo__box__desc {
  position: absolute;
  top: 120px;
  left: 40px;
  color: white;
  font-size: 28px;
  line-height: 1.25;
  font-weight: bold;
}

.main__home__jumbo__box img {
  position: absolute;
  border: 0;
  /* To make this work height + width is necessary */
  object-fit: cover;
  width: 100%;
  height: 450px;
}

.main__home__jumbo {
  margin-top: 20px;
}
</style>
