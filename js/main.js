
document.addEventListener("click", (e) => {
    if (e.target.closest(".formmotivo select")) {
        document.querySelector(".formmotivo").classList.add("open");
    }else{
        document.querySelector(".formmotivo").classList.remove("open");
    }       

    if (e.target.closest(".formasunto select")) {
        document.querySelector(".formasunto").classList.add("open");
    }else{
        document.querySelector(".formasunto").classList.remove("open");
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
    labelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formname")) {
                    document.querySelector(".formname").classList.add("focusin");
                    document.querySelector(".formname span").classList.add("animacion");
                } else {
                    document.querySelector(".formname").classList.remove("focusin");
                    nombre = document.getElementById('name').value;
                    document.querySelector(".formname span").classList.remove("animacion");
                    if (!nombre) {
                        document.querySelector(".formname").classList.remove("ok");
                    } else {
                        document.querySelector(".formname").classList.add("ok");
                    }
                }                
                if (e.target.closest(".formcorreo")) {
                    document.querySelector(".formcorreo").classList.add("focusin");
                    document.querySelector(".formcorreo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcorreo").classList.remove("focusin");
                    asunto = document.getElementById('email').value;
                    document.querySelector(".formcorreo span").classList.remove("animacion");
                    if (!asunto) {
                        document.querySelector(".formcorreo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcorreo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formtel")) {
                    document.querySelector(".formtel").classList.add("focusin");
                    document.querySelector(".formtel span").classList.add("animacion");
                } else {
                    document.querySelector(".formtel").classList.remove("focusin");
                    textarea = document.getElementById('telephone').value;
                    document.querySelector(".formtel span").classList.remove("animacion");
                    if (!textarea) {
                        document.querySelector(".formtel").classList.remove("ok");
                    } else {
                        document.querySelector(".formtel").classList.add("ok");
                    }
                }
                if (e.target.closest(".formaempresa")) {
                    document.querySelector(".formaempresa").classList.add("focusin");
                    document.querySelector(".formaempresa span").classList.add("animacion");
                } else {
                    document.querySelector(".formaempresa").classList.remove("focusin");
                    email = document.getElementById('name-empresa').value;
                    document.querySelector(".formaempresa span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formaempresa").classList.remove("ok");
                    } else {
                        document.querySelector(".formaempresa").classList.add("ok");
                    }
                }
            })
        }
    },
    trabajolabelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formname")) {
                    document.querySelector(".formname").classList.add("focusin");
                    document.querySelector(".formname span").classList.add("animacion");
                } else {
                    document.querySelector(".formname").classList.remove("focusin");
                    nombre = document.getElementById('name').value;
                    document.querySelector(".formname span").classList.remove("animacion");
                    if (!nombre) {
                        document.querySelector(".formname").classList.remove("ok");
                    } else {
                        document.querySelector(".formname").classList.add("ok");
                    }
                }                
                if (e.target.closest(".formcorreo")) {
                    document.querySelector(".formcorreo").classList.add("focusin");
                    document.querySelector(".formcorreo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcorreo").classList.remove("focusin");
                    asunto = document.getElementById('email').value;
                    document.querySelector(".formcorreo span").classList.remove("animacion");
                    if (!asunto) {
                        document.querySelector(".formcorreo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcorreo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formtel")) {
                    document.querySelector(".formtel").classList.add("focusin");
                    document.querySelector(".formtel span").classList.add("animacion");
                } else {
                    document.querySelector(".formtel").classList.remove("focusin");
                    textarea = document.getElementById('telephone').value;
                    document.querySelector(".formtel span").classList.remove("animacion");
                    if (!textarea) {
                        document.querySelector(".formtel").classList.remove("ok");
                    } else {
                        document.querySelector(".formtel").classList.add("ok");
                    }
                }
                if (e.target.closest(".formmensaje")) {
                    document.querySelector(".formmensaje").classList.add("focusin");
                    document.querySelector(".formmensaje span").classList.add("animacion");
                } else {
                    document.querySelector(".formmensaje").classList.remove("focusin");
                    email = document.getElementById('mensaje').value;
                    document.querySelector(".formmensaje span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formmensaje").classList.remove("ok");
                    } else {
                        document.querySelector(".formmensaje").classList.add("ok");
                    }
                }
            })
        }
    },
    contactpagelabelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formname")) {
                    document.querySelector(".formname").classList.add("focusin");
                    document.querySelector(".formname span").classList.add("animacion");
                } else {
                    document.querySelector(".formname").classList.remove("focusin");
                    nombre = document.getElementById('name').value;
                    document.querySelector(".formname span").classList.remove("animacion");
                    if (!nombre) {
                        document.querySelector(".formname").classList.remove("ok");
                    } else {
                        document.querySelector(".formname").classList.add("ok");
                    }
                }     
                if (e.target.closest(".formaempresa")) {
                    document.querySelector(".formaempresa").classList.add("focusin");
                    document.querySelector(".formaempresa span").classList.add("animacion");
                } else {
                    document.querySelector(".formaempresa").classList.remove("focusin");
                    email = document.getElementById('name-empresa').value;
                    document.querySelector(".formaempresa span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formaempresa").classList.remove("ok");
                    } else {
                        document.querySelector(".formaempresa").classList.add("ok");
                    }
                } 
                if (e.target.closest(".formcargo")) {
                    document.querySelector(".formcargo").classList.add("focusin");
                    document.querySelector(".formcargo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcargo").classList.remove("focusin");
                    email = document.getElementById('cargo').value;
                    document.querySelector(".formcargo span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formcargo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcargo").classList.add("ok");
                    }
                }           
                if (e.target.closest(".formcorreo")) {
                    document.querySelector(".formcorreo").classList.add("focusin");
                    document.querySelector(".formcorreo span").classList.add("animacion");
                } else {
                    document.querySelector(".formcorreo").classList.remove("focusin");
                    asunto = document.getElementById('email').value;
                    document.querySelector(".formcorreo span").classList.remove("animacion");
                    if (!asunto) {
                        document.querySelector(".formcorreo").classList.remove("ok");
                    } else {
                        document.querySelector(".formcorreo").classList.add("ok");
                    }
                }
                if (e.target.closest(".formtel")) {
                    document.querySelector(".formtel").classList.add("focusin");
                    document.querySelector(".formtel span").classList.add("animacion");
                } else {
                    document.querySelector(".formtel").classList.remove("focusin");
                    textarea = document.getElementById('telephone').value;
                    document.querySelector(".formtel span").classList.remove("animacion");
                    if (!textarea) {
                        document.querySelector(".formtel").classList.remove("ok");
                    } else {
                        document.querySelector(".formtel").classList.add("ok");
                    }
                }
                if (e.target.closest(".formmensaje")) {
                    document.querySelector(".formmensaje").classList.add("focusin");
                    document.querySelector(".formmensaje span").classList.add("animacion");
                } else {
                    document.querySelector(".formmensaje").classList.remove("focusin");
                    email = document.getElementById('mensaje').value;
                    document.querySelector(".formmensaje span").classList.remove("animacion");
                    if (!email) {
                        document.querySelector(".formmensaje").classList.remove("ok");
                    } else {
                        document.querySelector(".formmensaje").classList.add("ok");
                    }
                }
            })
        }
    },
    footerlabelcontactopage: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".formemail")) {
                    document.querySelector(".formemail").classList.add("focusin");
                    // document.querySelector(".form-group span").classList.add("animacion");
                } else {
                    document.querySelector(".formemail").classList.remove("focusin");
                    email2 = document.getElementById('email2').value;
                    // document.querySelector(".form-group span").classList.remove("animacion");
                    if (!email2) {
                        document.querySelector(".formemail").classList.remove("ok");
                    } else {
                        document.querySelector(".formemail").classList.add("ok");
                    }
                }
            })
        }
    } ,
    category: {
        init: function () {
            document.querySelector("#categorias li a").classList.add("select");            
            $(`.destaado`).hide();
            const enlaces = document.querySelectorAll('#categorias a');//original
            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                    var categoria = evento.target.innerHTML; /* para saber la categoria del menu donde estas*/
                    console.log(categoria);
                    $(`.item`).not(`[data-categoria="${categoria}"]`).hide();
                    $(`.item[data-categoria="${categoria}"]`).show();
                    $(`.destaado`).hide();
                    if (categoria === "Todo") {
                        $(`.item`).show();  
                    }
                    if (categoria === "Caso de éxito") {
                        $(`.destaado`).show();  
                    }
                })
            })
        }
    },
    scrollRedes:{
        init: function () {
            $(document).ready(function (argument) {
                // AOS.init();
                if ($('.scroll').length > 0) {
                    $(".scroll").stick_in_parent({
                        offset_top: 180
                    });
                }   
            })
        }
    },
}

if ($('header').length > 0) {
    MyApp.scroll.init();
}

if ($('.home-servicios-interna').length > 0) {
    MyApp.labelcontactopage.init();
}

if ($('.trabajo').length > 0) {
    MyApp.trabajolabelcontactopage.init();
}

if ($('.contact-page').length > 0) {
    MyApp.contactpagelabelcontactopage.init();
}

if ($('footer .form-group').length > 0) {
    MyApp.footerlabelcontactopage.init();
}

if ($('.categorias').length > 0) {
    MyApp.category.init();
}

if ($('.main-article .redes').length > 0) {
    MyApp.scrollRedes.init();
}

$('.slider-novedades').slick({
    infinite: false,
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

$('.slider-competencias').slick({
    infinite: true,
    speed: 300,
    dots: false,
    autoplay: true,    
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
    speed: 30000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
});