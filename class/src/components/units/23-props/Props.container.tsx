import PropsUI from "./Props.presenter";

export default function PropsPage() {
  return <>{PropsUI({ child: "철수", age: 13 })}</>;
}
