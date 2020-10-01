# 1. 生成私钥
openssl genrsa -out ssl.key 2048

# 2. 试用私钥生成证书
openssl req -new -key ssl.key -out ssl.csr

# 3. 自签名，生成私有证书，自签名的原理是用私钥对该私钥生成的证书请求进行签名，生成证书文件。该证书的签发者就是自己
openssl x509 -req -in ssl.csr -signkey ssl.key -out ssl.crt