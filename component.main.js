applicationConfig.documentRoot = document.getElementById('root');
const OCMP = `<div style="height:100%;width:100%;display:flex;align-items:center;justify-content:center;">
    <div style="text-align:center;padding:20px;">
        <h1>Er föstudagur?</h1>
        <p>${(new Date().getDay() === 4) ? 'JÁ!' : 'NEI :('}</p>
        <div style="display:flex;justify-content:center;padding-top:15px;">
            ${namespace.atob("PGlmcmFtZSBzcmM9Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL2xpa2UucGhwP2hyZWY9aHR0cHMlM0ElMkYlMkZ3d3cuZXJmb3N0dWRhZ3VyLmNvbSUyRiZ3aWR0aD0xNTAmbGF5b3V0PWJ1dHRvbl9jb3VudCZhY3Rpb249bGlrZSZzaXplPXNtYWxsJnNoYXJlPXRydWUmaGVpZ2h0PTQ2JmFwcElkIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQ2IiBzdHlsZT0iYm9yZGVyOm5vbmU7b3ZlcmZsb3c6aGlkZGVuIiBzY3JvbGxpbmc9Im5vIiBmcmFtZWJvcmRlcj0iMCIgYWxsb3dmdWxsc2NyZWVuPSJ0cnVlIiBhbGxvdz0iYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZSI+PC9pZnJhbWU+")}
        </div>
    </div>
</div>`;

function runInitialRender() {
    applicationConfig.documentRoot.innerHTML = OCMP;
}

function runApplicationReRender() {
    applicationConfig.documentRoot.innerHTML = OCMP;
}