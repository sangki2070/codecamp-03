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
import { getAccessToken } from "../src/commons/libraries/getAccesstoken";
import { onError } from "@apollo/client/link/error";

import { createContext, useEffect, useState } from "react";
const HIDDEN_MAIN = ["/"];

const HIDDEN_SIGNUP = ["/signup"];
const HIDDEN_LOGIN = ["/loginauth"];

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [myLat, setMyLat] = useState("");
  const [myLng, setMyLng] = useState("");
  const [location, setLocation] = useState("");

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    myLat: myLat,
    setMyLat: setMyLat,
    myLng: myLng,
    setMyLng: setMyLng,
    location: location,
    setLocation: setLocation,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // console.log(accessToken);
    // setAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // operation.getContext().headers
          // 기존에 날렸던 쿼리의 헤더정보들
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,

              // 기존 쿼리중 엑세스토큰만 바꿔서 다시날림
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    // uri: "http://34.64.161.16/team05",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
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
