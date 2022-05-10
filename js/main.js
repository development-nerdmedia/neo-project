window.addEventListener("scroll", function () {
    if (this.pageYOffset > 60) {
        document.querySelector("header").classList.add("sticky");
    }
    else {
        document.querySelector("header").classList.remove("sticky");
    }
});

MyApp = {
    slider: {
        init: function () {
            const root = document.documentElement;
            const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
            const marqueeContent = document.querySelector("ul.marquee-content");

            root.style.setProperty("--marquee-elements", marqueeContent.children.length);

            for (let i = 0; i < marqueeElementsDisplayed; i++) {
                marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
            }
        }
    },
    sliderClientes: {
        init: function () {
            const root2 = document.documentElement;
            const marqueeElementsDisplayed2 = getComputedStyle(root2).getPropertyValue("--marquee-elements-displayed2");
            const marqueeContent2 = document.querySelector("ul.marquee-content2");

            root2.style.setProperty("--marquee-elements2", marqueeContent2.children.length);

            for (let i = 0; i < marqueeElementsDisplayed2; i++) {
                marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
            }
        }
    },
    categorias: {
        init: function () {
            const enlaces = document.querySelectorAll('#categorias2 a');
            $('.item-category').hide();
            const categoryMain = document.querySelector('#categorias2 a.select').innerHTML.toLowerCase();
            // console.log(categoryMain.innerHTML);
            console.log(categoryMain);
            $(`.item-category[data-categoria="${categoryMain}"]`).show(500);

            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');

                    const categoria = evento.target.innerHTML.toLowerCase(); /* para saber la categoria del menu donde estas*/
                    console.log(categoria);
                    $(`.item-category`).not(`[data-categoria="${categoria}"]`).hide(500);
                    $(`.item-category[data-categoria="${categoria}"]`).show(500);
                });
            });
        }
    }
}
if ($('.slider ').length > 0) {
    MyApp.slider.init();
}
if ($('.sliderClientes ').length > 0) {
    MyApp.sliderClientes.init();
}

if ($('#categorias2 ').length > 0) {
    MyApp.categorias.init();
}

$('.slider-proyectos').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$('.slider-servicios').slick({
    dots: true,
    infinite: false,
    speed: 300,
    dots: false,
    slidesToShow: 2.57,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-fotos').slick({
    dots: true,
    infinite: false,
    speed: 300,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

/* popup */
document.addEventListener("click", (e) => {
    if (e.target.closest(".items-category")) {
        togglePortfolioPopup();
        // document.querySelector(".item-popup").scrollTo(0, 0);
        // portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".item-popup").classList.toggle("open");
    // document.body.classList.toggle("hide-scrolling");
    // document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".btn-close").addEventListener("click", togglePortfolioPopup);
