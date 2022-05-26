let tabURL
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(!changeInfo.status && tab.url != tabURL){
        tabURL = tab.url
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['index.js'] 
        })
    }
});