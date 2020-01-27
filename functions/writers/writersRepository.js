const byId = id => {
  return writers.find(writer => writer.id === id);
};

const all = () => {
  return writers;
};

module.exports = {
  all,
  byId
};

const writers = [
  {
    id: "asdadasdas",
    name: "McBolas",
    avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
    followers: 235,
    posts: 6
  }
];
