const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "name of the wind", author: "efef" },
        { title: "nre wind", author: "rttr" },
        { title: "nameed", author: "efererereef" },
      ],
      title: "The Fianl Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
