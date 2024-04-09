import { createResource } from "solid-js";
import { usePomoContext } from "../context/PomoContext";
import stopWatch from "../assets/emoji_u23f1.svg";

const fetchPomo = async (id) => {
  const res = await fetch("http://localhost:4001/pomos/" + id);
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

  return (
    <div onClick={addPomo}>
      <img src={stopWatch} width="50px" />
    </div>
  );
}
