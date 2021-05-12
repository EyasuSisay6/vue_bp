import * as types from "@/store/mutation-types";
import { createProvider } from "../../vue-apollo";
import { handleError } from "@/utils/utils.js";
import { gql } from "graphql-tag";

let apolloClient = createProvider().defaultClient;

const getters = {
  categories: (state) => state.categories,
  totalCategories: (state) => state.totalCategories,
  getCategoryId: (state) => (id) => {
    return state.categories.find((category) => category.pcatId == id);
  },
};

const actions = {
  async parentCats({ commit }) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            parentCats {
              pcatId
              parentCatName
              catImage
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.parentCats);
        commit(types.SAVE_ALL_CATEGORIES, response.data.parentCats);
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
