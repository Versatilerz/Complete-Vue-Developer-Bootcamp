const vm = Vue.createApp({
  data() {
    return {
      firstName: "Finn",
      lastName: " van Gestel",
      url: "https://google.com",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Joah";
// }, 2000);
