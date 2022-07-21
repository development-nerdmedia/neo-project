AOS.init();

const URLactual = window.location;

document.addEventListener("click", (e) => {
    if (e.target.closest(".menu-responsive")) {
        document.querySelector(".menupage").classList.toggle("open");
    }
    if (e.target.closest("section.menupage .top button")) {
        document.querySelector(".menupage").classList.toggle("open");
    }
    if (e.target.closest(".contacto a") || e.target.closest(".tarj-contacto a") || e.target.closest(".btn-contacto")) {
        localStorage.setItem('url-actual', `${URLactual}`);
    }
    if ($('.top a').length > 0) {
        var link = localStorage.getItem("url-actual");
        $('.top a').attr("href", link);
    }
})

MyApp = {
    scroll: {
        init: function () {
            window.addEventListener("scroll", function () {
                if (this.pageYOffset > 60) {
                    document.querySelector("header").classList.add("sticky");
                }
                else {
                    document.querySelector("header").classList.remove("sticky");
                }
            });
        }
    },
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
            
            document.querySelector("#categorias2 a").classList.add("select");
            var categoriaServices = localStorage.getItem("ItemServices").toLowerCase();
            if (categoriaServices == "none") {
                document.querySelector("#categorias2 a").classList.add("select");
            }
            let listaTitle = [];
            const enlaces = document.querySelectorAll('#categorias2 a');//original
            for (let i = 0; i < enlaces.length; i++) {
                textoitem = enlaces[i].textContent.toLowerCase().replace(/(\r\n|\n|\r| )/gm, "").trimStart().trimEnd();
                listaTitle.push(textoitem);
            }
            if (listaTitle.includes(categoriaServices)) {
                for (let y = 0; y < enlaces.length; y++) {
                    if (categoriaServices === enlaces[y].textContent.toLowerCase().replace(/(\r\n|\n|\r| )/gm, "").trimStart().trimEnd()) {
                        document.querySelector("#categorias2 a").classList.remove("select");
                        enlaces[y].classList.add('select')
                    }
                }
            }


            $('.item-category').hide();
            const categoryMain = document.querySelector('#categorias2 a.select').innerHTML;
            $(`.item-category.modulo-mas[data-categoria="${categoryMain}"]`).slice(0, 6).show(0);

            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');

                    var categoria = evento.target.innerHTML; /* para saber la categoria del menu donde estas*/
                    console.log(categoria);
                    $("#cargarMasModulo").attr("style", "display:flex;");
                    $(`.item-category`).not(`[data-categoria="${categoria}"]`).hide();
                    $(`.item-category.modulo-mas[data-categoria="${categoria}"]`).slice(0, 6).show(0);
                });
            });

            var nameCategory = $(`.item-category[data-categoria="${categoryMain}"]`).attr("data-categoria");
            console.log(nameCategory);
            localStorage.setItem('ItemCategory', `${nameCategory}`);
            var select = $(`#categoryPortfolio`)
            $("#categoryPortfolio").val(`${nameCategory}`)

            $("#cargarMasModulo").click(function (e) {
                e.preventDefault();
                const categoryMain2 = document.querySelector('#categorias2 a.select').innerHTML;
                $(`.modulo-mas[data-categoria="${categoryMain2}"]:hidden`).slice(0, 6).slideDown(0);
                if ($(`.modulo-mas[data-categoria="${categoryMain2}"]:hidden`).length == 0) {
                    $("#cargarMasModulo").attr("style", "display:none;");
                }
            });

        }
    },
    popUp: {
        init: function () {
            /* popup */
            document.addEventListener("click", (e) => {
                if (e.target.closest(".item-category")) {
                    togglePortfolioPopup();
                    document.body.classList.toggle("hide-scrolling");
                    portfolioItemDetails(e.target.parentElement);
                }
                if (e.target.closest(".btn-close")) {
                    document.body.classList.toggle("hide-scrolling");
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
                document.querySelector(".text-popup h4").innerHTML = portfolioItem.querySelector(".info h4").innerHTML;
                document.querySelector(".text-popup p").innerHTML = portfolioItem.querySelector(".info p").innerHTML;
                document.querySelector(".text-parrrafo p").innerHTML = portfolioItem.querySelector(".info-popup p").innerHTML;
                sliderImgs2 = portfolioItem.querySelectorAll(".imagenes img");
                fotos = [];
                for (let i = 0; i < sliderImgs2.length; i++) {
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
                            breakpoint: 501,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: true,
                            }
                        },
                    ]
                });
            }
        }
    },
    contador: {
        init: function () {
            
            const inicio = document.querySelectorAll('.card-info h3');
            const meta = document.querySelectorAll('.card-info .numero h4');

            const numero = inicio[0];
            const numero1 = meta[0].textContent;
            let cantidad = 0;
            let tiempo = setInterval(() => {
                cantidad += 9;
                numero.textContent = cantidad
                if (cantidad >= numero1) {
                    clearInterval(tiempo)
                    numero.textContent = numero1
                }
            }, 120)
            const numero2 = inicio[1]
            const numero3 = meta[1].textContent;
            let cantidad1 = 0;
            let tiempo1 = setInterval(() => {
                cantidad1 += 9;
                numero2.textContent = cantidad1
                if (cantidad1 >= numero3) {
                    clearInterval(tiempo1)
                    numero2.textContent = numero3
                }
            }, 2)
            const numero4 = inicio[2]
            const numero5 = meta[2].textContent;
            let cantidad2 = 0;
            let tiempo2 = setInterval(() => {
                cantidad2 += 9;
                numero4.textContent = cantidad2
                if (cantidad2 >= numero5) {
                    clearInterval(tiempo2)
                    numero4.textContent = numero5
                }
            }, 15);
        }
    },
    internaBtn: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".btn a")) {
                    const titleService = document.querySelector(".interna .content-title h1").textContent.toLowerCase().replace(/(\r\n|\n|\r| )/gm, "").trimStart().trimEnd();
                    localStorage.setItem('ItemServices', `${titleService}`);
                }
            })
        }
    },
    select: {
        init: function () {
            var select = document.getElementById('categoryPortfolio');
            var categoria2 = "";
            var categoriaServices = localStorage.getItem("ItemServices");
            var selection = document.getElementById("categoryPortfolio");
            // const options = selection.options[selection.selectedOptions].value;
            console.log(categoriaServices); 
            // console.log(options);    
            select.addEventListener('change', function () {
                var selectedOption = this.options[select.selectedIndex];
                var cateSelect = selectedOption.text.trimStart().trimEnd();
                categoria2 = cateSelect
                $("#cargarMasModulo").attr("style", "display:flex;");
                $(`.item-category`).not(`[data-categoria="${categoria2}"]`).hide();
                $(`.item-category.modulo-mas[data-categoria="${categoria2}"]`).slice(0, 6).show();
            });
            $("#cargarMasModulo").click(function () {                
                console.log(categoria2);
                $(`.modulo-mas[data-categoria="${categoria2}"]:hidden`).slice(0, 6).slideDown(0);
                if ($(`.modulo-mas[data-categoria="${categoria2}"]:hidden`).length == 0) {
                    $("#cargarMasModulo").attr("style", "display:none;");
                }
            });
        }
    },
    labelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formname")) {
                    document.querySelector(".formname").classList.add("focusin");
                } else {
                    document.querySelector(".formname").classList.remove("focusin");
                    nombre = document.getElementById('name').value;
                    if (!nombre) {
                        document.querySelector(".formname").classList.remove("ok");
                    } else {
                        document.querySelector(".formname").classList.add("ok");
                    }
                }
                if (e.target.closest(".formcorreo")) {
                    document.querySelector(".formcorreo").classList.add("focusin");
                } else {
                    document.querySelector(".formcorreo").classList.remove("focusin");
                    email = document.getElementById('email').value;
                    if (!email) {
                        document.querySelector(".formcorreo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcorreo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formasunto")) {
                    document.querySelector(".formasunto").classList.add("focusin");
                } else {
                    document.querySelector(".formasunto").classList.remove("focusin");
                    asunto = document.getElementById('asunto').value;
                    if (!asunto) {
                        document.querySelector(".formasunto").classList.remove("ok");
                    } else {
                        document.querySelector(".formasunto").classList.add("ok");
                    }
                }
                if (e.target.closest(".formtextarea")) {
                    document.querySelector(".formtextarea").classList.add("focusin");
                } else {
                    document.querySelector(".formtextarea").classList.remove("focusin");
                    textarea = document.getElementById('textarea').value;
                    if (!textarea) {
                        document.querySelector(".formtextarea").classList.remove("ok");
                    } else {
                        document.querySelector(".formtextarea").classList.add("ok");
                    }
                }
            })
        }
    }    
}

