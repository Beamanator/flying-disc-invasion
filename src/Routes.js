import React from "react";
import { Route, Switch } from "react-router-dom";

// event routes
// -> erupt2020
import Erupt2020Agenda from "./components/pages-public/erupt2020/agenda";
import Erupt2020Home from "./components/pages-public/erupt2020/home";
import Erupt2020PoolPlay from "./components/pages-public/erupt2020/poolPlay";
import Erupt2020Rankings from "./components/pages-public/erupt2020/rankings";
// -> swift2019
import Swift2019Agenda from "./components/pages-public/swift2019/agenda";
import Swift2019Bracket from "./components/pages-public/swift2019/bracketPlay";
import Swift2019Home from "./components/pages-public/swift2019/home";
import Swift2019PoolPlay from "./components/pages-public/swift2019/poolPlay";

import Welcome from "./components/pages-public/welcome";

// other
import NotFound from "./components/pages-public/notFound";

const Routes = () => (
    <Switch>
        {/* main welcome page */}
        <Route exact path="/welcome" component={Welcome} />

        {/* erupt-2020 event routes */}
        <Route exact path="/erupt-2020/agenda" component={Erupt2020Agenda} />
        <Route
            exact
            path={["/erupt-2020", "/erupt-2020/home"]}
            component={Erupt2020Home}
        />
        <Route exact path="/erupt-2020/pool" component={Erupt2020PoolPlay} />
        <Route
            exact
            path="/erupt-2020/rankings"
            component={Erupt2020Rankings}
        />

        {/* swift-2019 event routes */}
        <Route exact path="/swift-2019/agenda" component={Swift2019Agenda} />
        <Route exact path="/swift-2019/bracket" component={Swift2019Bracket} />
        <Route
            exact
            path={["/swift-2019", "/swift-2019/home"]}
            component={Swift2019Home}
        />
        <Route exact path="/swift-2019/pool" component={Swift2019PoolPlay} />

        {/* 404 Not Found Page */}
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
