import "antd/dist/antd.css";
// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import Layout from "../src/components/commons";
import Home from ".";

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  const HIDDEN_MAIN = ["/"];
  const HIDDEN_LAYOUT = [
    "/boards",
    "/boards/[BoardsDetailPage]",
    "/boards/[BoardsDetailPage]/edit",
    "/boards/currency",
    "/boards/new",
  ];
  const router = useRouter();
  const isHiddenMain = HIDDEN_MAIN.includes(router.pathname);
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.pathname);
  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        {!isHiddenLayout && <Home />}
        {/* <Home></Home> */}

        {!isHiddenMain && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ApolloProvider>
    </>
  );
}

export default MyApp;

// const HIDDEN_Layout = [“/”];
// const HIDDEN_Main = [
//   “/boards/list”,
//   “/boards/board-post”,
//   “/boards/[board_post_detail]“,
// ];
