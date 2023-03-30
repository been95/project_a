const img = document.querySelector(".img");

/*
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
});
*/

const big = document.querySelector(".bigimgaes");
const thumbs = document.querySelectorAll(".thumbs");

console.log(thumbs);

thumbs.forEach( (e,i) => {
  e.addEventListener('click', (event) => {
    big.setAttribute('src','./img/img' + (i+1) + '.png');
  })
})
console.log('hello');

/*
thumbs.forEach( (e, i, arrys) => {
  console.log(`e : ${e}, i : ${i}, arrys : ${arrys}`)
  big.setAttribute('src','./img/img' + (i+1) + '.png');
})
*/
 
console.log('world')
 
/*
for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", (e) => {
    big.setAttribute('src','./img/img' + (i+1) + '.png');
  });
}
*/
 

/*
let path = './img/';
 

thumbs[0].addEventListener("click", (e) => {
 
  big.setAttribute("src", path + 'img1.png');
});
thumbs[1].addEventListener("click", (e) => { 
  big.setAttribute("src", path + 'img2.png');
});
thumbs[2].addEventListener("click", (e) => { 
  big.setAttribute("src", path + 'img3.png');
});

*/

  