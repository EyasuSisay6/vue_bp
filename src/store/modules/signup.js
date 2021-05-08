import * as types from "@/store/mutation-types";

import { createProvider } from "../../vue-apollo";
import { handleError } from "@/utils/utils.js";
import { gql } from "graphql-tag";

let apolloClient = createProvider().defaultClient;

const actions = {
  async userSignUp(ctx, payload) {
    ctx.commit(types.SHOW_LOADING, true);
    const resp = await apolloClient
      .mutate({
        mutation: gql`
          mutation {
            newUser(
              email: "${payload.email}"
              fullName: "${payload.name}"
              password: "${payload.password}"
            ) {
              payload {
                username
                firstName
                lastName
                isStaff
                userId
                phone
                password
              }
            }
          }
        `,
      })
      .then(() => {
        ctx.dispatch("userLogin", {
          email: payload.email,
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
