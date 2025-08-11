var toggleBtn = document.querySelector("#toggleBtn");
var navBar = document.querySelector("header ul");
var navbarOverlay = document.querySelector(".navbar-overlay");
var header = document.querySelector("header")


toggleBtn.addEventListener(
    "click",
    function () {
        navBar.classList.toggle("openMenu");
        navbarOverlay.classList.add("done");
    }
)


navbarOverlay.addEventListener(
    "click",
    function () {
        navBar.classList.remove("openMenu");
        navbarOverlay.classList.remove("done");
    }
)


document.addEventListener(
    "scroll",
    function (e) {
        console.clear()

        if (window.scrollY > 40) {
            document.body.classList.add("sticky")
        } else {
            document.body.classList.remove("sticky")

        }

    }
)


$('.slick-container').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});