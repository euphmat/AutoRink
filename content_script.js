//----------------------
$(function () {
    //疎通確認コード
    let flag = false;
    setInterval(function () {
        document.title = (flag ? "■" : "◆") + document.title.replace(/^[■◆]/, '');
        flag = !flag;
    }, 1000);

    $('select[name="workingtimes_from_hour"]').val("9");        //出退勤時刻_開始_時
    $('select[name="workingtimes_from_minute"]').val("30");     //出退勤時刻_開始_分

    $('select[name="workingtimes_to_hour"]').val("18");         //出退勤時刻_終了_時
    $('select[name="workingtimes_to_minute"]').val("30");       //出退勤時刻_終了_分


    $('select[name="resttimes_from_hour"]').val("12");          //休憩時刻_開始_時
    $('select[name="resttimes_from_minute"]').val("0");         //休憩時刻_開始_分

    $('select[name="resttimes_to_hour"]').val("13");            //休憩時刻_終了_時
    $('select[name="resttimes_to_minute"]').val("0");           //休憩時刻_終了_分

    //休憩時間アイテムを一旦削除する
    $('.selectitem:eq(0)').click();
    $('.formbtn.radius.del:eq(0)').click();

    //休憩時間アイテムを追加
    $('.formbtn.radius.add:eq(0)').click();

    //更新ボタン→確定ボタン押下処理
    $('.formsubmit.radius:eq(0)').click();
});