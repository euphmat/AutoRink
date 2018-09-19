chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
        sendResponse({
            Data_workingtimes_from_hour:   localStorage[request.key1],
            Data_workingtimes_from_minute: localStorage[request.key2],
            Data_workingtimes_to_hour:     localStorage[request.key3],
            Data_workingtimes_to_minute:   localStorage[request.key4],
            Data_resttimes_from_hour:      localStorage[request.key5],
            Data_resttimes_from_minute:    localStorage[request.key6],
            Data_resttimes_to_hour:        localStorage[request.key7],
            Data_resttimes_to_minute:      localStorage[request.key8]
        });
    else
        sendResponse({});
});