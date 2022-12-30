import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Mypage } from "../components/pages/Mypage";

export const Router = memo(() => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/mypage">
        <Mypage />
      </Route>
    </Switch>
  );
});
