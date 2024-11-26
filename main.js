
const slides = document.querySelectorAll('.slider');
let currentSlide = 0;

$(document).ready(function() {
    $("#header-container").load("nav.html", function() {
        saveActiveLink();
    });

    $("#footer-container").load("footer.html", function() {
        saveActiveLink();
    });

    $("#assets-container").load("assets.html", function(){

    })

    function saveActiveLink() {
        const currentURL = window.location.href;
        $("nav ul li a").each(function() {
            if (currentURL.includes($(this).attr("href"))) {
                $("nav ul li a").removeClass("active"); // Xóa tất cả 'active'
                $(this).addClass("active"); // Thêm 'active' cho liên kết hiện tại
            }
        });
    }
});


function showNextSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
            slide.classList.add('active');
            slide.classList.remove('prev', 'next');
        } else if (idx === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
            slide.classList.remove('active', 'next');
        } else {
            slide.classList.add('next');
            slide.classList.remove('active', 'prev');
        }
    });
}

document.getElementById('prev').addEventListener('click', function() {
    showNextSlide(currentSlide - 1);
});

document.getElementById('next').addEventListener('click', function() {
    showNextSlide(currentSlide + 1);
});

setInterval(() => {
    showNextSlide(currentSlide + 1);
}, 10000);
