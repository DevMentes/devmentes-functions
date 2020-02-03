const database = require("./../persistence/database");

const COLLECTION = "writers";

const byId = async id => {
  return await database.byId(id, COLLECTION);
};

const all = async () => {
  return await database.all(COLLECTION);
};

module.exports = {
  all,
  byId
};
