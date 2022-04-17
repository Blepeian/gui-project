import React from "react";
import Board from "./pages/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {DataProvider} from "./data/Data";

const App = () => {return (
    <DataProvider>
      <DndProvider backend={HTML5Backend}>
          <div className={"row"}>
            <p className={"page-header"}>Trello Clone For GUI HW</p>
          </div>
          <button>
            +
          </button>
          <Board />
      </DndProvider>
    </DataProvider>
  );
};

export default App;
