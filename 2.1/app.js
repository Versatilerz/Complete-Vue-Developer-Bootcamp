const vm = Vue.createApp({
  data() {
    return {
      firstName: "Finn",
      lastName: " van Gestel",
      url: "https://google.com",
      raw_url: `<a href="https://google.com" target="_blank">
          Google
        </a>`,
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    Increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Joah";
// }, 2000);
