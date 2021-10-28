import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    // ["철수", "영희", "훈이"].map((el) => el + "어린이") 철수어린이, 영희어린이, 훈이어린이

    // 체크 !!! 이미 담았는지 체크

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담았습니다.");
      return;
    }

    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);
    // 타입네임 지우는 방법 얕은 복사....

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  function onClickLogin() {
    alert("로그인에 성공하였습니다.");
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다!, 장바구니 페이지로 이동할까요?"
      );

      if (result) router.push("27-03-basket-logged-in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}

      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
