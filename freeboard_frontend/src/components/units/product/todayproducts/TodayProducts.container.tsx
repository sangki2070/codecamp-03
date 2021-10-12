import { useRouter } from "next/router";
import TodayProductsUI from "./TodayProducts.present";

export default function TodayProductsContainer() {
  const router = useRouter();

  const onClickMovetoToday = (el) => () => {
    router.push(`products/${el._id}`);
  };

  return <TodayProductsUI onClickMovetoToday={onClickMovetoToday} />;
}
