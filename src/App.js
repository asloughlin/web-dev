import './App.css'
import HelloWorld6 from "./components/a6/HelloWorld";
import Practice6 from "./components/a6/Practice/index.js";
import Build6 from "./components/a6/Build/index.js";
import Practice7 from "./components/a7/Practice/index.js";
import Build7 from "./components/a7/Build/index.js";
import Practice8 from "./a8/Practice/index.js";
import Build8 from "./a8/Build/components/index.js";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h1>Assignment 6</h1>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld6/>
                </Route>
                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <Practice6/>
                </Route>
                <Route path="/a6/build" exact={true}>
                    <Build6/>
                </Route>
                <br></br>
                <h1>Assignment 7</h1>
                <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                    <Practice7/>
                </Route>
                <Route path="/a7/build">
                    <Build7/>
                </Route>
                <br></br>
                <h1>Assignment 8</h1>
                <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                    <Practice8/>
                </Route>
                <Route path="/a8/build">
                    <Build8/>
                </Route>
            </div>
        </BrowserRouter>
    );
}
export default App;

