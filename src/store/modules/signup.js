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
          userSignup(username: "${payload.userName}", email: "${payload.email}", phone: "${payload.phone}", password: "${payload.password}",isDelivery:true) {
            payload {
              username
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
        // console.log({ ...payload, id: res });
        // ctx.dispatch("signupDelivery", { ...payload, id: res });
      })
      .catch((error) => {
        handleError(error, ctx.commit, resp);
      });
  },
  async signupDelivery(ctx, payload) {
    console.log(`
        mutation {
          deliverySignup(
            user: "${payload.id.data.userSignup.payload.id}"
            address: "${payload.address}"
            deliveryType: "${payload.deliveryType}"
            email: "${payload.email}"
            phone: "${payload.phone}"
            name: "${payload.userName}"
          ) {
            payload {
              name
            }
          }
        }
      `);
    const respo = await apolloClient
      .mutate({
        mutation: gql`
            mutation {
              deliverySignup(
                user: "${payload.id.data.userSignup.payload.id}"
                address: "${payload.address}"
                deliveryType: "${payload.deliveryType}"
                email: "${payload.email}"
                phone: "${payload.phone}"
                name: "${payload.userName}"
              ) {
                payload {
                  name
                }
              }
            }
          `,
      })
      .then(() => {
        ctx.dispatch("userLogin", {
          email: payload.userName,
          password: payload.password,
        });
      })
      .catch((error) => {
        console.log(error);
        handleError(error, ctx.commit, respo);
      });
  },
};

export default {
  actions,
};
