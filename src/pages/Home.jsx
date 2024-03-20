import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";
import VerticalCard from "../components/VerticalCard";

const fetchPomos = async () => {
  const res = await fetch("http://localhost:4001/pomos");
  return res.json();
};

export default function Home() {
  const [pomos] = createResource(fetchPomos);

  return (
    <div>
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

                <a href={"/pomolog/" + pomo.id}>
                  <div class="pomo center text-4xl">{pomo.pomo}</div>
                </a>
                <div
                  class="timer center text-3xl text-center"
                  style={
                    "color:" +
                    pomo.color +
                    "; border-top: 2px solid" +
                    pomo.color
                  }
                >
                  ⏳
                </div>
              </div>
            </VerticalCard>
          )}
        </For>
      </div>

      <Show when={pomos()} fallback={<p>Loading...</p>}>
        <For each={pomos()}>
          {(pomo) => (
            <Card>
              <a href={"/pomolog/" + pomo.id}>
                <h2 class="pomo">{pomo.pomo}</h2>
              </a>

              <div class={"bar"}>
                <p
                  class={"progress-bar"}
                  style={
                    "background:" +
                    pomo.color +
                    "; width:" +
                    pomo.progress +
                    "%"
                  }
                >
                  {pomo.progress}
                </p>
              </div>

              <h3 class="progress">{pomo.nums}</h3>
            </Card>
          )}
        </For>
      </Show>
    </div>
  );
}
