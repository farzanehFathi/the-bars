import { createResource } from "solid-js";
import { usePomoContext } from "../context/PomoContext";

const fetchPomo = async (id) => {
  const res = await fetch("http://localhost:4000/pomos/" + id);
  return res.json();
};

export default function PomoLoger(props) {
  const [pomo] = createResource(props.id, fetchPomo);

  const { pomos, setPomos } = usePomoContext();

  const addPomo = () => {
    const exsits = pomos.find((p) => p.id === pomo().id);
    if (exsits) {
      setPomos(
        (p) => p.id === pomo().id,
        "nums",
        (n) => n + 1
      );
    }
    if (!exsits) {
      setPomos([...pomos, { ...pomo(), nums: 1 }]);
    }
  };

  return <div onClick={addPomo}>⏱</div>;
}
