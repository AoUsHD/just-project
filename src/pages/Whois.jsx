import React, { useState } from "react";

export function Whois() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleLookup = async () => {
    setError("");
    setResult("");
    try {
      const res = await fetch(`/api/whois?domain=${domain}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        const highlighted = JSON.stringify(data, null, 2)
          .replace(/("domain_name":.*?)\n(.*?])/s, (m, p1, p2) =>
            `${p1}\n<span class="text-sky-400 font-semibold">${p2}</span>`
          )
          .replace(/("name_servers":.*?)\n(.*?])/s, (m, p1, p2) =>
            `${p1}\n<span class="text-sky-500 font-semibold">${p2}</span>`
          )
          .replace(/("emails":.*?)\n(.*?])/s, (m, p1, p2) =>
            `${p1}\n<span class="text-sky-500 font-semibold">${p2}</span>`
          )
          .replace(/("registrar":.*?)\n(.*?)(\n|,)/s, (m, p1, p2, p3) =>
            `${p1}\n<span class="text-sky-400 font-medium">${p2}</span>${p3}`
          )
          .replace(/("expiration_date":.*?)\n(.*?])/s, (m, p1, p2) =>
            `${p1}\n<span class="text-sky-400">${p2}</span>`
          )
          .replace(/("creation_date":.*?)\n(.*?])/s, (m, p1, p2) =>
            `${p1}\n<span class="text-sky-400">${p2}</span>`
          );

        setResult(highlighted);
      }
    } catch (err) {
      setError("Failed to fetch WHOIS data.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">WHOIS Lookup</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter domain (e.g., google.com)"
          className="flex-grow border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button
          onClick={handleLookup}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Lookup
        </button>
      </div>

      {error && (
        <div className="bg-red-100 text-red-800 p-4 rounded shadow mb-4">
          {error}
        </div>
      )}

      {result && (
        <div
          className="border rounded bg-white p-4 max-h-96 overflow-y-auto whitespace-pre-wrap text-sm shadow leading-relaxed"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      )}
    </div>
  );
}
