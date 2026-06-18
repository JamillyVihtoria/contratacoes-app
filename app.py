from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():

    setores = [
        "Meio Ambiente",
        "Segurança do Trabalho",
        "Gestão Integrada",
        "Saúde Ocupacional",
    ]

    return render_template(
        "index.html",
        setores=setores
    )


@app.route("/contratos")
def contratos():

    setor = request.args.get("setor")

    contratos = [
        {
            "processo": "2025.110215.12000",
            "nome": "Coleta de Resíduos",
            "fluxo": "licitatorio"
        },
        {
            "processo": "2025.110215.13000",
            "nome": "Limpeza Hospitalar",
            "fluxo": "aditivos"
        }
    ]

    return render_template(
        "contratos.html",
        setor=setor,
        contratos=contratos
    )


@app.route("/contrato/<processo>")
def contrato(processo):

    contrato = {
    "processo": processo,
    "nome": "Coleta de Resíduos",
    "fase_atual": "GGCONT"
    }

    fases = [
        {"nome": "GGSSMA", "status": "concluida"},
        {"nome": "Compras", "status": "concluida"},
        {"nome": "GGCONT", "status": "atual"},
        {"nome": "Contabilidade", "status": "futura"},
        {"nome": "Jurídico", "status": "futura"}
    ]
    return render_template(
        "contrato.html",
        contrato=contrato,
        fases=fases
    )


if __name__ == "__main__":
    app.run(debug=True)