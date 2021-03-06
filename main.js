$('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"> </button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"> </button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
})

$('.header__btn__menu').on('click', function () {
    $('.menu ul').slideToggle();
    let element = document.getElementById("slider__inner");
    if (!(element.classList.contains('displayNone'))) {
        element.classList.add("displayNone");
    } else {
        element.classList.remove("displayNone");
    }
});

$('.services__items').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"> </button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"> </button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 676,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
})

const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}

const fryzjerA = [
    {
        name: "- Strzy??enie damskie",
        cena: "+100,00 z??"
    },
    {
        name: "- Strzy??enie ko??c??wek na sucho",
        cena: "60,00 z??"
    },
    {
        name: "- Strzy??enie grzywki",
        cena: "20,00 z??"
    },
    {
        name: "- Strzy??enie m??skie",
        cena: "50,00 z??"
    },
    {
        name: "- Strzy??enie brody i w??s??w",
        cena: "25,00 z??"
    },
    {
        name: "- Strzy??enie dzieci",
        cena: "40,00 z??"
    }
]

fryzjerA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("fryzjerA").append(doc.firstChild)
})

const fryzjerB = [
    {
        name: "- Koloryzacja jednolita w??osy d??ugi",
        cena: "+200,00 z??"
    },
    {
        name: "- Koloryzacja jednolita w??osy ??redni",
        cena: "+180,00 z??"
    },
    {
        name: "- Koloryzacja jednolita w??osy kr??tki",
        cena: "+160,00 z??"
    },
    {
        name: "- Decoloryzacja + koloryzacja",
        cena: "+200,00 z??"
    },
    {
        name: "- Koloryzacja odrost??w",
        cena: "+160,00 z??"
    },
    {
        name: "- koloryzacja farb?? klientki",
        cena: "+100,00 z??"
    },
    {
        name: "- Balayage",
        cena: "+300,00 z??"
    },
    {
        name: "- Shatush",
        cena: "+300,00 z??"
    },
    {
        name: "- Air Touch",
        cena: "+500,00 z??"
    },
    {
        name: "- Refleksy",
        cena: "+200,00 z??"
    },
]

fryzjerB.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("fryzjerB").append(doc.firstChild)
})

const fryzjerC = [
    {
        name: "- Botox na w??osy",
        cena: "+80,00 z??"
    },
    {
        name: "- Keratynowe prostowanie w??os??w",
        cena: "+250,00 z??"
    },
    {
        name: "- Bio trwa??a ondulacja w??os??w d??ugich",
        cena: "350,00 z??"
    },
    {
        name: "- Bio trwa??a ondulacja w??os??w ??rednich",
        cena: "280,00 z??"
    },
    {
        name: "- Bio trwa??a ondulacja w??os??w kr??tkich",
        cena: "180,00 z??"
    }
]

fryzjerC.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("fryzjerC").append(doc.firstChild)
})

const manicureA = [
    {
        name: "- Manicure hybrydowy",
        cena: "100,00 z??"
    },
    {
        name: "- Manicure hybrydowy frencz",
        cena: "100,00 z??"
    },
    {
        name: "- Malowanie hybryd??",
        cena: "60,00 z??"
    },
    {
        name: "- Manicure frezarkowy lub kombinowany",
        cena: "50,00 z??"
    },
    {
        name: "- ??el na naturalnej p??ytce",
        cena: "110,00 z??"
    },
    {
        name: "- Przed??u??anie ??elem",
        cena: "140,00 z??"
    },
    {
        name: "- Uzupe??nianie ??elem",
        cena: "110,00 z??"
    },
    {
        name: "- Manicure m??ski",
        cena: "70,00 z??"
    },
    {
        name: "- ??ci??gni??cie hybrydy",
        cena: "20,00 z??"
    },
    {
        name: "- ??ci??gni??cie ??elu",
        cena: "20,00 z??"
    }
]

manicureA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("manicureA").append(doc.firstChild)
})

const pedicureA = [
    {
        name: "- Pedicure klasyczny",
        cena: "100,00 z??"
    },
    {
        name: "- Pedicure hybrydowy",
        cena: "130,00 z??"
    },
    {
        name: "- Pedicure hybrydowy mini",
        cena: "100,00 z??"
    },
    {
        name: "- Pedicure m??ski",
        cena: "120,00 z??"
    },
    {
        name: "- ??ci??gni??cie hybrydy",
        cena: "20,00 z??"
    }
]

