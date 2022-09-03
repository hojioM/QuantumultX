[mitm]
hostname = *.cloudfront.net
[rewrite_local]
^https:?\/\/.*\.cloudfront\.net\/api\/clients\/info url script-response-body https://raw.githubusercontent.com/hojioM/QuantumultX/main/VpnPrime/VpnPrime.js
^https:?\/\/.*\.cloudfront\.net\/api\/purchases\/validate url script-response-body https://raw.githubusercontent.com/hojioM/QuantumultX/main/VpnPrime/VpnPrime.js

let obj = JSON.parse($response.body);
obj["expiration_time"] = 4101790766;
$done({body: JSON.stringify(obj)});
