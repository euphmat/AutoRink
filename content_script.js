$(function () {
    chrome.runtime.sendMessage({
        method: "getLocalStorage",
        key1: 'workingtimes_from_hour',
        key2: 'workingtimes_from_minute',
        key3: 'workingtimes_to_hour',
        key4: 'workingtimes_to_minute',
        key5: 'resttimes_from_hour',
        key6: 'resttimes_from_minute',
        key7: 'resttimes_to_hour',
        key8: 'resttimes_to_minute'

    }, function (response) {
        //ローカルストレージから設定した時刻を取得
        $('select[name="workingtimes_from_hour"]').val(response.Data_workingtimes_from_hour); //出勤時刻_時
        $('select[name="workingtimes_from_minute"]').val(response.Data_workingtimes_from_minute); //出勤時刻_分
        $('select[name="workingtimes_to_hour"]').val(response.Data_workingtimes_to_hour); //退勤時刻_時
        $('select[name="workingtimes_to_minute"]').val(response.Data_workingtimes_to_minute); //退勤時刻_分
        $('select[name="resttimes_from_hour"]').val(response.Data_resttimes_from_hour); //休憩開始_時
        $('select[name="resttimes_from_minute"]').val(response.Data_resttimes_from_minute); //休憩開始_分
        $('select[name="resttimes_to_hour"]').val(response.Data_resttimes_to_hour); //休憩終了_時
        $('select[name="resttimes_to_minute"]').val(response.Data_resttimes_to_minute); //休憩終了_分

        //入力済みの日付にアクセスした際、休憩時間が重複しないように一旦削除する
        $('.selectitem:eq(0)').click();
        $('.formbtn.radius.del:eq(0)').click();

        //休憩時間アイテムを追加
        $('.formbtn.radius.add:eq(0)').click();

        //更新ボタン→確定ボタン押下処理
        //$('.formsubmit.radius:eq(0)').click();
    });
});