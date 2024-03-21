import { For } from "solid-js";
import { usePomoContext } from "../context/PomoContext";

export default function WeekLog() {
  const { pomos } = usePomoContext();

  return (
    <div>
      this is weekly progress of
      <For each={pomos}>
        {(pomo) => (
          <p class="my-3">
            {" "}
            {pomo.pomo} * {pomo.nums}
          </p>
        )}
      </For>
    </div>
  );
}
