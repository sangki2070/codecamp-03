import ContextContainer from "../../../src/components/units/24-context-api/Context.container";
import { createContext } from "react";

export const MyContext = createContext(null);

export default function ContextPage() {
  const value = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={value}>
      <ContextContainer />
    </MyContext.Provider>
  );
}
