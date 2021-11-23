// $ NAMESPACE:APPEND btoa: Method (arg)
namespace.btoa = function(arg) {
    return window.btoa(unescape(encodeURIComponent(arg)));
}
// $ NAMESPACE:APPEND atob: Method (arg)
namespace.atob = function(arg) {
    return decodeURIComponent(escape(window.atob(arg)));
}
// $ NAMESPACE:APPEND bootstrap: Method (void)
namespace.bootstrap = function() {
    if (applicationConfig.useBootstrappedLayout) {document.getElementsByTagName('html')[0].style.height="100%";
    document.getElementsByTagName('html')[0].style.margin="0";
    document.body.style.height="100%";
    document.body.style.margin="0";}
    document.title=applicationConfig.title;
}
// $ EXPOSE printf: Method (args[])
function printf(...args) {
    return console.log((applicationConfig.debug) ? `(DEBUG/LOG) [${new Date().toISOString()}]:` : '', ...args)
}
// $ EXPOSE $: Method (arg)
function $(arg) {
    const defineMatcher = /(define \w+ as \w+)/gi;
    if (defineMatcher.test(arg)) {
        const fname = arg.substr(7, 2);
        const val = arg.substr(13);
        return eval(`var ${fname} = ${val}`);
    }
}