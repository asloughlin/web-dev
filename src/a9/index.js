import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build/components";

const A9 = () => {
  return(
    <div>
      <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
        <Practice/>
      </Route>
      <Route path="/a9/build">
        <Build/>
      </Route>
    </div>
  )
}

export default A9;
