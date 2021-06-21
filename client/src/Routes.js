import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home"
import Chat from './chat'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat" render={(props) => <Chat {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
