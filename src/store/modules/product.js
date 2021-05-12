import * as types from "@/store/mutation-types";
// import { login } from "@/services/api/auth";
import { createProvider } from "../../vue-apollo";
import { handleError } from "@/utils/utils.js";
import { gql } from "graphql-tag";

let apolloClient = createProvider().defaultClient;

const getters = {
  products: (state) => state.products,
  filteredProducts: (state) => state.filteredProducts,
  totalProducts: (state) => state.products.length,
  dealOfTheDay: (state) => state.products.slice(1, 6),
  electronics: (state) => state.products.slice(7, 13),
  clothings: (state) => state.products.slice(14, 20),
  home: (state) => state.products.slice(19, 25),
  getProductId: (state) => (id) => {
    return state.products.find((p) => p.productId == id);
  },
};

const actions = {
  async getAllProducts({ commit }, payload) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            allProducts(page: ${payload.page}, pageSize: ${payload.pageSize}) {
              objects {
                productId
                productName
                sellingPrice
                dealerPrice
                productDesc
                productCategory{
                  categoryName
                }
                productImages {
                  image
                }
                vendor{
                  storeName
                }
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.allProducts.objects);
        commit(types.SAVE_ALL_PRODUCTS, response.data.allProducts.objects);
        // commit(types.SAVE_TOKEN, response.data.tokenAuth.token);
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
  async filterProducts({ commit }, payload) {
    const resp = await apolloClient
      .query({
        query: gql`
          {
            filterProds(
              pcat: "${payload.pcat}"
              page: ${payload.page}
              pageSize: ${payload.pageSize}
              ranged: ${payload.ranged}
              minP: ${payload.minP}
              maxP: ${payload.maxP}
            ) {
              page
              pages
              hasNext
              hasPrev
              objects {
                productId
                productName
                sellingPrice
                dealerPrice
                vendor{
                  storeName
                }
                productImages {
                  image
                }
              }
              total
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.filterProds.objects);
        commit(types.SAVE_FILTERED_PRODUCTS, response.data.filterProds.objects);
        // commit(types.SAVE_TOKEN, response.data.tokenAuth.token);
      })
      .catch((error) => {
        handleError(error, commit, resp);
      });
  },
};

const mutations = {
  [types.SAVE_ALL_PRODUCTS](state, products) {
    console.log(products);
    state.products = products;
  },
  [types.SAVE_FILTERED_PRODUCTS](state, products) {
    state.filteredProducts = products;
  },
};

const state = {
  products: [],
  filteredProducts: [],
  totalProducts: 8,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
