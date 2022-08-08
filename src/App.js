import React from "react";
import Nav1 from "./Navbar/Nav1";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Website from "./Link/Website";
import Mobile from "./Link/Mobile";
import Desktop from "./Link/Desktop";
import Iot from "./Link/Iot";
import Contact from "./Link/Contact";
import Home from "./Link/Home";
import Career from "./Link/Career";


function App() {
  return (
    <>
<Router>
  <Nav1/>
<Routes>
<Route exact path="/"><App/></Route>
        <Route exact path="/Website"><Website/></Route>
        <Route exact path="/Mobile"><Mobile/></Route>
        <Route exact path="/Desktop"><Desktop/></Route>
        <Route exact path="/Iot"><Iot/></Route>
        <Route exact path="/Contact"><Contact/></Route>
        <Route exact path="/Career"><Career/></Route>
</Routes>
</Router>
</>
  );
}

export default App;