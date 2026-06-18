function abrirModal(){
    document.getElementById("modalFluxo").style.display = "flex";
}

function fecharModal(){
    document.getElementById("modalFluxo").style.display = "none";
}

function mostrarAvanco(){

    document.getElementById("opcoesFase").innerHTML = `
        <h3>Selecione a próxima fase</h3>

        <button>Contabilidade</button>
        <button>Jurídico</button>
    `;

    fecharModal();
}

function mostrarRetorno(){

    document.getElementById("opcoesFase").innerHTML = `
        <h3>Selecione a fase de retorno</h3>

        <button>GGSSMA</button>
        <button>Compras</button>
    `;

    fecharModal();
}