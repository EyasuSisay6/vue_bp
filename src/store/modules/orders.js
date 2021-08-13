import * as types from "@/store/mutation-types";
// import { login } from "@/services/api/auth";
import { createProvider } from "../../vue-apollo";
import { handleError } from "@/utils/utils.js";
import { gql } from "graphql-tag";

let apolloClient = createProvider().defaultClient;

const getters = {
  pending: (state) => state.pending,
  completed: (state) => state.completed,
  delayed: (state) => state.delayed,
  canceled: (state) => state.canceled,
};

const actions = {
  async getPending({ commit }) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            filterOrders(status: "pending") {
              id
              user {
                id
                username
                phone
              }
              price
              status
              paid
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.filterOrders);
        commit(types.SAVE_ALL_PENDING, response.data.filterProds);
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
  async getCompleted({ commit }) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            filterOrders(status: "completed") {
              id
              user {
                id
                username
                phone
              }
              price
              status
              paid
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.filterOrders);
        commit(types.SAVE_ALL_COMPLETED, response.data.filterProds);
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
  async getCanceled({ commit }) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            filterOrders(status: "canceled") {
              id
              user {
                id
                username
                phone
              }
              price
              status
              paid
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.filterOrders);
        commit(types.SAVE_ALL_CANCELED, response.data.filterProds);
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
  async getDelayed({ commit }) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            filterOrders(status: "delayed") {
              id
              user {
                id
                username
                phone
              }
              price
              status
              paid
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.filterOrders);
        commit(types.SAVE_ALL_DELAYED, response.data.filterProds);
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
};

const mutations = {
  [types.SAVE_ALL_PENDING](state, orders) {
    state.orders = orders;
  },
  [types.SAVE_ALL_CANCELED](state, orders) {
    state.orders = orders;
  },
  [types.SAVE_ALL_COMPLETED](state, orders) {
    state.orders = orders;
  },
  [types.SAVE_ALL_DELAYED](state, orders) {
    state.orders = orders;
  },
};

const state = {
  pending: [],
  completed: [],
  delayed: [],
  canceled: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
