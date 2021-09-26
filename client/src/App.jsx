import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import CreateReview from "./routes/CreateReview";
import UpdateEntry from "./routes/UpdateEntry";
import { HousingContextProvider } from "./context/HousingContext";

const App = () => {
  return (
    <HousingContextProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/housingReview/:id/" component={CreateReview} />
            <Route
              exact
              path="/housingReview/:id/update"
              component={UpdateEntry}
            />
          </Switch>
        </Router>
      </div>
    </HousingContextProvider>
  );
};

export default App;
