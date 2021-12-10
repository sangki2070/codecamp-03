
<p align="center">
  <img width="1000" src="https://user-images.githubusercontent.com/89248004/143454444-4cebb650-d643-41f5-8afa-169a152f8da0.png">
</p>

## 🔗 Link

- [Github 링크](https://github.com/sangki2070)
- [배포 링크](https://tradingzone.me/)

## 💁 정보

- 주식, 해외선물 ,암호화폐 등등 투자를 할때 여러 아이디어를 공유하기 위해 수익율정보게시판(자유게시판) 을 만들었으며, NFT(Non-Fungible Token) token 거래를 위한 마켓을 만들었습니다.
TradingView([https://www.tradingview.com/](https://www.tradingview.com/))사이트를 벤치마킹하여 만들었습니다.
- 코드캠프의 솔로 프로젝트 발표로 개발된 웹 어플리케이션입니다.

## 🕺 활동 내용

- **[메인 페이지 기능 구현]**
    - 회원가입 기능 구현
    - 로그인 기능 구현
    - 랜딩페이지 기능 구현
    - 리프레시 토큰을 이용해 로그인 관리
    - LocalStorage를 이용해 오늘본 상품을 구현
- **[글 작성 컴포넌트 기능 구현]**
    - [수익율정보게시판] 
    로그인 기능 필요없이 게시글 작성
    사진업로드
    유튜브 주소 첨부 기능
    Daum post code를 통한 주소등록 기능
    - [NFT 마켓] 
    로그인 기능 포함 권한분기된 회원만 작성 가능
    React Quill을 이용한 상세내용 첨부 기능
    사진 첨부기능
    카카오맵 API 기능을 통한 주소 첨부 기능(마커찍기, 마커찍은곳 주소)
- **[게시글 상세보기 페이지 기능 및 구현]**
    - [수익율정보게시판] 
    로그인 기능 필요없이 게시글 확인 가능
    동적라우팅을 이용해 구현
    서버사이드 렌더링 적용 페이지
    - [NFT 마켓]
    로그인한 유저만 게시글 확인 가능
    동적라우팅을 이용해 구현
    서버사이드 렌더링 적용 페이지
- **[댓글 컴포넌트 기능 구현]**
    - [수익율정보게시판] 
    댓글 기능(작성, 수정, 삭제, 별점 기능)
    - [NFT 마켓] 
    일반댓글, 대댓글 (작성, 수정, 삭제)
- **[마이 페이지 기능 구현]**
    - 나의 상품, 마이 찜, 포인트내역 구현
    - 아임포트를 활용한 결제 기능 구현
    - 닉네임, 비밀번호, 프로필사진 변경기능 구현

## 🔥 API 구현

- tradingview widget 기능을 이용한 chart import

<p align="center">
  <img width="1000" src="https://user-images.githubusercontent.com/89248004/143454652-5e069539-775d-44ab-aa7f-65f842862566.png">
</p>


- kakaomap api를 통해 주소 기능 구현 (마커찍기, lat lng 값을 이용한 주소 추출)

<p align="center">
  <img width="1000" src="https://user-images.githubusercontent.com/89248004/143454850-31960853-98cf-4cd0-8ebf-d75238c42c02.png">
</p>


- openwhether api 를 통해 날씨 표현카드 기능 구현
(api값을 통해 날씨를 이미지와 매칭해서 표현 이미지는 fontawesome 사용)


<p align="center">
  <img width="1000" src="https://user-images.githubusercontent.com/89248004/143454933-5a1e9b9f-b006-4fbf-978f-8808798852bd.png">
</p>

- [congeko](https://www.coingecko.com/ko) api를 이용해 암호화폐 시세를 가져옵니다. setInterval을 이용해 1분에 한번씩 갱신되도록 구현

<p align="center">
  <img width="1000" src="https://user-images.githubusercontent.com/89248004/143455039-66c9551b-f398-4baf-a9ff-edbf66df9701.png">
</p>

- 아임포트 api를 이용해 결제 구현

<p align="center">
  <img width="1000" src="https://user-images.githubusercontent.com/89248004/145541172-40b4f90d-70e3-4b69-9a9a-c0b00c4c0e3f.png">
</p>

<p align="center">
  <img width="1000" src="https://user-images.githubusercontent.com/89248004/145541353-237f128e-cf4f-439b-aa74-f76875430827.png">
</p>



## 💡 깨달은 점

- container, presenter 폴더구조에 대해서 배웠다.
- 디자이너툴 피그마와 제플린의 사용법을 배움
- Next.js의 다이나믹 라우팅 사용에 대해서 배웠다.
- ssr이 무엇인지 왜 필요한지에 대해서 배웠다.
- GCP 배포에 대해서 배웠으며 SSR(서버사이드 랜더링)의 개념을 배웠다.
- 로드밸런서를 이용해 어떤페이지가 버킷으로 가는지, vm으로 가는지 배웠다.
- docker를 이용해 봤고, docker를 이용하는 이유에 대해서 배웠다.
- 쉬운 SSR(서버사이드 랜더링)의 구현이 Next.js의 장점인지 알았다.
- http 통신에 대해서 알았고 Graphql-api, Rest-api의 차이점에 대해서 배웠다.
- api 독스를 읽어보고 받아온 정보를 홈페이지에 요청하는 방법을 알았다.

---
