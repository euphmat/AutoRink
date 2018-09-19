$(function(){
  //起動時にLocalStrageの値をテキストボックスへ格納
  $("#workingtimes_from_hour")  .val(localStorage.getItem('workingtimes_from_hour'));
  $("#workingtimes_from_minute").val(localStorage.getItem('workingtimes_from_minute'));
  $("#workingtimes_to_hour")    .val(localStorage.getItem('workingtimes_to_hour'));
  $("#workingtimes_to_minute")  .val(localStorage.getItem('workingtimes_to_minute'));
  $("#resttimes_from_hour")     .val(localStorage.getItem('resttimes_from_hour'));
  $("#resttimes_from_minute")   .val(localStorage.getItem('resttimes_from_minute'));
  $("#resttimes_to_hour")       .val(localStorage.getItem('resttimes_to_hour'));
  $("#resttimes_to_minute")     .val(localStorage.getItem('resttimes_to_minute'));

  //保存ボタン
  $("#save").click(function () {
    localStorage.setItem('workingtimes_from_hour',   $("#workingtimes_from_hour").val());
    localStorage.setItem('workingtimes_from_minute', $("#workingtimes_from_minute").val());
    localStorage.setItem('workingtimes_to_hour',     $("#workingtimes_to_hour").val());
    localStorage.setItem('workingtimes_to_minute',   $("#workingtimes_to_minute").val());
    localStorage.setItem('resttimes_from_hour',      $("#resttimes_from_hour").val());
    localStorage.setItem('resttimes_from_minute',    $("#resttimes_from_minute").val());
    localStorage.setItem('resttimes_to_hour',        $("#resttimes_to_hour").val());
    localStorage.setItem('resttimes_to_minute',      $("#resttimes_to_minute").val());
  });
});