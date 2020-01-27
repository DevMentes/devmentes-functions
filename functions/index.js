const functions = require("firebase-functions");
const postsApi = require("./posts/app");
const writersApi = require("./writers/app");

exports.postsApi = functions.https.onRequest(postsApi);
exports.writersApi = functions.https.onRequest(writersApi);
