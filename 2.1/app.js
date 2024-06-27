const vm = Vue.createApp({
  data() {
    return {
      firstName: "Finn",
      lastName: " van Gestel",
    };
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Joah";
// }, 2000);
