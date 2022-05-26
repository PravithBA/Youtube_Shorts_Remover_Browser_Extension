try{
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.status = "completed" && tab.url.startsWith('https://m.youtube.com') || tab.url.startsWith('http://m.youtube.com')){
            console.log("+++++++++++++++++++++++++++++++++++")
            console.log(tab.url)
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                files: ['index.js']
            },(res)=>console.log(res))
            console.log("+++++++++++++++++++++++++++++++++++")
        }
        console.log('-----------------------------------')
    }
        // ,{urls:["*://m.youtube.com/*"]}
    )
}
catch(err){
    console.log(err)
}