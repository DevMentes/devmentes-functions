const database = require("./../persistence/database");

const COLLECTION = "posts";

const all = async () => {
  return await database.all(COLLECTION);
};
const byId = async id => {
  return await database.byId(id, COLLECTION);
};

const byWriterId = async writerId => {
  return await database.findByAttribute("writer.id", writerId, COLLECTION);
};

module.exports = { all, byId, byWriterId };
