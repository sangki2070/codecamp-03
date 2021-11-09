import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { Dispatch, SetStateAction } from "react";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccesstoken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken(
  setAccessToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphqlClient = new GraphQLClient(
      "https://backend03.codebootcamp.co.kr/graphql12",
      { credentials: "include" }
    );
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
}
