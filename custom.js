// var glideMulti1 = new Glide(".multi1", {
//   type: "carousel",
//   autoplay: 3500,
//   perView: 3,
// });

// glideMulti1.mount();
console.log(
  "-------------------------------------------------------------------->>>>>>>"
);
console.log(
  "-------------------------------------------------------------------->>>>>>>"
);
console.log(
  "-------------------------------------------------------------------->>>>>>>"
);
alert("coso color");

var glide = new Glide(".multi1", {
  type: "carousel",
  perView: 7,
  gap: 20,
  autoplay: 3500,
  focusAt: "center",
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
});

glide.mount();
