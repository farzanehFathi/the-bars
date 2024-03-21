import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import Card from "../components/Card";
import WeekLog from "../components/WeekLog";

const fetchPomo = async (id) => {
  const res = await fetch("http://localhost:4001/pomos/" + id);
  return res.json();
};

export default function PomoReview() {
  const params = useParams();
  const [pomo] = createResource(params.id, fetchPomo);

  return (
    <div class="my-5">
      <Show when={pomo()} fallback={<p>Loading...</p>}>
        <Card>
          <div class="grid grid-cols-9 gap-2">
            <h2 class="col-span-2">Weekly Progress</h2>
            <div class="col-span-5 progress-bar">
              <h3
                class="text-end px-2 text-white"
                style={
                  "background-color:" +
                  pomo().color +
                  "; width:" +
                  pomo().progress +
                  "%"
                }
              >
                {pomo().progress}%
              </h3>
            </div>
            <h3 class="col-span-2">{pomo().nums} Pomos</h3>
          </div>
        </Card>
      </Show>
      <WeekLog />
    </div>
  );
}
