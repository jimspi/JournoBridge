from flask import Flask, render_template, request, jsonify
import os
import openai

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

def ask_gpt(prompt):
    resp = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role":"user","content": prompt}]
    )
    return resp.choices[0].message.content

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/skill", methods=["GET"])
def skill_page():
    return render_template("skill.html")

@app.route("/api/skill", methods=["POST"])
def skill_api():
    text = request.json.get("text","")
    prompt = (
        f"Convert this journalism experience into tailored bullet points for marketing, PR, etc.\n\n"
        f"Experience:\n{text}"
    )
    return jsonify({"result": ask_gpt(prompt)})

@app.route("/portfolio")
def portfolio_page():
    return render_template("portfolio.html")

@app.route("/api/portfolio", methods=["POST"])
def portfolio_api():
    clips = request.json.get("clips","")
    prompt = (
        "Turn these past clips into case-studies aligned with brand storytelling:\n\n"
        f"{clips}"
    )
    return jsonify({"result": ask_gpt(prompt)})

@app.route("/decoder")
def decoder_page():
    return render_template("decoder.html")

@app.route("/api/decoder", methods=["POST"])
def decoder_api():
    jd = request.json.get("jd","")
    prompt = (
        "Analyze this job description for fit, rewrite my resume section, "
        "and suggest networking intros:\n\n" + jd
    )
    return jsonify({"result": ask_gpt(prompt)})

if __name__ == "__main__":
    app.run(debug=True)
