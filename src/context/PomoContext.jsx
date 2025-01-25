import {
  createContext,
  useContext,
  createResource,
  createEffect,
} from "solid-js";
import { createStore } from "solid-js/store";

const pomoItems = [
  {
    id: "1",
    pomo: "🍅",
    color: "#F03A17",
    goal: 50,
    clickIcon: "/icons/tomato-click-counter.png",
  },
  {
    id: "2",
    pomo: "🍋",
    color: "#FCC219",
    goal: 20,
    clickIcon: "/icons/lemon-click-counter.png",
  },
  {
    id: "3",
    pomo: "🥦",
    color: "#71A921",
    goal: 40,
    clickIcon: "/icons/broccoli-click-counter.png",
  },
  {
    id: "4",
    pomo: "🍉",
    color: "#19B294",
    goal: 50,
    clickIcon: "/icons/watermelon-click-counter.png",
  },
  {
    id: "5",
    pomo: "🍇",
    color: "#5F50A3",
    goal: 50,
    clickIcon: "/icons/grapes-click-counter.png",
  },
];

export const PomoContext = createContext();

export default function PomoContextProvider(props) {
  const [pomos, setPomos] = createStore([]);
  const [allPomos] = createResource(pomoItems);

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
