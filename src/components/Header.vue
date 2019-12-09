<template>
  <header>
    <div class="header_box">
      <div class="header_box__fabric_h1">
        <h1>БИТЦЕВСКАЯ ФАБРИКА</h1>
      </div>
      <div class="header_box__nav">
        <nav>
          <ul>
            <li>
              <a href>Валенки</a>
            </li>
            <li>
              <a href>Галоши</a>
            </li>
            <li>
              <a href>Одежда</a>
            </li>
            <li>
              <a href>Аксессуары</a>
            </li>
            <li>
              <a href>О фабрике</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header_box__shopping_bag">
        <div class="header_box__shopping_bag__box">
          <img src="../assets/cart.png" alt="корзина покупок" />
          <span>
            {{$store.getters.fullBag}}
            Корзина
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* styles should be read from down to up */

/* shopping bag ∨ */

.header_box__shopping_bag {
  margin-right: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.header_box__shopping_bag__box {
  text-align: center;
  cursor: pointer;
}

.header_box__shopping_bag__box span {
  color: #2196f3;
  font-size: 16px;
  line-height: 1.44;
}

.header_box__shopping_bag__box > img {
  margin-bottom: 2px;
  margin-right: 5px;
  width: 18px;
  height: 18px;
}

/* navigation ∨ */

.header_box__nav a {
  color: black;
}

.header_box__nav nav {
  margin-top: 30px;
  margin-right: 100px;
  font-size: 16px;
  line-height: 23px;
  font-family: 'Circe';
}

/* general header styles ∨ */

.header_box {
  display: flex;
  justify-content: space-between;
}

/* fabric header section ∨ */

.header_box__fabric_h1 h1 {
  text-align: center;
  margin-top: 15px;
  margin-left: 10px;
  font-size: 25px;
  font-weight: 100;
  font-family: 'BebasNeue';
}

/* general */

ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

<script>
export default {
  name: 'Header',
  props: {},
  data() {
    return {
      message: 'sick'
    };
  }
};
</script>
