import Card from "./components/Card";

function App() {
  return (
    <div class="container m-auto">
      <header>
        <h1 class="text-3xl font-bold">This is my bars app</h1>
      </header>
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

export default App;
