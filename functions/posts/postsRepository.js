const all = () => {
  return posts;
};
const byId = id => {
  return posts.find(post => post.id === id);
};

const byWriterId = writerId => {
  return posts.filter(post => post.writer.id === writerId);
};

module.exports = { all, byId, byWriterId };

const posts = [
  {
    id: "asdasfcav",
    title: "Mi primer post",
    thumbnail:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    cover:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    excerpt:
      "Este es el extracto de mi primer post, sirve para llamar la atención de los lectores, se supone que con esto haga saber de qué tratará mi post, y que tiene de interesante para leer.",
    writer: {
      id: "asdadasdas",
      name: "McBolas",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    },
    createdAt: "2020-01-26 05:55:04.224856"
  },
  {
    id: "asfafafe",
    title: "Mi segundo post",
    thumbnail:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    cover:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    excerpt:
      "Este es el extracto de mi primer post, sirve para llamar la atención de los lectores, se supone que con esto haga saber de qué tratará mi post, y que tiene de interesante para leer.",
    writer: {
      id: "asdadasdas",
      name: "McBolas",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    },
    createdAt: "2020-01-26 05:55:04.224856"
  },
  {
    id: "afsvafe",
    title: "Mi tercer post",
    thumbnail:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    cover:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    excerpt:
      "Este es el extracto de mi primer post, sirve para llamar la atención de los lectores, se supone que con esto haga saber de qué tratará mi post, y que tiene de interesante para leer.",
    writer: {
      id: "asdadasdas",
      name: "McBolas",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    },
    createdAt: "2020-01-26 05:55:04.224856"
  },
  {
    id: "gbesrbswr",
    title: "Mi cuarto post",
    thumbnail:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    cover:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    excerpt:
      "Este es el extracto de mi primer post, sirve para llamar la atención de los lectores, se supone que con esto haga saber de qué tratará mi post, y que tiene de interesante para leer.",
    writer: {
      id: "asdadasdas",
      name: "McBolas",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    },
    createdAt: "2020-01-26 05:55:04.224856"
  },
  {
    id: "wsbvwaef",
    title: "Mi quinto post",
    thumbnail:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    cover:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    excerpt:
      "Este es el extracto de mi primer post, sirve para llamar la atención de los lectores, se supone que con esto haga saber de qué tratará mi post, y que tiene de interesante para leer.",
    writer: {
      id: "asdadasdas",
      name: "McBolas",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    },
    createdAt: "2020-01-26 05:55:04.224856"
  },
  {
    id: "svwajke",
    title: "Mi sexto post",
    thumbnail:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    cover:
      "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1538169664",
    excerpt:
      "Este es el extracto de mi primer post, sirve para llamar la atención de los lectores, se supone que con esto haga saber de qué tratará mi post, y que tiene de interesante para leer.",
    writer: {
      id: "asdadasdas",
      name: "McBolas",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    },
    createdAt: "2020-01-26 05:55:04.224856"
  }
];
