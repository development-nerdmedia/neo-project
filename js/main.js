AOS.init();
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
            const categoryMain = document.querySelector('#categorias2 a.select').innerHTML;
            console.log(categoryMain);
            $(`.item-category.modulo-mas[data-categoria="${categoryMain}"]`).slice(0, 6).show();

            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');

                    const categoria = evento.target.innerHTML; /* para saber la categoria del menu donde estas*/
                    console.log(categoria);
                    $("#cargarMasModulo").attr("style", "display:block;");
                    $(`.item-category`).not(`[data-categoria="${categoria}"]`).hide();
                    $(`.item-category.modulo-mas[data-categoria="${categoria}"]`).slice(0, 6).show();
                    $("#cargarMasModulo").click(function (e) {
                        e.preventDefault();
                        $(`.modulo-mas[data-categoria="${categoria}"]:hidden`).slice(0, 6).slideDown();
                        if ($(`.modulo-mas[data-categoria="${categoria}"]:hidden`).length == 0) {
                            $("#cargarMasModulo").attr("style", "display:none;");
                        }
                    });
                });
            });            
        }
    },
    popUp: {
        init: function () {
            /* popup */
            document.addEventListener("click", (e) => {
                if (e.target.closest(".item-category")) {
                    togglePortfolioPopup();
                    portfolioItemDetails(e.target.parentElement);
                }
                if (e.target.closest(".btn-close")) {
                    // const imagenesInSlider = document.querySelector(".item-foto");
                    document.querySelector(".slider-fotos").innerHTML = "";
                    document.querySelector(".slider-fotos").classList.remove('slick-initialized');
                    document.querySelector(".slider-fotos").classList.remove('slick-slider');
                }
            })

            function togglePortfolioPopup() {
                document.querySelector(".item-popup").classList.toggle("open");
            }

            document.querySelector(".btn-close").addEventListener("click", togglePortfolioPopup);

            function portfolioItemDetails(portfolioItem) {                
                console.log("entro");
                document.querySelector(".text-popup h4").innerHTML = portfolioItem.querySelector(".info h4").innerHTML;
                document.querySelector(".text-popup p").innerHTML = portfolioItem.querySelector(".info p").innerHTML;
                document.querySelector(".text-parrrafo p").innerHTML = portfolioItem.querySelector(".info-popup p").innerHTML;
                sliderImgs2 = portfolioItem.querySelectorAll(".imagenes img");
                fotos = [];
                for (let i = 0; i < sliderImgs2.length; i++) {
                    //console.log(sliderImgs2[i]);
                    fotos.push(sliderImgs2[i])
                    sliderFotos2 = document.querySelector(".slider-fotos");
                    item2 = document.createElement("div");
                    item2.setAttribute("class", "item-foto")
                    item2.appendChild(fotos[i])
                    sliderFotos2.appendChild(item2);
                    itemfoto = document.createElement("img");
                    itemfoto.setAttribute("src", sliderImgs2[i].currentSrc);
                    portfolioItem.querySelector(".imagenes").appendChild(itemfoto);
                }                                
                console.log(sliderImgs2);
                console.log(fotos);
                sliderFotosPopup(); 
            }

            function sliderFotosPopup() {
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
            }
        }
    },
    contador: {
        init: function () {
            const numero = document.querySelector(".experiencias .numero h3")
            const numero1 = document.querySelector(".experiencias .numero h4").textContent
            let cantidad = 0;
            let tiempo = setInterval(() => {
                cantidad += 9;
                numero.textContent=cantidad
                if (cantidad >= numero1) {
                    clearInterval(tiempo)
                }
            },120)
            const numero2 = document.querySelector(".experiencias .numero h3.mil1")
            const numero3 = document.querySelector(".experiencias .numero h4.mil").textContent
            let cantidad1 = 0;
            let tiempo1 = setInterval(() => {
                cantidad1 += 9;
                numero2.textContent=cantidad1
                if (cantidad1 >= numero3) {
                    clearInterval(tiempo1)
                    numero2.textContent = 10000
                }
            },2)
            const numero4 = document.querySelector(".experiencias .numero h3.tres1")
            const numero5 = document.querySelector(".experiencias .numero h4.tres").textContent
            let cantidad2 = 0;
            let tiempo2 = setInterval(() => {
                cantidad2 += 9;
                numero4.textContent=cantidad2
                if (cantidad2 >= numero5) {
                    clearInterval(tiempo2)
                    numero4.textContent = 3000
                }
            },15)
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
    MyApp.popUp.init();
}
if ($('.proyectos ').length > 0) {
    MyApp.popUp.init();
}
if ($('.experiencias ').length > 0) {
    MyApp.contador.init();
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

$('.marquee-with-options').marquee({
	speed: 15000,
	gap: 50,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true
});



