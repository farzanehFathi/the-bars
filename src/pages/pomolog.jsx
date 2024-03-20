import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import Card from "../components/Card";

const fetchPomo = async (id) => {
  const res = await fetch("http://localhost:4001/pomos/" + id);
  return res.json();
};

export default function PomoLog() {
  const params = useParams();

  const [pomo] = createResource(params.id, fetchPomo);

  console.log(pomo());
  return (
    <div>
      <Show when={pomo()} fallback={<p>Loading...</p>}>
        <h2 class="pomo">{pomo().pomo}</h2>
        <Card>
          <div class={"bar"}>
            <h3 class="pomo">Weekly</h3>
            <p
              class={"progress-bar"}
              style={
                "background:" +
                pomo().color +
                "; width:" +
                pomo().progress +
                "%"
              }
            >
              {pomo().progress}
            </p>
          </div>

          <h3 class="progress">{pomo().nums}</h3>
        </Card>
      </Show>
    </div>
  );
}