pedicureA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("pedicureA").append(doc.firstChild)
})

const przedluzanieA = [
    {
        name: "- Lifting i laminacja rz????",
        cena: "120,00 z??"
    },
    {
        name: "- Przed??uzanie metod?? 1:1",
        cena: "120,00 z??"
    },
    {
        name: "- Przed??uzanie metod?? 1:2",
        cena: "140,00 z??"
    },
    {
        name: "- Przed??uzanie metod?? 1:3",
        cena: "160,00 z??"
    },
    {
        name: "- Przed??uzanie metod?? 1:4",
        cena: "180,00 z??"
    },
    {
        name: "- ??ci??gni??cie rz??s",
        cena: "35,00 z??"
    }
]

przedluzanieA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("przedluzanieA").append(doc.firstChild)
})

const depilacjaA = [
    {
        name: "- Bikini brazylijskie + pachy",
        cena: "105,00 z??"
    },
    {
        name: "- Bikini brazylijskie + pachy + ??ydki",
        cena: "145,00 z??"
    },
    {
        name: "- Bikini brazylijskie + nogi ca??e",
        cena: "150,00 z??"
    },
    {
        name: "- Bikini brazylijskie",
        cena: "80,00 z??"
    },
    {
        name: "- Bikini klasycznie + ca??e nogi",
        cena: "115,00 z??"
    },
    {
        name: "- Bikini klasycznie",
        cena: "30,00 z??"
    },
    {
        name: "- Twarz",
        cena: "20,00 z??"
    },
    {
        name: "- W??siki",
        cena: "15,00 z??"
    },
    {
        name: "- R??ce ca??e",
        cena: "55,00 z??"
    },
    {
        name: "- R??ce do ??okcia",
        cena: "35,00 z??"
    },
    {
        name: "- Plecy",
        cena: "40,00 z??"
    },
    {
        name: "- Brzuch",
        cena: "30,00 z??"
    },
    {
        name: "- Pachy",
        cena: "35,00 z??"
    },
    {
        name: "- Uda",
        cena: "45,00 z??"
    },
    {
        name: "- ??ydki",
        cena: "45,00 z??"
    },
    {
        name: "- Ca??e nogi",
        cena: "80,00 z??"
    }
]

depilacjaA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("depilacjaA").append(doc.firstChild)
})

const depilacjaB = [
    {
        name: "- Bikini brazylijskie + pachy",
        cena: "230,00 z??"
    },
    {
        name: "- Bikini brazylijskie + pachy + ??ydki",
        cena: "380,00 z??"
    },
    {
        name: "- Bikini brazylijskie + nogi ca??e",
        cena: "400,00 z??"
    },
    {
        name: "- Bikini brazylijskie + brzuch",
        cena: "230,00 z??"
    },
    {
        name: "- Bikini brazylijskie",
        cena: "200,00 z??"
    },
    {
        name: "- Bikini klasycznie",
        cena: "100,00 z??"
    },
    {
        name: "- Bikini g????bokie",
        cena: "160,00 z??"
    },
    {
        name: "- Ca??e cia??o",
        cena: "700,00 z??"
    },
    {
        name: "- Brzwi",
        cena: "30,00 z??"
    },
    {
        name: "- Twarz",
        cena: "120,00 z??"
    },
    {
        name: "- R??ce ca??e",
        cena: "130,00 z??"
    },
    {
        name: "- R??ce do ??okcia",
        cena: "70,00 z??"
    },
    {
        name: "- Kark",
        cena: "70,00 z??"
    },
    {
        name: "- Plecy",
        cena: "120,00 z??"
    },
    {
        name: "- Pachy",
        cena: "60,00 z??"
    },
    {
        name: "- Tors + brzuch",
        cena: "130,00 z??"
    },
    {
        name: "- Brzuch",
        cena: "90,00 z??"
    },
    {
        name: "- Tors",
        cena: "90,00 z??"
    },
    {
        name: "- Po??ladki",
        cena: "100,00 z??"
    },
    {
        name: "- Ca??e nogi",
        cena: "200,00 z??"
    }
]

depilacjaB.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("depilacjaB").append(doc.firstChild)
})

