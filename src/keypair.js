// this generates a keypair - private & public key
const { generateKeyPairSync } = require("crypto");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // length of key in bits
  publicKeyEncoding: {
    type: "spki", // rec'ed by Node.js docs
    format: "pem", // PEM = privacy enhanced mail
  },
  privateKeyEncoding: {
    type: "pkcs8", // rec'd by Node.js docs
    format: "pem",
    // ciper: 'aes-256-cbc',
    // passphrase: 'secret'
  },
});

console.log(publicKey);
console.log(privateKey);

module.exports = {
  privateKey,
  publicKey,
};
