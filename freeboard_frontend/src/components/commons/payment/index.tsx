import Head from "next/head";
import styled from "@emotion/styled";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

const ChageInput = styled.input`
  width: 170px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-top: 20px;
  ::placeholder {
    font-size: 15px;
  }
  padding-left: 10px;
`;

const ChargeButton = styled.button`
  width: 170px;
  height: 52px;
  background-color: #121722;
  border-radius: 5px;
  border: 1px solid #121722;
  color: white;
  margin-top: 20px;
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage1(props) {
  const [chargePrice, setChargePrice] = useState("");
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  function onChangeChargeAmount(event) {
    setChargePrice(event.target.value);
  }

  function onClickPayment() {
    console.log(123);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "마일리지",
        amount: chargePrice,
        buyer_email: props.data?.fetchUserLoggedIn.email,
        buyer_name: props.data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/mypages",
        // 예: https://www.my-service.com/payments/complete
      },
      function (rsp) {
        // callback
        if (rsp.success) {
          // mutation() => createPointTransactionOfLoading({
          //   variables:{
          //     impUid:
          //   }
          // })
          console.log(rsp);
          createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          console.log(createPointTransactionOfLoading);

          // ...,
          // // 결제 성공 시 로직,
          // ...
        } else {
          alert("결제에 실패하였습니다.");
          // ...,
          // // 결제 실패 시 로직,
          // ...
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <ChageInput
        type="text"
        placeholder="충전금액을 입력하세요."
        onChange={onChangeChargeAmount}
      />

      <ChargeButton onClick={onClickPayment}>결제하기</ChargeButton>
    </>
  );
}
