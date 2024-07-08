<script>
export default {
  name: "Result",
  props: ["results", "totalCorrect"],
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((result, index) => {
        if (
          result.min <= this.totalCorrect &&
          result.max >= this.totalCorrect
        ) {
          index = index;
        }
      });

      return index;
    },
  },
};
</script>

<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">{{ results[resultIndex].desc }}</div>
  </div>
</template>
