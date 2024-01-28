document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    loop: true,
    autoplay: true,
  });

  document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        const downArrow = item.querySelector('.down-arrow');
        const upArrow = item.querySelector('.up-arrow');

        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.answer').style.display = 'none';
                    otherItem.querySelector('.up-arrow').style.display = 'none';
                    otherItem.querySelector('.down-arrow').style.display = 'block';
                }
            });

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
                upArrow.style.display = 'block';
                downArrow.style.display = 'none';
            } else {
                answer.style.display = 'none';
                upArrow.style.display = 'none';
                downArrow.style.display = 'block';
            }
        });
    });
});

// function toggleMenu() {
//     var menu = document.querySelector('.menu');
//     menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
// }
function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.classList.toggle('active'); 
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}

