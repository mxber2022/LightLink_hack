



$(".xp__social__item").each(function (index) {
  $(this).on("click", function () {
    $(this).addClass("selected");
    $('.nav__xp__n').addClass("earnXp");
  });
});




var isOperationPerformed = {};


$(".xp__social__item").click(function () {

  var buttonId = $(this).index();


  if (!isOperationPerformed[buttonId]) {

    var currentValue = parseInt($(".nav__xp__n").text().replace("", ""));


    var newValue = currentValue + 5;

    $(".nav__xp__n").text("" + newValue);


    console.log("Button " + buttonId + " clicked.");

    isOperationPerformed[buttonId] = true;
  }
});
