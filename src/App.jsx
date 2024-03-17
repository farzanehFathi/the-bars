import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import MonthLog from "./pages/MonthLog";
import PomoLog from "./pages/PomoLog";

function App() {
  return (
    <div class="container m-auto">
      <header>
        <a href="/">
          <h1 class="text-3xl font-bold">This is my bars app</h1>
        </a>
        <a href="/monthlog">Month log</a>
      </header>

      <Router>
        <Route path="/" component={Home} />
        <Route path="/monthlog" component={MonthLog} />
        <Route path="/pomolog/:id" component={PomoLog} />
      </Router>
    </div>
  );
}

export default App;
