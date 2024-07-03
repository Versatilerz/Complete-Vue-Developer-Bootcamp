let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  template: `{{message}}`,
});

vm.mount("#app");

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)

// beforeCreate() {
//   console.log("beforeCreate() function called!", this.message);
// },
// created() {
//   console.log("created() function called!", this.message);
// },
// beforeMount() {
//   console.log("beforeMount() function called!", this.$el);
// },
// mounted() {
//   console.log("mounted() function called!", this.$el);
// },
// beforeUpdate() {
//   console.log("beforeUpdate() function called!");
// },
// updated() {
//   console.log("updated() funcction called!");
// },
// beforeUnmount() {
//   console.log("beforeUnmount() function called!");
// },
// unmounted() {
//   console.log("unmounted() function called!");
// },
