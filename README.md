# Just Project 🛠️

A lightweight open-source security utilities platform focused on learning and practical DevOps implementation.

---

## 🚀 Project Goal

This project is built by a DevOps and cybersecurity learner (Aous) to:

- Learn DevOps tools and pipelines through real use cases.
- Build and publish lightweight security tools as web APIs.
- Practice code structuring, containerization, CI/CD, and monitoring.
- Keep the entire stack **100% free and open-source**.

---

## 🧩 Current Features

### ✅ WHOIS Lookup
- Returns domain registrar, creation/expiration date, and name servers.

### ✅ DNS Lookup
- Fetches A, AAAA, NS, MX, TXT records for a given domain.

---

## 🛠️ Tech Stack

- **Backend:** Python (Flask)
- **Tools:** dnspython, python-whois
- **DevOps Goals:** Docker, GitHub Actions, Monitoring, Logging (upcoming)
- **Deployment:** Localhost → Then free hosting (e.g. Render, Railway)

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/just-project.git
cd just-project

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate    # on Windows

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
