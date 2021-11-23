// $ NAMESPACE:APPEND btoa: Method (arg)
namespace.btoa = function(arg) {
    return window.btoa(unescape(encodeURIComponent(arg)));
}
// $ NAMESPACE:APPEND atob: Method (arg)
namespace.atob = function(arg) {
    return decodeURIComponent(escape(window.atob(arg)));
}
// $ EXPOSE printf: Method (args[])
function printf(...args) {
    return console.log((applicationConfig.debug) ? `(DEBUG/LOG) [${new Date().toISOString()}]:` : '', ...args)
}