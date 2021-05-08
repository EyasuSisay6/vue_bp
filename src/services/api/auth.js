import { gql } from "graphql-tag";

export const login = gql`
  mutation tokeAuth {
    tokenAuth(username: "abeselom", password: "passitaround") {
      payload
      token
    }
  }
`;
export const test = gql`
  query {
    allUsers {
      userId
      username
    }
  }
`;

export const allProducts = gql`
  query {
    allProducts(pageSize: 5, page: 1) {
      page
      pages
      hasNext
      hasPrev
      objects {
        productId
        vendor {
          vendorId
          storeName
        }
        productName
        productDesc
        productImages {
          image
        }
      }
      total
    }
  }
`;
