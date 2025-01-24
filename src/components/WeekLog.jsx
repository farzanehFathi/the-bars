import { For } from "solid-js";
import { usePomoContext } from "../context/PomoContext";
import Card from "./Card";

export default function WeekLog(props) {
  const { pomos } = usePomoContext();

  return (
    <div>
      <For each={pomos}>
        {(pomo) => (
          <Show when={pomo.id === props.id}>
            <Card>
              <div class="grid grid-cols-9 gap-2 my-2">
                <h2
                  class="col-span-1 center"
                  style="font-family: Noto Color Emoji , sans-serif"
                >
                  {pomo.pomo}
                </h2>
                <div class="col-span-6 progress-bar">
                  <h3
                    class="text-end px-2 text-gray-700"
                    style={
                      "background-color:" +
                      pomo.color +
                      "; width:" +
                      (pomo.nums * 100) / pomo.goal +
                      "% ; border-radius:4px 0 0 4px"
                    }
                  >
                    {(pomo.nums * 100) / pomo.goal}%
                  </h3>
                </div>
                <h3 class="col-span-2">{pomo.nums} Pomos</h3>
              </div>
            </Card>
          </Show>
        )}
      </For>
    </div>
  );
}
