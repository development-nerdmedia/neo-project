
document.addEventListener("click", (e) => {
    if (e.target.closest(".items-category")) {
        portfolioItemDetails2(e.target.parentElement);
    }
})

function portfolioItemDetails2(portfolioItem) {
    console.log("asd");
    sliderImgs2 = portfolioItem.querySelectorAll(".imagenes img");
    for (let i = 0; i < sliderImgs2.length; i++) {
        console.log(sliderImgs2[i]);
        const sliderFotos2 = document.querySelector(".slider-fotos");
        const item2 = document.createElement("div");
        item2.setAttribute("class", "item-foto")
        item2.appendChild(sliderImgs2[i])
        sliderFotos2.appendChild(item2);
    }


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