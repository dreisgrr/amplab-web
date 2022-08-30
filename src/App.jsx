import "./App.css";
import {BrowserRouter as Router, Routes, Route, Redirect, useRouteMatch, useParams } from "react-router-dom";
import Landing from "./Landing";
import AskMara from "./AskMara";
import Proceed from "./Proceed";
import VoucherCode from "./VoucherCode";
import Thankyou from "./Thankyou";
import { Fragment } from "react";

function App() {

  return (
    <Router>
      <Fragment>
      <Routes>
      <Route exact path='/HealthNowVoucher' element={<AskMara/>}>
      </Route>
      <Route exact path='/Proceed' element={<Proceed/>}>
      </Route>
      <Route exact path='/VoucherCode' element={<VoucherCode/>}>
      </Route>
      <Route exact path='/Thankyou' element={<Thankyou/>}>
      </Route>
      <Route exact path='/' element={<Landing/>}>
      </Route>
      </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
