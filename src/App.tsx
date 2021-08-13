import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SiteProvider from "./contexts/siteContext";
import Details from "./pages/Details";

function App() {
  return (
    <SiteProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:url" component={Details} />
        </Switch>
      </Router>
    </SiteProvider>
  );
}

export default App;
