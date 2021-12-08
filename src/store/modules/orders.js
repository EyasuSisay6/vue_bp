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
            currentOrder(status: "pending") {
              objects {
                id
                user {
                  username
                  id
                  phone
                }
                orders {
                  product {
                    id
                    name
                    sellingPrice
                    usdPrice
                    image
                    vendor {
                      storeName
                      phone
                      id
                    }
                  }
                  quantity
                }
                price
                reference
                status
                paid
                paymentMethod
                tax
                totalProducts
                paid
              }
            }
          }
        `,
      })
      .then((response) => {
        commit(types.SHOW_LOADING, false);
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
                  id
                  phone
                }
                orders {
                  product {
                    id
                    name
                    sellingPrice
                    usdPrice
                    image
                    vendor {
                      storeName
                      phone
                      id
                    }
                  }
                  quantity
                }
                price
                reference
                status
                paid
                paymentMethod
                tax
                totalProducts
                paid
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
                  id
                  phone
                }
                orders {
                  product {
                    id
                    name
                    sellingPrice
                    usdPrice
                    image
                    vendor {
                      storeName
                      phone
                      id
                    }
                  }
                  quantity
                }
                price
                reference
                status
                paid
                paymentMethod
                tax
                totalProducts
                paid
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
  async incomingOrders({ commit }) {
    commit(types.SHOW_LOADING, true);
    const resp = await apolloClient
      .query({
        query: gql`
          {
            getUnassignedOrders {
              objects {
                id
                user {
                  username
                  id
                  phone
                }
                orders {
                  product {
                    id
                    name
                    sellingPrice
                    usdPrice
                    image
                    vendor {
                      storeName
                      phone
                      id
                    }
                  }
                  quantity
                }
                price
                reference
                status
                paid
                paymentMethod
                tax
                totalProducts
                paid
              }
            }
          }
        `,
      })
      .then((response) => {
        commit(types.SHOW_LOADING, false);
        console.log("incomingOrders");
        console.log(response.data.getUnassignedOrders.objects);
        commit(
          types.SAVE_INCOMING_ORDERS,
          response.data.getUnassignedOrders.objects
        );
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
  async pickupOrders(ctx, value) {
    ctx.commit(types.SHOW_LOADING, true);
    const resp = await apolloClient
      .mutate({
        mutation: gql`
          mutation {
            pickupOrder(orderId: "${value}") {
              payload {
                id
                user {
                  username
                  id
                  phone
                }
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.pickupOrder);
        window.location.reload();
      })
      .catch((error) => {
        handleError(error, ctx.commit, resp);
      });
  },
};

const mutations = {
  [types.SAVE_ALL_PENDING](state, orders) {
    state.pending = orders;
  },
  [types.SAVE_INCOMING_ORDERS](state, orders) {
    state.incomingOrders = orders;
  },
  [types.SAVE_ALL_CANCELED](state, orders) {
    state.canceled = orders;
  },
  [types.SAVE_ALL_COMPLETED](state, orders) {
    state.completed = orders;
  },
};

const state = {
  pending: [],
  completed: [],
  delayed: [],
  canceled: [],
  orders: [],
  incomingOrders: [],
  acceptedOrders: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
