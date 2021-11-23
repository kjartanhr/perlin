(function(){
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('$xss')) return document.write(urlParams.get('$xss'));
})();

let namespace = {};
let perlin = {
    state: {},
    setState(key, value) {
        perlin.state[key] = value;
        if (typeof runApplicationReRender === undefined) {
            throw Error('Cannot re-render application before initialisation.');
        } else runApplicationReRender()
    }
};

(function(){
    const ns = document.getElementsByTagName('namespace')[0];
    const nsUsing = ns.getElementsByTagName('using')[0];
    const nsDefer = ns.getElementsByTagName('defer')[0];

    if (nsDefer && nsDefer.innerText == "IE/*") () => {
        if (window.document.documentMode) () => {
            alert('applicationDeferError: Your browser does not support this application.');
            throw Error('Your browser does not support this application.')
        }
    }

    if (nsUsing && nsUsing.innerText == "encodedApplication") perlin.encode = function(e) {
        const arr = e.split('');
        let r = '';
        arr.map(e => {
            if (typeof e == Number) r = `${r}$NUM:${e}`;
            if (typeof e == String) r = `${r}$STR:${e}`;
            else r = `${r}$${(typeof e).toUpperCase()}:${e}`
        });
        return r;
    }
    if (nsUsing && nsUsing.innerText == "encodedApplication") perlin.decode = function(e) {
        const regex = /(\$\w+\:)/g;
        const arr = e.split(regex);
        let r = '';
        arr.map(e => {
            if (!regex.test(e)) r = `${r}${e}`;
        });
        return r;
    }
})();