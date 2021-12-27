const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

// cipher

const message = "toitle";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

// encrypt

const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

console.log("encrypted: " + encryptedMessage);

const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf8");

console.log(`deciphered: ${decryptedMessage.toString("utf-8")}`);
