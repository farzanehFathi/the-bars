import {
  createContext,
  useContext,
  createResource,
  createEffect,
} from "solid-js";
import { createStore } from "solid-js/store";

import PomoItems from "../assets/pomoitems";

export const PomoContext = createContext();

export default function PomoContextProvider(props) {
  const [pomos, setPomos] = createStore([]);
  const [allPomos] = createResource(PomoItems);

  createEffect(() => {
    if (allPomos()) {
      setPomos(allPomos().map((pomo) => ({ ...pomo, nums: 0 })));
    }
  });

  return (
    <PomoContext.Provider value={{ pomos, setPomos }}>
      {props.children}
    </PomoContext.Provider>
  );
}

export function usePomoContext() {
  return useContext(PomoContext);
}
