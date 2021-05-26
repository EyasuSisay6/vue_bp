import * as types from "@/store/mutation-types";
import { createProvider } from "../../vue-apollo";
import { handleError } from "@/utils/utils.js";
import { gql } from "graphql-tag";

let apolloClient = createProvider().defaultClient;

const getters = {
  categories: (state) => state.categories,
  totalCategories: (state) => state.totalCategories,
  sampleCategories: (state) => state.sampleCategories,
  getCategoryId: (state) => (id) => {
    return state.sampleCategories.find((category) => category.id == id);
  },
};

const actions = {
  async parentCats({ commit }) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            parentCategories {
              id
              name
              image
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.parentCats);
        commit(types.SAVE_ALL_CATEGORIES, response.data.parentCategories);
        // commit(types.SAVE_TOKEN, response.data.tokenAuth.token);
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
};

const mutations = {
  [types.CREATE_CATEGORY](state, value) {
    state.categories.push({
      image: value.image,
      id: state.categories.length + 1,
      title: value.title,
    });
  },
  [types.SAVE_ALL_CATEGORIES](state, value) {
    state.categories = value;
  },
};

const state = {
  categories: [],
  totalCategories: 8,
  sampleCategories: [
    {
      id: "1",
      name: "Electronics",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
    {
      id: "2",
      name: "Fashion",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
    {
      id: "3",
      name: "Health and Beauty",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
    {
      id: "4",
      name: "Home and Garden",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
    {
      id: "5",
      name: "Sports",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
    {
      id: "6",
      name: "Industrial equipment",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
    {
      id: "7",
      name: "Motors",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
    {
      id: "8",
      name: "Collectibles and Art",
      image: "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
    },
  ],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
