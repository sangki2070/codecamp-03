import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나의사이트 게시판페이지" />
        <meta property="og:descripton" content="환영합니다!!" />
        <meta
          property="og:image"
          content="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        />
      </Head>
      <div>게시판 입니다.</div>
    </>
  );
}
