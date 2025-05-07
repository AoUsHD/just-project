from flask import Flask, request, jsonify
from whois_lookup import perform_whois
from dns_lookup import perform_dns_lookup  # ✅ NEW

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to just project WHOIS & DNS API"})

@app.route("/whois", methods=["GET"])
def whois_api():
    domain = request.args.get("domain")
    if not domain:
        return jsonify({"error": "Missing 'domain' parameter"}), 400

    result = perform_whois(domain)
    return jsonify(result)

@app.route("/dns", methods=["GET"])
def dns_api():
    domain = request.args.get("domain")
    if not domain:
        return jsonify({"error": "Missing 'domain' parameter"}), 400

    result = perform_dns_lookup(domain)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
