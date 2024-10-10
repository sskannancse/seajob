let $grid = $(".all-jobs").isotope({
  layoutMode: "fitRows",
});

$(".job-menu ul").on("click", "li", function () {
  let filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

$(".job-menu ul").on("click", "li", function () {
  $(this).siblings(".active").removeClass("active");
  $(this).addClass("active");
});
