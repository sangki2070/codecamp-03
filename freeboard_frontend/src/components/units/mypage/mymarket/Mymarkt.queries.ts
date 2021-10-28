import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      createdAt
      buyer {
        name
        email
      }
    }
  }
`;

export const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      createdAt
      buyer {
        email
      }
    }
  }
`;
