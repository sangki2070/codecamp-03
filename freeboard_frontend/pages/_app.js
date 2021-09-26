import "antd/dist/antd.css";
// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons";
import Home from ".";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Home></Home>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
