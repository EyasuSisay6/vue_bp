import * as types from "@/store/mutation-types";
// import { login } from "@/services/api/auth";
import { createProvider } from "../../vue-apollo";
import { handleError } from "@/utils/utils.js";
import { gql } from "graphql-tag";

let apolloClient = createProvider().defaultClient;

const getters = {
  products: (state) => state.products,
  sampleProducts: (state) => state.sampleProducts,
  filteredProducts: (state) => state.filteredProducts,
  totalProducts: (state) => state.products.length,
  dealOfTheDay: (state) => state.products.slice(1, 6),
  electronics: (state) => state.products.slice(7, 13),
  clothings: (state) => state.products.slice(14, 20),
  home: (state) => state.products.slice(19, 25),
  getProductId: (state) => (id) => {
    return state.sampleProducts.find((p) => p.id == id);
  },
};

const actions = {
  async getAllProducts({ commit }, payload) {
    const resp = await apolloClient
      .query({
        query: gql`
        {
          allProductsPaginated(page: ${payload.page}, perPage: ${payload.pageSize}) {
            objects {
              name
              id
              category {
                name
              }
              productimageSet {
                image
              }
              sellingPrice
              dealerPrice
              vendor {
                storeName
              }
            }
          }
        }
        
        `,
      })
      .then((response) => {
        console.log(response.data.allProductsPaginated.objects);
        commit(
          types.SAVE_ALL_PRODUCTS,
          response.data.allProductsPaginated.objects
        );
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
  sampleProducts: [
    {
      id: 1,
      productName: "Test",
      sellingPrice: 5000,
      dealerPrice: 6000,
      vendor: {
        storeName: "Test Store",
      },
      productImages: {
        image: [
          "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
        ],
      },
    },
    {
      id: 2,
      productName: "Test 2",
      sellingPrice: 5000,
      dealerPrice: 6000,
      vendor: {
        storeName: "Test Store",
      },
      productImages: {
        image: [
          "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
        ],
      },
    },
    {
      id: 3,
      productName: "Test 3",
      sellingPrice: 5000,
      dealerPrice: 6000,
      vendor: {
        storeName: "Test Store",
      },
      productImages: {
        image: [
          "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
        ],
      },
    },
  ],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
