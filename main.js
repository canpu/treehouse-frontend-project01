$(document).ready(function () {});

$(".section-toggle").click(function (event) {
  let $section = $(this).parent();

  $section.find(".section-content-wrapper:visible").delay(100).slideUp(500);
  $section.find(".section-content-wrapper:hidden").delay(100).slideDown(500);
});
