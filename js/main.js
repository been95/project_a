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
    id: 0,
    img: "./img/g1.jpg",
    alt: "히포와 베이킹",
    title: "요리",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "츄덕이랑 같이 하는 베이킹은 세상에서 제일 재미있는 히포",
    photo1: "./img/g2.jpg",
    photo2: "./img/g3.jpg",
  },
  {
    id: 1,
    img: "./img/g2.jpg",
    alt: "딩굴딩굴",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 2,
    img: "./img/g3.jpg",
    alt: "노을",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 3,
    img: "./img/g3.jpg",
    alt: "시험기간",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 4,
    img: "./img/g3.jpg",
    alt: "공부",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 5,
    img: "./img/g3.jpg",
    alt: "이상한나라의 앨리스",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 6,
    img: "./img/g3.jpg",
    alt: "가마쿠라",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 7,
    img: "./img/g3.jpg",
    alt: "히포집앞",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 8,
    img: "./img/g3.jpg",
    alt: "그림그리기",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 2,
    img: "./img/g3.jpg",
    alt: "폭죽",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
  {
    id: 2,
    img: "./img/g3.jpg",
    alt: "꿈",
    title: "폴라로이드",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 친구들과 함께 공원에서 놀고 있는 히포와 츄덕이",
    photo1: "./img/g1.jpg",
    photo2: "./img/g2.jpg",
  },
];

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

thumbnail.forEach((e, i) => {
  e.addEventListener("click", (event) => {
    event.preventDefault(0);
    modalcontainer.style.left = 0;
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
