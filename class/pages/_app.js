import "antd/dist/antd.css";
// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccesstoken";
// import Head from "next/head";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyD_yuZWLxBbhml8p0SJcfrz5KIQXaovt88",
  authDomain: "firstproject-f510a.firebaseapp.com",
  projectId: "firstproject-f510a",
  storageBucket: "firstproject-f510a.appspot.com",
  messagingSenderId: "668992000072",
  appId: "1:668992000072:web:ebfc244bd7a21af735487d",
  measurementId: "G-S9BM03DPJW",
});

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
    // localStorage.clear();
    // const accessToken = localStorage.getItem("accessToken") || "";
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

  // 그라프큐엘 에러...., 어떤 쿼리를 썼는지, 다시날릴때 사용할 포워드
  // 반복문은 공식문서에 따라 작성

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
