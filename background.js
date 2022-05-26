try{
    let tabURL
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.status = "completed" && tab.url != tabURL && tab.url.startsWith('http')){
            tabURL = tab.url
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                files: ['index.js'] 
            })
        }
    }
        // ,{urls:["*://m.youtube.com/*"]}
    )
}
catch(err){
    console.log(err)
}