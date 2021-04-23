const getters = {
  products: (state) => state.products,
  totalProducts: (state) => state.products.length,
  dealOfTheDay: (state) => state.products.slice(1, 6),
  electronics: (state) => state.products.slice(7, 13),
  clothings: (state) => state.products.slice(14, 20),
  home: (state) => state.products.slice(19, 25),
};

const state = {
  products: [
    {
      category: 1,
      price: 750,
      image:
        "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
    },
    {
      category: 1,
      price: 555,
      image:
        "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
    },
    {
      category: 1,
      price: 1233,
      image:
        "http://45.76.97.89:3000/uploads/bb783d18223044cca198d84a4e0e3191.jpg",
    },
    {
      category: 1,
      price: 324,
      image:
        "http://45.76.97.89:3000/uploads/5a88e8516a6e44cb86ba41516dca0d56.jpg",
    },
    {
      category: 1,
      price: 692,
      image:
        "http://45.76.97.89:3000/uploads/e2132e11d3c34da89511593297697922.jpg",
    },
    {
      category: 1,
      price: 625,
      image:
        "http://45.76.97.89:3000/uploads/04ec8d58423647c98d6dbd3544c1c355.jpg",
    },
    {
      category: 1,
      price: 750,
      image:
        "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
    },

    {
      category: 1,
      price: 555,
      image:
        "http://45.76.97.89:3000/uploads/a48664eaed094c769046b4128dd341e4.jpg",
    },
    {
      category: 1,
      price: 1233,
      image:
        "http://45.76.97.89:3000/uploads/95aa7cb09ba04ce2b529ebceabb6f02c.jpg",
    },
    {
      category: 1,
      price: 324,
      image:
        "http://45.76.97.89:3000/uploads/5a88e8516a6e44cb86ba41516dca0d56.jpg",
    },
    {
      category: 1,
      price: 692,
      image:
        "http://45.76.97.89:3000/uploads/9c3e74c3b8e04684ba6c8cd333bdc8ec.jpg",
    },
    {
      category: 1,
      price: 625,
      image:
        "http://45.76.97.89:3000/uploads/a85ac7daaa614747b209894c37a0bdbd.jpg",
    },
    {
      category: 1,
      price: 750,
      image:
        "http://45.76.97.89:3000/uploads/04ec8d58423647c98d6dbd3544c1c355.jpg",
    },

    {
      category: 1,
      price: 555,
      image:
        "http://45.76.97.89:3000/uploads/b5deb586612e4c808272da9913b8109b.jpg",
    },
    {
      category: 1,
      price: 1233,
      image: "http://45.76.97.89:3000/uploads/1_33e3c32a03.jpg",
    },
    {
      category: 1,
      price: 324,
      image:
        "http://45.76.97.89:3000/uploads/0f04c128bb2945608bed459cdff45b2d.jpg",
    },
    {
      category: 1,
      price: 692,
      image:
        "http://45.76.97.89:3000/uploads/283e9ff36993434c9d228a5f7681e330.jpg",
    },
    {
      category: 1,
      price: 625,
      image:
        "http://45.76.97.89:3000/uploads/d903b17699d842f4ab1327eff18f04d0.jpg",
    },
    {
      category: 1,
      price: 750,
      image:
        "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
    },

    {
      category: 1,
      price: 555,
      image:
        "http://45.76.97.89:3000/uploads/e6965d2ab9ef4537ab17517394fe9ce4.jpg",
    },
    {
      category: 1,
      price: 1233,
      image:
        "http://45.76.97.89:3000/uploads/20c71a1cecd047928f943f23a58c05f8.jpg",
    },
    {
      category: 1,
      price: 324,
      image:
        "http://45.76.97.89:3000/uploads/aefd853e2fd942bb860b9eb4d8b8d7c0.jpg",
    },
    {
      category: 1,
      price: 692,
      image:
        "http://45.76.97.89:3000/uploads/d5c5d5570e1046f080ad62c7e35fe56d.jpg",
    },
    {
      category: 1,
      price: 625,
      image:
        "http://45.76.97.89:3000/uploads/d36aa60d7915475abcbb346de7274cac.jpg",
    },
    {
      category: 1,
      price: 750,
      image:
        "http://45.76.97.89:3000/uploads/afd6ccaff3fe4895903ec49b51b181d0.jpg",
    },
  ],
  totalProducts: 8,
};

export default {
  state,
  getters,
};
