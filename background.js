try{
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        console.log(changeInfo)
        if(changeInfo.status = "completed" && tab.url.startsWith('https://m.youtube.com') || tab.url.startsWith('http://m.youtube.com')){
            console.log(changeInfo)
            console.log(tab.url)
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