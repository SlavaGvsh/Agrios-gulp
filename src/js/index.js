// // Галерея и лайтбоксы от Fancybox

// // Мобильная навигация
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
// function loadHTML(id, url) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           document.getElementById(id).innerHTML = this.responseText;
//       }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }

// document.addEventListener("DOMContentLoaded", function() {
//   loadHTML("header", "header.html");
//   loadHTML("footer", "footer.html");
// });

//  tabs
$(".contact__item > a").click(function(e) {
  e.preventDefault();

  var currentAttrValue = $(this).attr("href");

  console.log(currentAttrValue);

  //    // Показываем содержимое вкладки
  $(".contact__body").removeClass("active");
  $(currentAttrValue).addClass("active");

  // Делаем текущую вкладку активной
  $(".contact__item > a").removeClass("active");
  $(this).addClass("active");
});
// });

$(document).ready(function() {
  $(".burger-menu, .burger-menu-close").click(function(event) {
    $(".nav,.burger-menu-close, .burger-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  showDrop();

  $(window).resize(function() {
    showDrop();
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(".nav__list").length) {
      // Если клик произошел не внутри .nav__menu, скрываем все открытые дропдауны
      $(".nav__item").removeClass("active");
    }
  });
});

function showDrop() {
  var screenWidth = $(window).width();
  console.log(screenWidth);
  if (screenWidth < 900) {
    $(".nav__link").click(function(event) {
      $(".nav__item")
        .not($(this).parent())
        .removeClass("active");
      $(this)
        .parent(".nav__item")
        .toggleClass("active");

      event.stopPropagation();
    });
  } else {
    $(".nav__item").removeClass("active");
  }
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import $ from "jquery";

$(document).ready(function() {
  $(".promo-carousel").owlCarousel({
    items: 1,
    // margin: 10,
    autoHeight: true,
    dots: false,
    nav: true,
    navText: false,
    autoplaySpeed: 1000,
    autoplay: true,
    slideSpeed: 2000,
  });

  $(".reviews-carousel").owlCarousel({
    items: 1,
    // margin: 10,
    autoHeight: true,
    dots: false,
    nav: true,
    navText: false,
    autoplaySpeed: 3000,
    autoplay: true,
    slideSpeed: 3000,
  });

  $(".services-carousel").owlCarousel({
    items: 5,
    // margin: 10,
    autoHeight: true,
    dots: false,
    nav: false,
    navText: false,
    autoplaySpeed: 5000,
    autoplay: true,
    slideSpeed: 4000,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

$(document).ready(function() {
  $(".star").on("click", function() {
    var rating = parseInt($(this).attr("data-rating"));

    // Очищаем все звезды
    $(".star").removeClass("active");

    // Отмечаем выбранное количество звезд
    for (var i = 1; i <= rating; i++) {
      $('.star[data-rating="' + i + '"]').addClass("active");
    }

    // // Здесь можно отправить данные оценки на сервер или выполнить другие действия
    // console.log('Оценка: ' + rating);
  });
});

$(document).ready(function() {
  $("#show-more").on("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки
    $(".reviews__item.hidden")
      .slice(0, 6)
      .removeClass("hidden");

    // Если больше нет скрытых отзывов, скрыть кнопку
    if ($(".reviews__item.hidden").length === 0) {
      $("#show-more").hide();
    }
  });
});

// // agriculture-products

$(document).ready(function() {
  const $links = $(".sidebar__link");
  const $contents = $(".agro-prod__content");

  $links.on("click", function(event) {
    event.preventDefault();

    // Получаем целевой контент по data-target
    const targetId = $(this).data("target");
    const $targetContent = $("#" + targetId);

    // Скрываем все контенты
    $contents.removeClass("active");

    // Удаляем класс active у всех ссылок
    $links.removeClass("active");

    // Показываем целевой контент и добавляем класс active на кликнутую ссылку
    if ($targetContent.length) {
      $targetContent.addClass("active");
    }
    $(this).addClass("active");
  });

  // Показать первый контент и выделить первую ссылку по умолчанию
  if ($links.length > 0 && $contents.length > 0) {
    $links.first().addClass("active");
    $contents.first().addClass("active");
  }

  // accordion

  $(".accordion__header").on("click", function() {
    // Проверяем, если заголовок уже активен
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .next(".accordion__content")
        .removeClass("active");
    } else {
      // Закрываем все остальные активные заголовки и контенты
      $(".accordion__header").removeClass("active");
      $(".accordion__content").removeClass("active");

      // Открываем текущий заголовок и контент
      $(this).addClass("active");
      $(this)
        .next(".accordion__content")
        .addClass("active");
    }
  });
});

//pagination

$(document).ready(function() {
  var itemsPerPage = 3; // Количество элементов на одну страницу
  var $items = $(".blog__item"); // Выбор всех элементов блога
  var totalPages = Math.ceil($items.length / itemsPerPage); // Общее количество страниц

  // Функция для отображения определенной страницы
  function showPage(page) {
    $items.hide(); // Скрываем все элементы
    $items.slice((page - 1) * itemsPerPage, page * itemsPerPage).show(); // Показываем элементы текущей страницы

    // Обновляем активный класс на кнопках пагинации
    $(".pagination__link").removeClass("active");
    $(".pagination__link").each(function() {
      if ($(this).text() == page) {
        $(this).addClass("active");
      }
    });
  }

  // Инициализация первой страницы
  showPage(1);

  // Обработка кликов по кнопкам пагинации
  $(".pagination__link").click(function(e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    var page = $(this).text(); // Получаем номер страницы из текста ссылки
    var currentPage = parseInt($(".pagination__link.active").text()); // Текущая активная страница

    if (page === "«") {
      page = Math.max(1, currentPage - 1); // Переход на предыдущую страницу
    } else if (page === "»") {
      page = Math.min(totalPages, currentPage + 1); // Переход на следующую страницу
    } else {
      page = parseInt(page); // Преобразуем текст в число
    }

    showPage(page); // Отображаем выбранную страницу
  });
});
