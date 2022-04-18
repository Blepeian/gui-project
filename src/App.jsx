import React, {useState} from "react";
import Board from "./pages/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {DataProvider} from "./data/Data";
import { CreateTable } from "./data/CRUD";

const App = () => {
  const [show, setShow] = useState(false);
  const onShow = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <DataProvider>
      <DndProvider backend={HTML5Backend}>
          <div className={"row"}>
            <p className={"page-header"}>Trello Clone For GUI HW</p>
          </div>

          <button onClick={onShow}>+</button>
          <CreateTable onClose={onClose} show={show}/>
          <Board />
      </DndProvider>
    </DataProvider>
  );
};

export default App;
