const img = document.querySelector("img");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
img2.addEventListener("click", (e) => {
  let path = e.currentTarget.getAttribute("src");
  img.setAttribute("src", path);
  console.log(e);
});
img3.addEventListener("click", (e) => {
  let path = e.currentTarget.getAttribute("src");
  img.setAttribute("src", path);
});
