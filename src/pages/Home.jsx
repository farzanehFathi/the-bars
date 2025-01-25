import { For, Show } from "solid-js";
import { usePomoContext } from "../context/PomoContext";

import VerticalCard from "../components/VerticalCard";
import WeekLog from "../components/WeekLog";
import PomoLoger from "../components/PomoLoger";

export default function Home() {
  const { pomos, loading } = usePomoContext();

  return (
    <div>
      <Show when={!loading} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-10 my-4">
          <For each={pomos}>
            {(pomo) => (
              <VerticalCard>
                <div
                  style={
                    "padding:1px; border:1px solid rgba(148, 147, 147, 0.54); border-radius: 10px"
                  }
                >
                  <div
                    class="grid grid-cols-1"
                    style={"border-radius:9px; border:1px solid" + pomo.color}
                  >
                    <div
                      class="counts center text-3xl text-white"
                      style={
                        "background:" +
                        pomo.color +
                        "; border-radius: 8px 8px 0 0"
                      }
                    >
                      {pomo.nums}
                    </div>

                    <div class="pomo center text-4xl">{pomo.pomo}</div>

                    <div
                      class="counter center text-3xl text-center"
                      style={
                        "cursor: pointer; color:" +
                        pomo.color +
                        "; border-top: 1px solid" +
                        pomo.color
                      }
                    >
                      <div class="counter-icon">
                        <PomoLoger id={pomo.id} />
                      </div>
                    </div>
                  </div>
                </div>
              </VerticalCard>
            )}
          </For>
        </div>
      </Show>
      <h2 class="text-2xl">Weekly Progress</h2>
      <hr />
      <WeekLog id={"1"} />
      <WeekLog id={"2"} />
      <WeekLog id={"3"} />
      <WeekLog id={"4"} />
      <WeekLog id={"5"} />
    </div>
  );
}
