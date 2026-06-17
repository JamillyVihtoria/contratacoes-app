from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    setores = [
        "Meio Ambiente",
        "Saúde",
        "Educação"
    ]

    return render_template(
        "index.html",
        setores=setores
    )

if __name__ == "__main__":
    app.run(debug=True)