<template>
  <h3>Hey!</h3>

  <Greeting></Greeting>
  <User :age="age"></User>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 25,
    };
  },
};
</script>
