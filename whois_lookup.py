import whois

def perform_whois(domain):
    try:
        result = whois.whois(domain)
        return {
            "domain_name": result.domain_name,
            "registrar": result.registrar,
            "creation_date": str(result.creation_date),
            "expiration_date": str(result.expiration_date),
            "name_servers": result.name_servers,
            "status": result.status
        }
    except Exception as e:
        return {"error": str(e)}
