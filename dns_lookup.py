import dns.resolver

def perform_dns_lookup(domain):
    try:
        result = {}
        record_types = ["A", "AAAA", "NS", "MX", "TXT"]
        for record in record_types:
            try:
                answers = dns.resolver.resolve(domain, record)
                result[record] = [str(rdata) for rdata in answers]
            except dns.resolver.NoAnswer:
                result[record] = []
            except dns.resolver.NXDOMAIN:
                return {"error": f"Domain '{domain}' does not exist"}
        return result
    except Exception as e:
        return {"error": str(e)}
