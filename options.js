$(function(){
  //保存
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