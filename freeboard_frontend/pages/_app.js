import "antd/dist/antd.css";
// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRouter } from "next/router";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import LoginPage from "./loginauth";
import Layout from "../src/components/commons";
import Home from ".";
import SignupPage from "./signup/";
import { createContext, useEffect, useState } from "react";
const HIDDEN_MAIN = ["/"];

const HIDDEN_SIGNUP = ["/signup"];
const HIDDEN_LOGIN = ["/loginauth"];

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    console.log(accessToken);
    setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  const router = useRouter();
  const isHiddenMain = HIDDEN_MAIN.includes(router.pathname);
  const isHiddenLogin = HIDDEN_LOGIN.includes(router.pathname);
  const isHiddenSignup = HIDDEN_SIGNUP.includes(router.pathname);

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          {isHiddenMain && <Home />}

          {/* <Home></Home> */}

          {!isHiddenMain && !isHiddenSignup && !isHiddenLogin && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
          {isHiddenSignup && <SignupPage />}
          {isHiddenLogin && <LoginPage />}
        </ApolloProvider>
      </GlobalContext.Provider>
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
