<template>
  <section class="ads_section">
    <div class="ads_sales">
      <div class="ads_sales__box">
        <h2>РАСПРОДАЖА</h2>
        <hr class="ads_sales__box__hr" />
        <p>
          <span>Скидка 50% на все модели c</span><br />
          <span> подошвой Vibram &reg;</span>
        </p>
      </div>
    </div>
    <div class="ads_timberland">
      <div class="ads_sales__box">
        <h2>БИТЦЕВСКАЯ ФАБРИКА</h2>
        <hr class="ads_sales__box__hr" />
        <div>
          <h2>Timberland</h2>
          <br />
          <span>Старт продаж 1 августа</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ads-section'
};
</script>

<style>
.ads_section {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.ads_sales {
  font-weight: 100;
  color: white;
  width: 460px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #970707;
}

.ads_sales h2 {
  letter-spacing: 4px;
}

.ads_sales p {
  font-size: 0.8em;
}

.ads_sales__box {
  margin: 0 auto;
}

.ads_sales__box__hr {
  opacity: 0.5;
  border: solid 1px #ffffff;
  margin: 0 auto;
  margin-bottom: 5px;
  width: 185px;
}

/* ads timberland */

.ads_timberland {
  font-weight: 100;
  color: white;
  width: 460px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #6b696a;
}

.ads_timberland h1 {
  font-family: 'BebasNeue';
}
</style>