if ($('header').length > 0) {
    MyApp.scroll.init();
}
if ($('.slider ').length > 0) {
    MyApp.slider.init();
}
if ($('.sliderClientes ').length > 0) {
    MyApp.sliderClientes.init();
}
if ($('.category').length > 0) {
    MyApp.categorias.init();
    MyApp.popUp.init();
}
if ($('.proyectos ').length > 0) {
    MyApp.popUp.init();
}
if ($('.experiencias ').length > 0) {
    MyApp.contador.init();
}
if ($('.services-info ').length > 0) {
    MyApp.internaBtn.init();
}
if ($('.category form').length > 0) {
    MyApp.select.init();
}
if ($('.contacto-page ').length > 0) {
    MyApp.labelcontactopage.init();
}

document.addEventListener("click", (e) => {
    if (e.target.closest("li a")) {
        localStorage.setItem('ItemServices', "none");
    }
})

$('.slider-home').slick({
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 1000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    ]
});

$('.slider-servicios').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1601,
            settings: {
                slidesToShow: 3,/* 1.94 */
                slidesToScroll: 1,
            }
        },        
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
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


$('.slider-proyectos').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1601,
            settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1281,
            settings: {
                centerMode: true,
                centerPadding: '300px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1091,
            settings: {
                centerMode: true,
                centerPadding: '280px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1025,
            settings: {
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 953,
            settings: {
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                centerMode: true,
                centerPadding: '120px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 650,
            settings: {
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 601,
            settings: {
                centerMode: true,
                centerPadding: '120px',
                slidesToShow: 1,
                centerMode: false,
                dots: true,
            }
        }
    ]
});


