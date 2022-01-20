var admin = require("firebase-admin")

var serviceAccount = require("../../config/FirebaseConfig.json")

const Bucket = "teste-javascript-2062a.appspot.com"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: Bucket
})

const storage = admin.storage().bucket()

module.exports = storage