<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link>|
      <router-link to="/bag">Корзина</router-link>
    </div>
    <Header />

    <router-view />
  </div>
</template>

<style>
/* I don't actually prefer normalize.css because it has some extra paddings and other thinds
   so I just reset
 */

* {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  text-decoration: none;
  list-style-type: none;
  box-shadow: none;
}

@font-face {
  font-family: 'BebasNeue';
  src: url('./assets/BebasNeue.ttf');
}

@font-face {
  font-family: 'Circe';
  src: url('./assets/Circe-Regular.ttf');
}

#app {
  font-family: 'Circe', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 960px;
  margin: 0 auto;
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  height: 2000px;
}
</style>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>
