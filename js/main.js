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
const modalcontainer = document.querySelector(".modal-container");
const dim = document.querySelector(".dim");
const thumbnail = document.querySelectorAll(".thumbnail");
const closeBtn = document.querySelector(".btn-close");
const datas = [
  {
    id : 0,
    img : "./img/g1.jpg",
    alt : "베이킹 히포",
    title : "폴라로이드",
    date : "2022.03.04",
    type : "디지털드로잉",
    tool : "아이패드 프로크리에이트",
    memo : "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1 : "./img/g1.jpg",
    photo2 : "./img/g2.jpg",
  },
  {
    id : 1,
    img : "./img/g2.jpg",
    alt : "베이킹 히포",
    title : "폴라로이드",
    date : "2022.03.04",
    type : "디지털드로잉",
    tool : "아이패드 프로크리에이트",
    memo : "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1 : "./img/g1.jpg",
    photo2 : "./img/g2.jpg",
  },
  {
    id : 2,
    img : "./img/g3.jpg",
    alt : "베이킹 히포",
    title : "폴라로이드",
    date : "2022.03.04",
    type : "디지털드로잉",
    tool : "아이패드 프로크리에이트",
    memo : "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1 : "./img/g1.jpg",
    photo2 : "./img/g2.jpg",
  }
]

thumbs.forEach((e, i) => {
  e.addEventListener("click", (event) => {
    big.setAttribute("src", "./img/img" + (i + 1) + ".png");
  });
});
console.log("hello");

/*
thumbs.forEach( (e, i, arrys) => {
  console.log(`e : ${e}, i : ${i}, arrys : ${arrys}`)
  big.setAttribute('src','./img/img' + (i+1) + '.png');
})
*/


modalcontainer.addEventListener("click", (e) => {
  if (modalcontainer.classList.contains("active")) {
    modalcontainer.classList.remove("active");
  } else {
    modalcontainer.classList.add("active");
  }
});

thumbnail.forEach((e,i)=>{
e.addEventListener("click",(event)=>{
  event.preventDefault(0); 
   modalcontainer.style.left= 0;
   closeBtn.style.display = "block";
   dim.style.display = "block";
  });
});

closeBtn.addEventListener("click", (e) => {
  modalcontainer.style.left = "-600px";
  closeBtn.style.display = "none";
  dim.style.display = "none";
});

dim.addEventListener("click", (e) => {
  modalcontainer.style.left = "-600px";
  dim.style.display = "none";
  closeBtn.style.display = "none";
});

console.log("world");

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
