const profileGallery = () => {
  const profile = document.querySelector(".Profile");

  if (!profile) {
    return false;
  }
  const img = profile.querySelector(".img");
  const big = profile.querySelector(".bigimgaes");
  const thumbs = profile.querySelectorAll(".thumbs");

  thumbs.forEach((e, i) => {
    e.addEventListener("click", (event) => {
      big.setAttribute("src", "./img/img" + (i + 1) + ".png");
    });
  });
};

const galleryPopup = () => {
  const modalcontainer = document.querySelector(".modal-container");

  if (!modalcontainer) {
    return false;
  }

  const dim = document.querySelector(".dim");
  const thumbnail = document.querySelectorAll(".thumbnail");
  const closeBtn = document.querySelector(".btn-close");
  const containertitle = modalcontainer.querySelector(".container-title");
  const containerdate = modalcontainer.querySelector(".container-date");
  const meno = modalcontainer.querySelector(".meno");
  const photo0 = modalcontainer.querySelector(".photo0");
  const photo1 = modalcontainer.querySelector(".photo1");
  const photo2 = modalcontainer.querySelector(".photo2");
  const work = modalcontainer.querySelector(".work");
  const smallThumbs = modalcontainer.querySelectorAll(".modal-cotents-img img");
  const viewSite = modalcontainer.querySelector(".link")
  let nextImg1 = 0;
  let nextImg2 = 0;
  let currentImg = 0;
  const datas = [
    {
      id: 0,
      img: "./img/g1.jpg",
      title: "베베링크 웹디자인",
      date: "2020.08.13",
      type: "웹디자인",
      tool: "포토샵, 피그마",
      memo: "육아전문 사이트",
      link: "http://bebelink.dothome.co.kr/",
      
    },
    {
      id: 1,
      img: "./img/g2.jpg",
      title: "보험의반하다",
      date: "2022.08.18",
      type: "웹디자인",
      tool: "아이패드 프로크리에이트",
      memo: "보험의 반하다 웹사이트",
      
    },
    {
      id: 2,
      img: "./img/g3.jpg",
      title: "의류쇼핑몰",
      date: "2022.11.16",
      type: "웹디자인",
      tool: "포토샵 피그마",
      memo: "의류쇼핑몰 웹디자인",
      
    },
    {
      id: 3,
      img: "./img/g4.jpg",
      title: "호호네 웹디자인",
      date: "2022.10.05",
      type: "웹디자인",
      tool: "포토샵,피그마",
      memo: "시험기간에 넷플리스 보면서 공부 안하고 있는 츄덕이",
     
    },
    {
      id: 4,
      img: "./img/g5.jpg",
      title: "무이밤 상세페이지",
      date: "2022.09.17",
      type: "상세페이지",
      tool: "포토샵",
      memo: "무이밤 쇼핑몰 상세페이지",
      
    },
    {
      id: 5,
      img: "./img/g6.jpg",
      title: "베베링크 이벤트배너",
      date: "2022.11.23",
      type: "이벤트 배너",
      tool: "포토샵, 일러스트",
      memo: "베베링크 sns 이벤트 배너제작.",
      
    },
    {
      id: 6,
      img: "./img/g7.jpg",
      alt: "보험에 반하다",
      title: "명함",
      date: "2022.08.29",
      type: "명함",
      tool: "포토샵",
      memo: "보험에 반하다 대표 명함제작",
      
    },
    {
      id: 7,
      img: "./img/g8.jpg",
      alt: "보험에 반하다",
      title: "명함",
      date: "2022.10.01",
      type: "명함",
      tool: "포토샵",
      memo: "보험에반하다 사원명함",
      
    },
    {
      id: 8,
      img: "./img/g9.jpg",
      alt: "에떼르엘로고",
      title: "로고",
      date: "2022.10.26",
      type: "로고",
      tool: "포토샵, 일러스트",
      memo: "에떼르엘 로고 디자인",
     
    },
    {
      id: 9,
      img: "./img/g10.jpg",
      alt: "컵홀더 일러스트",
      title: "컵홀더일러스트",
      date: "2022.10.17",
      type: "디지털드로잉",
      tool: "아이패드 프로크리에이트",
      memo: "커피와 말을 가지고 만든 컵홀더 디자인",
      
    },
    {
      id: 10,
      img: "./img/g11.jpg",
      alt: "일러스트 디자인",
      title: "포스터",
      date: "2022.11.09",
      type: "일러스트",
      tool: "아이패드 프로크리에이트",
      memo: "커피와 말을 중심으로 그린 일러스트 포스터",
      
    },
    {
      id: 11,
      img: "./img/g12.jpg",
      alt: "고소미부엌 메뉴판",
      title: "메뉴판디자인",
      date: "2022.11.16",
      type: "메뉴판디자인",
      tool: "포토샵, 일러스트",
      memo: "고소미 부엌 메뉴판 일러스트",
       
    },
    {
      id: 12,
      img: "./img/g13.jpg",
      alt: "비건메뉴포스터",
      title: "포스터",
      date: "2022.03.04",
      type: "포스터",
      tool: "포토샵, 일러스트",
      memo: "논비건 포스터",
     
    },
    {
      id: 13,
      img: "../img/g14.jpg",
      alt: "학습그림카드",
      title: "카드",
      date: "2022.09.07",
      type: "카드",
      tool: "포토샵, 일러스트",
      memo: "아이들 수업 놀이카드 제작",
      
    },
    {
      id: 14,
      img: "./img/g15.jpg",
      alt: "꽃밭",
      title: "꽃밭",
      date: "2022.09.24",
      type: "디지털드로잉",
      tool: "포토샵, 일러스트",
      memo: "꽃밭에 놀러간 커플 일러스트제작", 
    },
  ];

  /*modalcontainer.addEventListener("click", (e) => {
    if (modalcontainer.classList.contains("active")) {
      modalcontainer.classList.remove("active");
    } else {
      modalcontainer.classList.add("active");
    }
  });*/
  thumbnail.forEach((e, i) => {
    e.addEventListener("click", (event) => {
      event.preventDefault(0);
      openModal();
      thumbsUpdate(i);
      currentImg = i; 
      dataUpdate(i);

      function openModal() {
        modalcontainer.style.left = 0;
        closeBtn.style.display = "flex";
        dim.style.display = "block";
      }

      function dataUpdate(index) {
        work.setAttribute("src", datas[index].img); 
        containertitle.textContent = datas[index].title;
        containerdate.textContent = datas[index].date;
        meno.textContent = datas[index].memo; 
        viewSite.setAttribute('href', datas[index].link)
        
      }  

      function thumbsUpdate(index) {  
        if( index === datas.length - 2) {
          nextImg2 = 0;
        } else if ( index === datas.length - 1) {
          nextImg1 = 0;
          nextImg2 = 1;
        } else { 
          nextImg1 = index  + 1;
          nextImg2 = nextImg1 + 1;
        } 
        photo0.setAttribute("src", datas[i].img);
        photo1.setAttribute("src", datas[nextImg1].img);
        photo2.setAttribute("src", datas[nextImg2].img); 
      } 

      smallThumbs.forEach((e, idx) => {
        e.addEventListener("click", ()=> {
          if(idx === 0) {
            dataUpdate(currentImg)
          } else if(idx === 1) {
            dataUpdate(nextImg1)
          } else {
            dataUpdate(nextImg2);
          }
        });
      });



    });
  });

   

 


  closeBtn.addEventListener("click", (e) => {
    modalcontainer.style.left = "-100%";
    closeBtn.style.display = "none";
    dim.style.display = "none";
  });

  dim.addEventListener("click", (e) => {
    modalcontainer.style.left = "-100%";
    dim.style.display = "none";
    closeBtn.style.display = "none";
  });
};

