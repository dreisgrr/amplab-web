import "./App.css";
import {BrowserRouter as Router, Routes, Route, Redirect, useRouteMatch, useParams } from "react-router-dom";
import Landing from "./Landing";
import AskMara from "./AskMara"
import { Fragment } from "react";

function App() {

  return (
    <Router>
      <Fragment>
      <Routes>
      <Route exact path='/askMara' element={<AskMara/>}>
      </Route>
      <Route exact path='/' element={<Landing/>}>
      </Route>
      </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
