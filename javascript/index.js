const btnCart = document.querySelector(".js-btn-cart");


btnCart.addEventListener("click", () => {
  const ap = document.querySelector("#cart");
  ap.classList.toggle("speed-in");
});
