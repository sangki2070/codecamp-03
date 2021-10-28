import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalComponentLifecyclePage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>();

  // const [state, setState] =useState({
  //     count:0
  // })

  // componentDidMount와 동일

  useEffect(() => {
    console.log("컴포넌트 마운트 완료");
    inputRef.current.focus();

    // componentWillUnmount와 동일
    return () => {
      console.log("잘가요");
    };
  }, []);
  // componentDidUpdate와 동일
  // [] 의존성 배열

  useEffect(() => {
    console.log("컴포넌트 수정 완료");
  }, [count]);

  //   //setState와 useEffect

  //   useEffect(() => {
  //       setCount((prev) => prev +1)
  //   },[])

  // setState와 useEffect의 dependecy-array

  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, [count]);

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      현재카운트: {count}
      <button onClick={onClickCount}>카운트 증가!!</button>
      <button onClick={onClickMove}>페이지 이동</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
