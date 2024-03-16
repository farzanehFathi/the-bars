import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";

const fetchPomo = async (id) => {
  const res = await fetch("http://localhost:4000/pomos/" + id);
  return res.json;
};

export default function PomoLog() {
  const param = useParams();
  const [pomo] = createResource(param.id, fetchPomo);

  console.log(pomo());
  return (
    // <Show when={pomo()} fallback={"Loading..."}>
    <div>
      <p>this is for pomo + {pomo().pomo} </p>
    </div>
    // </Show>
  );
}
