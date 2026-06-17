from flask import Flask, render_template

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

if __name__ == "__main__":
    app.run(debug=True)