const tatuazA = [
    {
        name: "- Konsultacja",
        cena: "0,00 z??"
    },
    {
        name: "- Od??wie??anie brwi",
        cena: "300,00 z??"
    },
    {
        name: "- Makija?? permanentny brwi",
        cena: "350,00 z??"
    },
    {
        name: "- Makija?? permanentny brwi metod?? cieniowania",
        cena: "450,00 z??"
    },
    {
        name: "- Korekcja makija??u permanentnego brwi",
        cena: "250,00 z??"
    },
    {
        name: "- Makija?? permanentny ust",
        cena: "350,00 z??"
    },
    {
        name: "- Korekcja makija??u permanentnego ust",
        cena: "250,00 z??"
    }
]

tatuazA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("tatuazA").append(doc.firstChild)
})

const laserA = [
    {
        name: "- Brazylijskie bikini",
        cena: "180,00 z??"
    },
    {
        name: "- Klasyczne bikini",
        cena: "150,00 z??"
    },
    {
        name: "- W??siki",
        cena: "80,00 z??"
    },
    {
        name: "- Pachy",
        cena: "150,00 z??"
    },
    {
        name: "- R??ce",
        cena: "150,00 z??"
    },
    {
        name: "- Brzuch",
        cena: "50,00 z??"
    },
    {
        name: "- Uda",
        cena: "150,00 z??"
    },
    {
        name: "- ??ydki",
        cena: "150,00 z??"
    }
]

laserA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("laserA").append(doc.firstChild)
})

const masazA = [
    {
        name: "- Masa?? bank?? chi??sk??",
        cena: "80,00 z??",
        czas: "30min"
    },
    {
        name: "- Masa?? bank?? chi??sk??",
        cena: "100,00 z??",
        czas: "45min"
    },
    {
        name: "- Masa?? bank?? chi??sk??",
        cena: "140,00 z??",
        czas: "60min"
    },
    {
        name: "- Masa?? klasyczny-cz????ciowy",
        cena: "80,00 z??",
        czas: "30min"
    },
    {
        name: "- Masa?? klasyczny-cz????ciowy",
        cena: "100,00 z??",
        czas: "45min"
    },
    {
        name: "- Masa?? klasyczny-cz????ciowy",
        cena: "140,00 z??",
        czas: "60min"
    },
    {
        name: "- Masa?? relaksacyjny-cz????ciowy",
        cena: "80,00 z??",
        czas: "30min"
    },
    {
        name: "- Masa?? relaksacyjny-cz????ciowy",
        cena: "100,00 z??",
        czas: "45min"
    },
    {
        name: "- Masa?? relaksacyjny-cz????ciowy",
        cena: "140,00 z??",
        czas: "60min"
    },
    {
        name: "- Masa?? Lomi Lomi",
        cena: "180,00 z??",
        czas: "90min"
    },
    {
        name: "- Masa?? gor??cymi kamieniami",
        cena: "200,00 z??",
        czas: "75min"
    },
]

masazA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("masazA").append(doc.firstChild)
})

const kosmetologiaA = [
    {
        name: "- Oczyszczanie twarzy",
        cena: "140,00 z??"
    },
    {
        name: "- Masa?? twarzy z mask??",
        cena: "120,00 z??",
    },
    {
        name: "- Przeciwzmarszczkowo-liftinguj??cy zabieg",
        cena: "250,00 z??"
    },
    {
        name: "- Peeling kawitacyjny",
        cena: "140,00 z??"
    },
    {
        name: "- Masa?? twar??y, szyi i dekoltu dla m????czyzny",
        cena: "120,00 z??"
    },
    {
        name: "- Zabieg na odm??odzenie sk??ry dla m????czyzny",
        cena: "150,00 z??"
    },
    {
        name: "- Zabieg dla sk??ry naczyniowej i wra??liwej",
        cena: "150,00 z??"
    },
    {
        name: "- Zabieg liftinguj??cy na twarz, Ella Bache",
        cena: "100,00 z??"
    },
    {
        name: "- Zabieg przeciwtr??dzikowy",
        cena: "150,00 z??"
    },
    {
        name: "- Zabieg kwasem mlekowym",
        cena: "100,00 z??"
    },
    {
        name: "- Zabieg kwasem migda??owym",
        cena: "120,00 z??"
    },
]

kosmetologiaA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("kosmetologiaA").append(doc.firstChild)
})
