import { For, Show, createResource } from "solid-js";
import VerticalCard from "../components/VerticalCard";
import WeekLog from "../components/WeekLog";
import PomoLoger from "../components/PomoLoger";

const fetchPomos = async () => {
  const res = await fetch("http://localhost:4001/pomos");
  return res.json();
};

export default function Home() {
  const [pomos] = createResource(fetchPomos);

  return (
    <div>
      <Show when={pomos()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-10 my-4">
          <For each={pomos()}>
            {(pomo) => (
              <VerticalCard>
                <div
                  class="grid grid-cols-1"
                  style={"border:2px solid" + pomo.color}
                >
                  <div
                    class="counter center text-3xl text-white"
                    style={"background:" + pomo.color}
                  >
                    {pomo.nums}
                  </div>

                  <a href={"/pomoreview/" + pomo.id}>
                    <div class="pomo center text-4xl">{pomo.pomo}</div>
                  </a>
                  <div
                    class="timer center text-3xl text-center"
                    style={
                      "cursor: pointer; color:" +
                      pomo.color +
                      "; border-top: 2px solid" +
                      pomo.color
                    }
                  >
                    <PomoLoger id={pomo.id} />
                  </div>
                </div>
              </VerticalCard>
            )}
          </For>
        </div>
      </Show>
      <WeekLog id={"1"} />
      <WeekLog id={"2"} />
      <WeekLog id={"3"} />
      <WeekLog id={"4"} />
      <WeekLog id={"5"} />
    </div>
  );
}
