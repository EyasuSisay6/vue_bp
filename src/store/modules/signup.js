import * as types from "@/store/mutation-types";

import { createProvider } from "../../vue-apollo";
import { handleError } from "@/utils/utils.js";
import { gql } from "graphql-tag";

let apolloClient = createProvider().defaultClient;

const actions = {
  async userSignUp(ctx, payload) {
    ctx.commit(types.SHOW_LOADING, true);
    console.log(`
    mutation {
      newUser(username: "${payload.userName}", email: "${payload.email}", phone: "${payload.phone}", password: "${payload.password}",isDelivery:true) {
        payload {
          username
          id
          phone
        }
      }
    }`);
    const resp = await apolloClient
      .mutate({
        mutation: gql`
        mutation {
          newUser(username: "${payload.userName}", email: "${payload.email}", phone: "${payload.phone}", password: "${payload.password}",isDelivery:true) {
            payload {
              username
              isDelivery
              id
              phone
            }
          }
        }`,
      })
      .then(() => {
        ctx.dispatch("userLogin", {
          email: payload.userName,
          password: payload.password,
        });
      })
      .catch((error) => {
        handleError(error, ctx.commit, resp);
      });
  },
};

export default {
  actions,
};
