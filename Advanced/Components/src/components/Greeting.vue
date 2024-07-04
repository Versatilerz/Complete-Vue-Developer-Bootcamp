<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>

<style scoped lang="scss">
p:hover {
  color: darken(red, 15%);
}
</style>
