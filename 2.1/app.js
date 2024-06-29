const vm = Vue.createApp({
  data() {
    return {
      firstName: "Finn",
      middleName: "",
      lastName: "Gestel",
      url: "https://google.com",
      raw_url: `<a href="https://google.com" target="_blank">
          Google
        </a>`,
      age: 20,
    };
  },
  methods: {
    Increment() {
      this.age++;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    updateLastName(message, event) {
      // event.preventDefault(); no longer needed, added as an event modifier in the html
      this.lastName = event.target.value;
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Joah";
// }, 2000);
