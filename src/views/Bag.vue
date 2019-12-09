<template>
  <div class="bag">
    <h1>Корзина покупок</h1>
    <p>
      <router-link to="/">Вернуться на главную &#8656;</router-link>
    </p>
    <p v-if="$store.getters.getTrue">{{ $store.getters.fullBag }}</p>
    <p v-else>Корзина пуста</p>
  </div>
</template>

<script></script>

<style>
.bag {
  margin-top: 25px;
  background-color: rgb(235, 228, 228);
}
</style>
