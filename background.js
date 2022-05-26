try{
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.status = "completed" && tab.url.startsWith('http')){
            console.log("fuck")
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