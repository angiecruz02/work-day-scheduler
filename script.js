$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var eventId = $(this).parent().attr("id");
    var eventDescription = $(this).siblings(".description").val();

    localStorage.setItem(eventId, eventDescription);
  });

  var currentHour = dayjs().format("H");
  var currentDate = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  $("#currentDay").text(currentDate);

  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function () {
    var eventId = $(this).attr("id");
    var eventDescription = localStorage.getItem(eventId);

    if (eventDescription !== null) {
      $(this).find(".description").val(eventDescription);
    }
  });
});