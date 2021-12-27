const { createHash } = require("crypto");
// create string hash

function hash(input) {
  return createHash("sha256").update("input").digest("hex");
}

// compare 2 hashed pws

let password = "himom";
const hash1 = hash(password);
console.log(hash1);

password = "himom";
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? "good password" : "password no match");
