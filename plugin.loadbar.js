namespace.plugins.loadBar = {
    config(options) {
        applicationConfig.documentRoot.innerHTML = `${applicationConfig.documentRoot.innerHTML}
        <div style="position:absolute;top:0;width:100%;z-index:500;"><div id="progressBarColour" style="height:${(options?.height) ? options.height : '3px'};background-color:${(options?.colour) ? options.colour : 'blue'};width:0%;transition:width 0.3s;"></div></div>`;
    }
}

perlin.subscribe('routeChanges', function() {
    document.getElementById('progressBarColour').style.width = "100%";
    setTimeout(function() {
        document.getElementById('progressBarColour').style.width = "0%";
    }, 200);
});