import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Requestform from "./pages/Requestform";
import ResponseTimeline from "./pages/Responsetimeline";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/request" component={Requestform} />
        <Route path="/response" component={ResponseTimeline} />
      </Switch>
    </Router>
  );
}

export default App;
