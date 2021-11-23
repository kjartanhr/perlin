namespace.btoa = function(arg) {
    return window.btoa(unescape(encodeURIComponent(arg)));
}
namespace.atob = function(arg) {
    return decodeURIComponent(escape(window.atob(arg)));
}