// Initialize the Splide.js slider
new Splide(".splide", {
  type: "slider",
  perPage: 3,
  perMove: 1,
  pagination: false,
  arrows: false,
  gap: "15rem",
  breakpoints: {
    992: {
      perPage: 1,
    },
  },
}).mount();
