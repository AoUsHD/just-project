import whois
from datetime import datetime

def safe_convert_date(value):
    if isinstance(value, list):
        return [str(v) if isinstance(v, datetime) else v for v in value]
    if isinstance(value, datetime):
        return str(value)
    return value

def perform_whois(domain):
    try:
        result = whois.whois(domain)
        return {
            "domain_name": result.domain_name,
            "registrar": result.registrar,
            "creation_date": safe_convert_date(result.creation_date),
            "expiration_date": safe_convert_date(result.expiration_date),
            "name_servers": result.name_servers,
            "status": result.status
        }
    except Exception as e:
        print("🔴 WHOIS Error:", e)
        return {"error": str(e)}
