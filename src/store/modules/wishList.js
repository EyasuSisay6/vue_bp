import * as types from "@/store/mutation-types";

const getters = {
  totalWishList: (state) => state.wishLists,
};

const mutations = {
  [types.REMOVE_PRODUCT_FROM_WISH_LIST](state, value) {
    state.wishLists = state.wishLists.filter(function(product) {
      return product.productId != value;
    });
  },
  [types.ADD_PRODUCT_TO_WISH_LIST](state, value) {
    state.wishLists = [
      ...state.wishLists,
      {
        productId: value.id,
        name: value.title,
        category: 1,
        price: value.price,
        image: value.image,
      },
    ];
  },
};

const state = {
  test: "test",
  wishLists: [],
  totalProducts: 8,
};

export default {
  state,
  getters,
  mutations,
};
