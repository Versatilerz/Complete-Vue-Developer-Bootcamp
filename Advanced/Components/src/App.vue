<template>
  <h3>Hey!</h3>

  <Greeting :age="age"></Greeting>
  <User :age="age" @ageChange="updateAge"></User>
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
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
  },
};
</script>
