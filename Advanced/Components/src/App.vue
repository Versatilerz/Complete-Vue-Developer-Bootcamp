<template>
  <p>Hey!</p>
  <p>
    <Greeting />
  </p>
</template>

<script>
import Greeting from "@/components/Greeting.vue";

export default {
  name: "App",
  components: {
    Greeting,
  },
};
</script>
