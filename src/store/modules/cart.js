import * as types from "@/store/mutation-types";

const getters = {
  totalCartList: (state) => state.cartItems,
};

const mutations = {
  [types.REMOVE_PRODUCT_FROM_CART_LIST](state, value) {
    state.cartItems = state.cartItems.filter(function(product) {
      return product.productId != value;
    });
  },
  [types.ADD_PRODUCT_TO_CART_LIST](state, value) {
    console.log(value);
    state.cartItems = [
      ...state.cartItems,
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
  cartItems: [],
  totalProducts: 8,
};

export default {
  state,
  getters,
  mutations,
};
