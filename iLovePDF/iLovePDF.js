[rewrite_local]
^https:\/\/service\.ilovepdf\.com\/v1\/user$ url response-body "premium":.*?false, response-body "premium":true,
[mitm] 
hostname = service.ilovepdf.com
