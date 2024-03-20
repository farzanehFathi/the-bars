import { Show, createResource } from "solid-js";
import Card from "../components/Card";

const fetchPomos = async () => {
  const res = await fetch("http://localhost:4001/pomos");
  return res.json();
};

export default function Home() {
  const [pomos] = createResource(fetchPomos);

  return (
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
                  "background:" + pomo.color + "; width:" + pomo.progress + "%"
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
  );
}
