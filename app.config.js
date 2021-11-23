const applicationConfig = {
    title: 'Er föstudagur?',
    useBootstrappedLayout: true,
    debug: false,
    async onApplicationLoad() {
        document.querySelectorAll('[data-self-destruct="1"]')[0].remove();
        document.querySelectorAll('[data-subscribe-to-load-updates="1"]').forEach(e => e.setAttribute('content', 'false'));
        window.localStorage.setItem('ua', navigator.userAgent);
        document.getElementsByTagName('head')[0].innerHTML = `${document.getElementsByTagName('head')[0].innerHTML}
        <link rel="preload" href="${namespace.atob("aHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXA=")}" as="style" />
        <style>@import url('${namespace.atob("aHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXA=")}'); * {font-family: 'Roboto Condensed', sans-serif;}</style>`;
    }
}