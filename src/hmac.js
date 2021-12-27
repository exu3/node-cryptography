const { createHmac } = require("crypto");

const key = "secret";
const message = "wahoo";

const hmac = createHmac("sha256", key).update(message).digest("hex");

console.log(hmac);

const key2 = "hooray";
const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

console.log(hmac2);

// different hash is generated depending on the key that's used
