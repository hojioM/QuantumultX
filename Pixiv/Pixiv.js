/*
[rewrite_local]
^https://oauth.secure.pixiv.net/auth/token url script-response-body https://raw.githubusercontent.com/hojioM/QuantumultX/main/Pixiv/Pixiv.js
[mitm]
hostname=oauth.secure.pixiv.net
*/
let body = $response.body;
body = JSON.parse(body);
if (body?.response) {
  body.response = body.response || {};
  body.response.user = body.response.user || {};
  body.response.user.is_premium = true;
}
if (body?.user) {
  body.user = body.user || {};
  body.user.is_premium = true;
}
body = JSON.stringify(body);

$done({ body })
