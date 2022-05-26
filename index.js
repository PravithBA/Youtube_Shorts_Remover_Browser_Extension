try{document.querySelector("#app > ytm-pivot-bar-renderer > ytm-pivot-bar-item-renderer:nth-child(2)").setAttribute('style','display:none;')
document.querySelector('ytm-pivot-bar-renderer').setAttribute('style','display:grid;grid-auto-flow:column;place-items:center;')}
catch(err){}
window.onload = function(){
    setTimeout(()=>{
        if(!document.querySelector("#app > div.page-container > ytm-search > ytm-section-list-renderer > lazy-list > ytm-item-section-renderer:nth-child(1) > lazy-list"))
            return
        let firstSection = Array.from(document.querySelector("#app > div.page-container > ytm-search > ytm-section-list-renderer > lazy-list > ytm-item-section-renderer:nth-child(1) > lazy-list").children)
        firstSection.forEach(e=>{
            deleteShorts(e)
        })
        if(!document.querySelector("#app > div.page-container > ytm-search > ytm-section-list-renderer > lazy-list"))
            return
        document.querySelector("#app > div.page-container > ytm-search > ytm-section-list-renderer > lazy-list").addEventListener('DOMNodeInserted',(e,f)=>{
            deleteShortsNew(e)
        })
        // history.pushState()
        // window.addEventListener('popstate', function (event) {
        //     // Log the state data to the console
        //     console.log(event.state);
        // });
    },1000)
}
function deleteShortsNew(e){
    if(e.relatedNode.nodeName == 'YTM-ITEM-SECTION-RENDERER'){
        e.relatedNode.addEventListener('DOMNodeInserted',(ee)=>{
            if(ee.relatedNode.nodeName == 'YTM-COMPACT-VIDEO-RENDERER')
                ee.relatedNode.addEventListener('DOMNodeInserted',(eee)=>{
                    if(eee.relatedNode.tagName == "A" && eee.relatedNode.href.includes('shorts')){
                        ee.relatedNode.setAttribute('style','display:none;')
                    }
                })
        })
    }
}
function deleteShorts(e){
    if(e.nodeName == 'YTM-COMPACT-VIDEO-RENDERER'){
        let vidElement = Array.from(e.children)
        vidElement.forEach((ee)=>{
            let aElement = Array.from(ee.children)
            aElement.forEach(eee=>{
                if(eee.tagName == "A" && eee.href.includes('shorts')){
                    e.setAttribute('style','display:none;')
                }
            })
        })
    }
}