import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  return (
    // <FunctionalComponentUI
    //   count={123}
    //   school="다람쥐 초등학교"
    // ></FunctionalComponentUI>
    <>{FunctionalComponentUI({ count: 123, school: "다람쥐 초등학교" })}</>
  );
}
