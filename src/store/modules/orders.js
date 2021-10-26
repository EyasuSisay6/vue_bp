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
  async changeStatus({ commit }, value) {
    commit(types.SHOW_LOADING, true);
    const resp = await apolloClient
      .mutate({
        mutation: gql`mutation{
        updateOrderStatus(id:"${value.id}",reference:"${value.reference}",status:"${value.status}"){
          payload{
            id
          }
        }
      }`,
      })
      .then((response) => {
        commit(types.SHOW_LOADING, false);
        console.log(response.data.updateOrderStatus);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        handleError(error, commit, resp);
      });
  },
  async getPending({ commit }) {
    commit(types.SHOW_LOADING, true);
    const resp = await apolloClient
      .query({
        query: gql`
          {
            currentOrder {
              objects {
                id

                user {
                  username
                  phone
                  email
                }
                deliveryOption {
                  totalDistance
                  deliveryPrice
                  provider {
                    name
                  }
                }
                products {
                  id
                  name
                  vendor {
                    storeName
                    phone
                  }
                }
                price
                status
              }
            }
          }
        `,
      })
      .then((response) => {
        commit(types.SHOW_LOADING, false);
        console.log(response.data.currentOrder.objects);
        commit(types.SAVE_ALL_PENDING, response.data.currentOrder.objects);
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
            currentOrder(status: "completed") {
              objects {
                id

                user {
                  username
                  phone
                  email
                }
                deliveryOption {
                  totalDistance
                  deliveryPrice
                  provider {
                    name
                  }
                }
                products {
                  id
                  name
                  vendor {
                    storeName
                    phone
                  }
                }
                price
                status
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.currentOrder);
        commit(types.SAVE_ALL_COMPLETED, response.data.currentOrder.objects);
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
            currentOrder(status: "canceled") {
              objects {
                id

                user {
                  username
                  phone
                  email
                }
                deliveryOption {
                  totalDistance
                  deliveryPrice
                  provider {
                    name
                  }
                }
                products {
                  id
                  name
                  vendor {
                    storeName
                    phone
                  }
                }
                price
                status
              }
            }
          }
        `,
      })
      .then((response) => {
        commit(types.SAVE_ALL_CANCELED, response.data.currentOrder.objects);
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
    state.canceled = orders;
  },
  [types.SAVE_ALL_COMPLETED](state, orders) {
    state.completed = orders;
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
  orders: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
