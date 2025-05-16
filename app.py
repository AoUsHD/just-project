from flask import Flask, request, jsonify
from flask_cors import CORS
import socket
import whois

app = Flask(__name__)
CORS(app)

@app.route("/api/whois")
def whois_lookup():
    domain = request.args.get("domain", "")
    if not domain:
        return jsonify({"error": "Missing domain"}), 400
    try:
        w = whois.whois(domain)
        return jsonify(w)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/dns")
def dns_lookup():
    domain = request.args.get("domain", "")
    if not domain:
        return jsonify({"error": "Missing domain"}), 400
    try:
        result = socket.gethostbyname_ex(domain)
        return jsonify({
            "hostname": result[0],
            "aliases": result[1],
            "ip_addresses": result[2]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
