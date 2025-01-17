const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    box() {
      return {
        transform: `
        perspective(${this.perspective}px) 
        rotateX(${this.rotateX}deg) 
        rotateY(${this.rotateY}deg) 
        rotateZ(${this.rotateZ}deg)`,
      };
    },
    box_style() {
      return {
        background: `rgb(${this.rotateX},${this.rotateY}, ${this.rotateZ}, ${
          this.perspective / 100
        })`,
      };
    },
  },
  methods: {
    reset() {
      (this.perspective = 100),
        (this.rotateX = 0),
        (this.rotateY = 0),
        (this.rotateZ = 0);
    },
    async copy() {
      let text = `transform:${this.box.transform};`;
      await navigator.clipboard.writeText(text);
      alert("Css copied to clipboard");
    },
  },
}).mount("#app");
