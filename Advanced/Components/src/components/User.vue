<template>
  <button type="button" @click="onClickAge">Update age by 1</button>
  <button type="button" @click="ageChangeFn(3)">Update age by 3</button>
  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      //   required: true,
      //   default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["ageChange"],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("ageChange", 1);
    },
  },
};
</script>

<style></style>
