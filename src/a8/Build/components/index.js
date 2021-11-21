import React from "react";

import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen/index.js";
import who from "../reducers/who";
import tweets from "../reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path="/a8/build/explore"
                        exact={true} component={ExploreScreen}/>
                <Route path={["/", "/a8/build/home"]}
                        exact={true} component={HomeScreen}/>
            </div>
        </Provider>
    );
};
export default Build;

