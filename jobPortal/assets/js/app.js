AOS.init();

new WOW().init();

const select = $("select");
// $(document).ready(function () {
if (select.length > 0) {
  $("select").niceSelect();
}
// });

const topFixed = $(".navBar-section");
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    topFixed.addClass("animated fadeInDown fixed-top");
  } else {
    topFixed.removeClass("animated fadeInDown fixed-top");
  }
});

$(document).ready(function () {
  let owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 24,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      992: {
        items: 6,
      },
    },
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".scrtop").fadeIn();
  } else {
    $(".scrtop").fadeOut();
  }
});

$(".scrtop").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

// @TODO:
// custom dropdown  manue here
const mobileSize = window.matchMedia("(max-width: 992px)");

function handleMediaScreeen(e) {
  if (e.matches) {
    $(".sub").addClass("dropdown-menu");
    $(".dropdown").removeClass("show-dropdown");
    $(".sub").removeClass("sub-menu");

    $(".dropdown-menu")
      .parent("li")
      .click(function (e) {
        if (e.target.className !== "dropdown-item") {
          $(this).find(">.dropdown-menu").toggle(300);
          e.preventDefault();
          e.stopPropagation();
        }
      });
  } else {
    $(".dropdown-menu").parent("li").off("click");
    $("sub-dropdown").off("click");

    $(".dropdown-menu").hide();
    $(".dropdown").addClass("show-dropdown");
    $(".sub").addClass("sub-menu");
    $(".sub").removeClass("dropdown-menu");
  }
}

handleMediaScreeen(mobileSize);

mobileSize.addEventListener("change", handleMediaScreeen);
