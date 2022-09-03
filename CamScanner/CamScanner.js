
[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/hojioM/QuantumultX/main/CamScanner/CamScanner.js
[mitm]
hostname = ap*.intsig.net

let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1687017600"}}};
$done({body: JSON.stringify(obj)});
