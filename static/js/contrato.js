console.log("CONTRATO.JS CARREGADO");

let indiceAtual = obterFaseAtual();

function obterFaseAtual() {
    return fases.findIndex(f => f.status === "atual");
}

function abrirModal(){
    document.getElementById("modalFluxo").style.display = "flex";
}

function abrirModal(){
    document.getElementById("modalFluxo").style.display = "flex";
}

function fecharModal(){
    document.getElementById("modalFluxo").style.display = "none";
}

window.mostrarAvanco = function() {

    let atual = obterFaseAtual();

    let futuras = fases.slice(atual + 1);

    let html = `
        <h3>Selecione a próxima fase</h3>
    `;

    futuras.forEach(fase => {

        html += `
            <button onclick="selecionarNovaFase('${fase.nome}')">
                ${fase.nome}
            </button>
        `;
    });

    document.getElementById("opcoesFase").innerHTML = html;

    fecharModal();
}

window.mostrarRetorno = function() {

    let atual = obterFaseAtual();

    let anteriores = fases.slice(0, atual);

    let html = `
        <h3>Selecione a fase de retorno</h3>
    `;

    anteriores.forEach(fase => {

        html += `
            <button onclick="selecionarNovaFase('${fase.nome}')">
                ${fase.nome}
            </button>
        `;
    });

    document.getElementById("opcoesFase").innerHTML = html;

    fecharModal();
}

window.selecionarNovaFase = function(nomeFase){

    const novoIndice = fases.findIndex(
        f => f.nome === nomeFase
    );

    atualizarPipeline(
        novoIndice
    );

}

function atualizarPipeline(novoIndice){

    fases.forEach((fase, index) => {

        const bolinha = document.getElementById(
            `fase-${index}`
        );

        bolinha.classList.remove(
            "concluida",
            "atual",
            "futura"
        );

        if(index < novoIndice){

            bolinha.classList.add(
                "concluida"
            );

        }
        else if(index === novoIndice){

            bolinha.classList.add(
                "atual"
            );

        }
        else{

            bolinha.classList.add(
                "futura"
            );

        }

    });

    indiceAtual = novoIndice;
}