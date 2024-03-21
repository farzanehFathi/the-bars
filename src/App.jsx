import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import PomoReview from "./pages/PomoReview";
import Time from "./components/Time";

function App() {
  return (
    <div class="container">
      <header>
        <a href="/">
          <h1 class="text-3xl font-bold">{Time()}</h1>
        </a>
      </header>
      <hr />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/pomoreview/:id" component={PomoReview} />
      </Router>
    </div>
  );
}

export default App;
