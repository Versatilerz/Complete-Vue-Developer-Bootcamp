<template>
  <button type="button" @click="onClickAge">Update age</button>
  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["ageChange"],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("ageChange", 3);
    },
  },
};
</script>

<style></style>
