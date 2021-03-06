try{
document.querySelector("#app > ytm-pivot-bar-renderer > ytm-pivot-bar-item-renderer:nth-child(2)").setAttribute('style','display:none')
document.querySelector('ytm-pivot-bar-renderer').setAttribute('style','display:gridgrid-auto-flow:columnplace-items:center')}
catch(err){}
window.onload = main()
function main(){
    setTimeout(()=>{
        if(!document.querySelector("lazy-list > ytm-item-section-renderer:nth-child(1) > lazy-list"))
            return
        let firstSection = Array.from(document.querySelector("lazy-list > ytm-item-section-renderer:nth-child(1) > lazy-list").children)
        firstSection.forEach(e=>{
            deleteShorts(e)
            console.log(e)
        })
        if(!document.querySelector("lazy-list"))
            return
        document.querySelector("lazy-list").addEventListener('DOMNodeInserted',(e,f)=>{
            deleteShortsNew(e)
        })
    },1000)
}
function deleteShortsNew(e){
    if(e.relatedNode.nodeName == 'YTM-ITEM-SECTION-RENDERER'){
        e.relatedNode.addEventListener('DOMNodeInserted',(ee)=>{
            if(ee.relatedNode.nodeName == 'YTM-COMPACT-VIDEO-RENDERER')
                ee.relatedNode.addEventListener('DOMNodeInserted',(eee)=>{
                    if(eee.relatedNode.tagName == "A" && eee.relatedNode.href.includes('shorts')){
                        ee.relatedNode.setAttribute('style','display:none')
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
                    e.setAttribute('style','display:none')
                }
            })
        })
    }
}

