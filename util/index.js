const EC = require('elliptic').ec;
const cryptoHash = require('./crypto-hash');

const ec = new EC('ed25519');

const verifySignature = ({ publicKey, data, signature }) => {
  const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');

  return keyFromPublic.verify(cryptoHash(data), signature);
};

module.exports = { ec, verifySignature, cryptoHash };
