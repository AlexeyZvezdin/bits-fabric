<template>
  <div>
    <h1>{{ h1 }}</h1>
    <p>{{ par }}</p>
  </div>
</template>

<script>
export default {
  name: 'section-header',
  props: {
    h1: String,
    par: String
  }
};
</script>

<style scoped>
h1 {
  font-size: 34px;
  display: inline;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
}

p {
  margin-top: 25px;
  font-size: 1.4em;
  margin-right: 110px;
}
</style>