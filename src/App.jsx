import React, {useState} from "react";
import Board from "./pages/Board";
import RecentItems from "./pages/RecentItems";
import Navbar from "./components/Navbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {DataProvider} from "./data/Data";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <DataProvider>
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Navbar />
          <br></br>
          <br></br>
          <Switch>
            <Route exact path='/' component={Board} />
            <Route path='/recent' component={RecentItems} />
          </Switch>
        </Router>
      </DndProvider>
    </DataProvider>
  );
};

export default App;
