$(document).ready(function() {
  $(".single-item").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="../img/left.jpg" class="slick-prev" alt="Previous">', // Зображення для кнопки "Назад"
    nextArrow: '<img src="../img/right.jpg" class="slick-next" alt="Next">' // Зображення для кнопки "Вперед"
  });
});
