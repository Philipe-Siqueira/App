import config from '../config/EnvironmentVariables';
const crypto = require("crypto-js");

const secret = config.SECRET;


// Encrypt
export const encrypt = (text: string) => crypto.AES.encrypt(text, secret).toString();

// Decrypt
export const decrypt = (text: string) => crypto.AES.decrypt(text, secret).toString(crypto.enc.Utf8);

