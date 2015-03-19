(function(){
    var links = document.getElementsByTagName('a')
    var len = links.length
    var i;
    for(i = 0; i < len; ++i) {
        if (links[i].target) {
            links[i].target = null
        }
    }
})()
