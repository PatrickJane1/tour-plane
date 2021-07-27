$(document).ready(function () {

    const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    console.log('Клик по кнопке меню');
    document.querySelector(".header-bottom").classList.toggle("header-bottom--visible");
  });
  
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function (){
    $(this).validate({
      errorClass: "invalid",
      messages: {
      name: {
        required: "Укажите имя",
        minlength: "Имя должно быть не короче двух букв",
      },
      email: {
        required: "Укажите ваш e-mail адресс",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Телефон обязателен",
      }
      },
    });
  });
  // jQuery Mask Input
  $(".phone").mask("+7(999) 999-9999");
  AOS.init();
});