const sendContact = () => {
  const contactsWrap = document.querySelector(".contacts");
  const container = document.querySelector(".contact-container");
  if (!contactsWrap) {
    return false;
  }

  const entry = contactsWrap.querySelector(".title");
  const button = contactsWrap.querySelector(".btn-send");
  const title = contactsWrap.querySelector(".contents");

  const result = contactsWrap.querySelector(".contact-result");
  const h1 = result.querySelector("h1");
  const p = result.querySelector("p");

  button.addEventListener("click", () => {
    h1.textContent = entry.value;
    p.textContent = title.value;
    container.style.display = "none";
    result.style.display = "block";
  });
};

const skillsAni = () => {
  const skills = document.querySelector(".skills");
  const skill_html = document.getElementById("skill_html");
  const bars = document.querySelectorAll(".pro_bar");

  // bars.forEach(bar => {
  //   console.log(bar, bar.value)
  //   let size = bar.nextElementSibling.innerHTML;
  //   bar.value = size;
  //   bar.innerHTML = size;
  // })

  const barUpdate = () => {
    bars.forEach((bar, index) => {
      let size = bar.nextElementSibling.textContent;
      bar.value = size;
      bar.innerHTML = size;
    });
  };

  const barReset = () => {
    bars.forEach((bar) => {
      bar.value = 0;
      bar.innerHTML = "";
    });
  };

  window.addEventListener("scroll", (e) => {
    const posT = skills.getBoundingClientRect().top;
    if (posT < window.innerHeight / 2) {
      barUpdate();
    } else {
      barReset();
    }
  });
};

const headerScroll = () => {
  const header = document.querySelector(".header_wrap");
  if (!header) {
    return false;
  }
  window.addEventListener("scroll", (e) => {
    //console.log('now scoll.Y : ', window.pageYOffset)
    if (window.pageYOffset > 400) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
};

profileGallery();
galleryPopup();
sendContact();
skillsAni();
headerScroll();
