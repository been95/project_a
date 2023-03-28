/*const img = document.querySelector(".img");
const profile1 = document.querySelector(".profile1");
const profile2 = document.querySelector(".profile2");
const profile3 = document.querySelector(".profile3");

profile1.addEventListener("click", (e) => {
  let path = e.currentTarget.getAttribute("src");
  img.setAttribute("src", path);
});
profile2.addEventListener("click", (e) => {
  let path = e.currentTarget.getAttribute("src");
  img.setAttribute("src", path);
});
profile3.addEventListener("click", (e) => {
  let path = e.currentTarget.getAttribute("src");
  img.setAttribute("src", path);
});*/

const big = document.querySelector(".bigimgaes");
const small = document.querySelector(".smallimges ");
for (let i = 0; i < smallimges.length; i++) {
  small[i].addEventListener("click", changepic);
}

small.addEventListener("click", (e) => {
  let changepic = e.currentTarget.getAttribute("src");
  big.setAttribute("src", changepic);
});
