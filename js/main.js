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
const containertitle = document.querySelector(".container-title");
const containerdate = document.querySelector(".container-date");
const meno = document.querySelector(".meno")
const photo1 =document.querySelector(".photo1")
const photo2 =document.querySelector(".photo2")
const datas = [
  {
    id: 0,
    img: "./img/g1.jpg",
    alt: "히포와 베이킹",
    title: "히포와 베이킹",
    date: "2022.08.13",
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
    title: "딩굴딩굴",
    date: "2022.08.18",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "한가로운 주말에 집에서 딩굴딩굴 거리고 있는 츄덕이",
    photo1: "./img/g3.jpg",
    photo2: "./img/g4.jpg",
  },
  {
    id: 2,
    img: "./img/g3.jpg",
    alt: "노을",
    title: "노을",
    date: "2022.11.16",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "집에 가는 길에 노을과 함께 만난 친구들",
    photo1: "./img/g4.jpg",
    photo2: "./img/g5.jpg",
  },
  {
    id: 3,
    img: "./img/g4.jpg",
    alt: "시험기간",
    title: "시험기간",
    date: "2022.10.05",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "시험기간에 넷플리스 보면서 공부 안하고 있는 츄덕이",
    photo1: "./img/g5.jpg",
    photo2: "./img/g6.jpg",
  },
  {
    id: 4,
    img: "./img/g5.jpg",
    alt: "공부",
    title: "공부",
    date: "2022.09.17",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "공부만 하면 잠이 솔솔 오기 시작하는 츄덕이",
    photo1: "./img/g6.jpg",
    photo2: "./img/g7.jpg",
  },
  {
    id: 5,
    img: "./img/g6.jpg",
    alt: "이상한나라의 앨리스",
    title: "이상한나라의 앨리스",
    date: "2022.11.23",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "어릴때 본 이상한 나라의 앨리스를 모티브로 제작했습니다.",
    photo1: "./img/g7.jpg",
    photo2: "./img/g8.jpg",
  },
  {
    id: 6,
    img: "./img/g7.jpg",
    alt: "가마쿠라",
    title: "가마쿠라",
    date: "2022.08.29",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "가마쿠라에서 놀고 유토한테 고백하는 친구",
    photo1: "./img/g8.jpg",
    photo2: "./img/g9.jpg",
  },
  {
    id: 7,
    img: "./img/g8.jpg",
    alt: "히포집앞",
    title: "히포집앞",
    date: "2022.10.01",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "츄덕이가 유토를 만날려고 간 히포집앞역",
    photo1: "./img/g9.jpg",
    photo2: "./img/g10.jpg",
  },
  {
    id: 8,
    img: "./img/g9.jpg",
    alt: "그림그리기",
    title: "그림그리기",
    date: "2022.10.26",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "히포랑 츄덕이가 만나면 항상 뭐가 즐거운지 둘이서 그림그리면서 시간을 보내고 있습니다.",
    photo1: "./img/g10.jpg",
    photo2: "./img/g11.jpg",
  },
  {
    id: 9,
    img: "./img/g10.jpg",
    alt: "폭죽",
    title: "폭죽",
    date: "2022.10.17",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "자전거 연습을 하는 도중에 우연하게 본 폭죽놀이!처음보는 광경에 히포는 한동안 폭죽본걸 이야기했어요",
    photo1: "./img/g11.jpg",
    photo2: "./img/g12.jpg",
  },
  {
    id: 10,
    img: "./img/g11.jpg",
    alt: "꿈",
    title: "꿈",
    date: "2022.11.09",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "꿈에서는 안되는 일이 없듯이 츄덕이에 꿈속에서는 츄덕이만에 상상력으로 만들어진 꿈들이 펼쳐집니다.",
    photo1: "./img/g12.jpg",
    photo2: "./img/g13.jpg",
  },
  {
    id: 11,
    img: "./img/g12.jpg",
    alt: "아이들",
    title: "아이들",
    date: "2022.11.16",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "집으로 돌아가는 길에 노을진 하늘에세 친구들과 만나서 같이 집으로 가는 츄덕이",
    photo1: "./img/g13.jpg",
    photo2: "./img/g14.jpg",
  },
  {
    id: 12,
    img: "./img/g13.jpg",
    alt: "꽃밭",
    title: "꽃밭",
    date: "2022.03.04",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "이쁜 꽃밭에서 사진찍은 남여",
    photo1: "./img/g14.jpg",
    photo2: "./img/g15.jpg",
  },
  {
    id: 13,
    img: "./img/g14.jpg",
    alt: "전철안",
    title: "전철안",
    date: "2022.09.07",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "디즈니랜드에서 신나게 놀고 집으로 돌아가는 유토와 츄덕이",
    photo1: "./img/g15.jpg",
    photo2: "./img/g1.jpg",
  },
  {
    id: 14,
    img: "./img/g15.jpg",
    alt: "폴라로이드",
    title: "폴라로이드",
    date: "2022.09.24",
    type: "디지털드로잉",
    tool: "아이패드 프로크리에이트",
    memo: "따사로운 햇살과 함께 공원에서 추억을 간직하고 싶어서 친구들과 폴라로이드 찰칵",
    photo1: "./img/g15.jpg",
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
    containertitle.textContent = datas[i].title;
    containerdate.textContent = datas[i].date;
    meno.textContent= datas[i].memo;
    thumbs.innerHTML=datas[i].img
    photo1.innerHTML= datas[i].photo1;

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
