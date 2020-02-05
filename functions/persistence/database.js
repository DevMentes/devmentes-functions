const admin = require("firebase-admin");

const serviceAccount = require("./../key.json");
const config = require("./../config");
const errorFactory = require("../common/errorFactory");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.databaseUrl
});

const instance = admin.firestore();

const byId = async (id, collection) => {
  try {
    const snapshot = await instance
      .collection(collection)
      .doc(id)
      .get();

    if (!snapshot.exists) {
      throw errorFactory(
        `Resource of id ${id} does not exists on  ${collection}`,
        10001
      );
    }

    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  } catch (error) {
    throw error;
  }
};

const all = async collection => {
  try {
    const snapshot = await instance.collection(collection).get();
    return snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
  } catch (error) {
    throw error;
  }
};

const findByAttribute = async (attribute, value, collection) => {
  const snapshot = await instance
    .collection(collection)
    .where(attribute, "==", value)
    .get();
  return snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
};

module.exports = { instance, byId, all, findByAttribute };
