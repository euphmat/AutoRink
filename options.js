$(function(){
    $("#save").click(function () {
      localStorage["message"] = $("#message").val();
      console.log("保存したよ");
    });
    
  });