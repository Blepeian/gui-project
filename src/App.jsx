import React, {useState} from "react";
import {Home, AuthProvider} from "./pages/Homepage"
import Board from "./pages/Board";
import RecentItems from "./pages/RecentItems";
import Archive from "./pages/Archive";
import Navbar from "./components/Navbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {DataProvider} from "./data/Data";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <DndProvider backend={HTML5Backend}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/board' component={Board} />
              <Route path='/recent' component={RecentItems} />
              <Route path='/archive' component={Archive} />
            </Switch>
          </Router>
        </DndProvider>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
