<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Finn",
      lastName: " van Gestel",
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.firstName = "Bob";
  //   }, 2000);
  // },
};
</script>

<script setup></script>

<template>
  <div>{{ firstName }}{{ lastName }}</div>
</template>

<style scoped></style>
