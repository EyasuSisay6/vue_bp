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
          newUser(username: "${payload.userName}", email: "${payload.email}", firstName: "${payload.firstname}", lastName: "${payload.lastname}", phone: "${payload.phone}", password: "${payload.password}",profilePic:"") {
            payload {
              username
              firstName
              lastName
              isStaff
              id
              phone
              profilePic
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
