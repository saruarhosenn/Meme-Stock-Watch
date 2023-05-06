(function ($) {
  "use strict";
  /* ====== Sidebar Header & Main Content Toggle Collapse JS ====== */
  $(".sidebar-collapse-btn").on("click", function () {
    $(".header-wrap").toggleClass("header-slide");
    $(".sidebar").toggleClass("sidebar-collapse");
    $(".main-content").toggleClass("main-content-slide");
  });

  /* ===== Open Notifications Card ===== */
  $(".header-notification").click(function () {
    $(".notification-card").toggleClass("notification-card-active");
  });

  $(document).on("click", function (e) {
    if (
      !(
        $(e.target).closest(".notification-card").length > 0 ||
        $(e.target).closest(".header-notification").length > 0
      )
    ) {
      $(".notification-card").removeClass("notification-card-active");
    }
  });

  /* ===== Open Post Comment Box ===== */
  $(".post-comment-box-wrap").hide();

  $(".post-card-footer-comment").on("click", function () {
    var commentBoxWrap = $(this)
      .closest(".post-card-footer")
      .next(".post-comment-box-wrap");
    commentBoxWrap.toggle();
    $(".post-comment-box-wrap").not(commentBoxWrap).hide();
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(
        ".post-comment-box-wrap, .post-card-footer-comment"
      ).length
    ) {
      $(".post-comment-box-wrap").hide();
    }
  });

  /* ===== Counter Up JS ===== */
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /* ===== Nice Select JS ===== */
  $(".mem-stock-select").niceSelect();
  $(".notification-select").niceSelect();
})(jQuery);
