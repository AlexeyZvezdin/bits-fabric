<template>
  <div id="app">
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

@media (max-width: 960px) {
  #app {
    max-width: 960px;
    min-width: 768px;
  }
}

@media (max-width: 768px) {
  #app {
    max-width: 768px;
    min-width: 375px;
  }
}

#app {
  font-family: 'Circe', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 960px;
  margin: 0 auto;
  height: 2400px;
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

// Можно выделить все заговолки в секциях в отдельный компонент, и валенки
