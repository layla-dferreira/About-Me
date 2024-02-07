window.alert("Essa pagina é interativa");

function abrirFechar1() {
    const titulo = document.querySelector("#sobreMim");
    const estilo = document.querySelector("h1");
    const tituloVisibilidade = window.getComputedStyle(titulo).getPropertyValue('visibility');

    if (tituloVisibilidade == "hidden") {
        titulo.style.visibility = "visible";
        estilo.style.color = "#aae4e2";
        estilo.style.transition = "all 0.6s ease-out";
    } else {
        titulo.style.visibility = "hidden"; 
        estilo.style.color = "#64d4cf";
        estilo.style.transition = "all 0.4s ease-out";
    }
}

function abrirFechar2() {
    const titulo = document.querySelector("#candidatura");
    const estilo = document.querySelector("h2");
    const tituloVisibilidade = window.getComputedStyle(titulo).getPropertyValue('visibility');

    if (tituloVisibilidade == "hidden") {
        titulo.style.visibility = "visible"; 
        estilo.style.color = "#aae4e2";
        estilo.style.transition = "all 0.6s ease-out";
    } else {
        titulo.style.visibility = "hidden"; 
        estilo.style.color = "#64d4cf";
        estilo.style.transition = "all 0.4s ease-out";
    }
}

function abrirFechar3() {
    const titulo = document.querySelector("#expectativas");
    const estilo = document.querySelector("h3");
    const tituloVisibilidade = window.getComputedStyle(titulo).getPropertyValue('visibility');

    if (tituloVisibilidade == "hidden") {
        titulo.style.visibility = "visible"; 
        estilo.style.color = "#aae4e2";
        estilo.style.transition = "all 0.6s ease-out";
    } else {
        titulo.style.visibility = "hidden"; 
        estilo.style.color = "#64d4cf";
        estilo.style.transition = "all 0.4s ease-out";
    }
}