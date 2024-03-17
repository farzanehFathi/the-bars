import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";

const fetchPomo = async (id) => {
  const res = await fetch("http://localhost:4000/pomos/" + id);
  return res.json();
};

export default function PomoLog() {
  const params = useParams();

  const [pomo] = createResource(params.id, fetchPomo);

  console.log(pomo());
  return (
    <div>
      <Show when={pomo()} fallback={<p>Loading...</p>}>
        <h2>{pomo().pomo}</h2>
        <h3>{pomo().nums}</h3>
      </Show>
    </div>
  );
}
