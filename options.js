$(function(){
  
  //保存
  $("#save").click(function () {
    alert("保存したよ");
    localStorage.setItem('workingtimes_from_hour', $("#workingtimes_from_hour").val());
    localStorage.setItem('workingtimes_from_minute', $("#workingtimes_from_minute").val());
    localStorage.setItem('workingtimes_to_hour', $("#workingtimes_to_hour").val());
    localStorage.setItem('workingtimes_to_minute', $("#workingtimes_to_minute").val());
    localStorage.setItem('resttimes_from_hour', $("#resttimes_from_hour").val());
    localStorage.setItem('resttimes_from_minute', $("#resttimes_from_minute").val());
    localStorage.setItem('resttimes_to_hour', $("#resttimes_to_hour").val());
    localStorage.setItem('resttimes_to_minute', $("#resttimes_to_minute").val());
  });

  //$("#load").click(function () {
    let workingtimes_from_hour = localStorage.getItem('workingtimes_from_hour');
    let workingtimes_from_minute = localStorage.getItem('workingtimes_from_minute');
    let workingtimes_to_hour = localStorage.getItem('workingtimes_to_hour');
    let workingtimes_to_minute = localStorage.getItem('workingtimes_to_minute');
    let resttimes_from_hour = localStorage.getItem('resttimes_from_hour');
    let resttimes_from_minute = localStorage.getItem('resttimes_from_minute');
    let resttimes_to_hour = localStorage.getItem('resttimes_to_hour');
    let resttimes_to_minute = localStorage.getItem('resttimes_to_minute');
  //});
});