$(function () {

    $('select[name="workingtimes_from_hour"]').val("9");        //出勤時刻_時
    $('select[name="workingtimes_from_minute"]').val("30");     //出勤時刻_分

    $('select[name="workingtimes_to_hour"]').val("18");         //退勤時刻_時
    $('select[name="workingtimes_to_minute"]').val("30");       //退勤時刻_分


    $('select[name="resttimes_from_hour"]').val("12");          //休憩開始_時
    $('select[name="resttimes_from_minute"]').val("0");         //休憩開始_分

    $('select[name="resttimes_to_hour"]').val("13");            //休憩終了_時
    $('select[name="resttimes_to_minute"]').val("0");           //休憩終了_分

    //入力済みの日付にアクセスした際、休憩時間が重複しないように一旦削除する
    $('.selectitem:eq(0)').click();
    $('.formbtn.radius.del:eq(0)').click();

    //休憩時間アイテムを追加
    $('.formbtn.radius.add:eq(0)').click();

    //更新ボタン→確定ボタン押下処理
    //$('.formsubmit.radius:eq(0)').click();
});

