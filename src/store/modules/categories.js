const getters = {
  categories: (state) => state.categories,
  totalCategories: (state) => state.totalCategories,
  getCategoryId: (state) => (id) => {
    return state.categories.find((category) => category.id == id);
  },
};

const state = {
  categories: [
    {
      image: "http://vuestorefronts.com/_nuxt/img/1.2ce1d51.jpg",
      id: 1,
      title: "Electronics",
    },
    {
      image: "http://vuestorefronts.com/_nuxt/img/2.c920612.jpg",
      id: 2,
      title: "Clothings",
    },
    {
      image: "http://vuestorefronts.com/_nuxt/img/3.4dd1f5e.jpg",
      id: 3,
      title: "Computers",
    },
    {
      image: "http://vuestorefronts.com/_nuxt/img/4.1c054cc.jpg",
      id: 4,
      title: "Home $ Kitchen",
    },
    {
      image: "http://vuestorefronts.com/_nuxt/img/5.cf89506.jpg",
      id: 5,
      title: "Health & Beauty",
    },
    {
      image: "http://vuestorefronts.com/_nuxt/img/6.c7fe10e.jpg",
      id: 6,
      title: "Jewlry & Watch",
    },
    {
      image: "http://vuestorefronts.com/_nuxt/img/7.8e65d3d.jpg",
      id: 7,
      title: "Technology Toys",
    },
    {
      image: "http://vuestorefronts.com/_nuxt/img/8.24a3c9f.jpg",
      id: 8,
      title: "Mobile Phones",
    },
  ],
  totalCategories: 8,
};

export default {
  state,
  getters,
};
