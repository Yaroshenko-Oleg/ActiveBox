$(function () {
  /* fixed headder*/

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  chekScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

    chekScroll(scrollPos, introH);
  });

  function chekScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* smooth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    console.log(elementId);

    $("html , body").animate(
      {
        scrollTop: elementOffset - 55,
      },
      700
    );
  });

  /* Nav toggle */

  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });

  /* reviews https://kenwheeler.github.io/slick/ */

  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});
