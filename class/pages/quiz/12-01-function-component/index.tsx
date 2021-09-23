import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function FunctionalPage() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    alert("Rendered!");
    inputRef.current.focus();

    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    alert("Changed!!!");
  }, [isChange]);

  function onClickChange() {
    setIsChange(true);
    console.log(isChange);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="password" ref={inputRef} />
    </>
  );
}
