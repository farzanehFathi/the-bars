import Card from "../components/Card";

export default function MonthLog() {
  return (
    <div>
      <h1>these are month logs</h1>
      <Card>
        <h2 class="pomo">🍅</h2>
        <p class="bar bar1">.</p>
        <h3 class="percent">55%</h3>{" "}
      </Card>
      <Card>
        <h2 class="pomo">🍋</h2>
        <p class="bar bar2">.</p>
        <h3 class="percent">48%</h3>{" "}
      </Card>
      <Card>
        {" "}
        <h2 class="pomo">🥦</h2>
        <p class="bar bar3">.</p>
        <h3 class="percent">67%</h3>{" "}
      </Card>
    </div>
  );
}
