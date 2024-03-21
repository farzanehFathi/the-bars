import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const PomoContext = createContext();

export default function PomoContextProvider(props) {
  const [pomos, setPomos] = createStore([]);

  return (
    <PomoContext.Provider value={{ pomos, setPomos }}>
      {props.children}
    </PomoContext.Provider>
  );
}

export function usePomoContext() {
  return useContext(PomoContext);
}
