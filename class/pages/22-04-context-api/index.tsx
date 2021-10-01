import MyBoardWrite from "../../src/components/units/22-context-api/MyBoardWrite.container";
import { createContext } from "react";

export const MyContext = createContext(null);

export default function ContextApiPage() {
  const value = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={value}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
  //   감싼부분만 가능 (MyBoardWrite 자식만 가능)
  // app.js 에서 사용하면 모든 컴포넌트에서 사용 가능
}
