import { usePomoContext } from "../context/PomoContext";

export default function PomoLoger(props) {
  const { pomos, setPomos } = usePomoContext();
  const currentPomo = () => pomos.find((p) => p.id === props.id);

  const addPomo = () => {
    setPomos(
      (p) => p.id === props.id,
      "nums",
      (n) => n + 1
    );
  };

  return (
    <Show when={currentPomo()} fallback={<div>🖱</div>}>
      <img src={currentPomo().clickIcon} onClick={addPomo} alt="Pomo" />
    </Show>
  );
}
