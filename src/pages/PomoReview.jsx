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

  const stringId = params.id.toString();

  return (
    <div class="my-5">
      <Show when={pomo()} fallback={<p>Loading...</p>}>
        <WeekLog id={stringId} />
      </Show>
    </div>
  );
}
