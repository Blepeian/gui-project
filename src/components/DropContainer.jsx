import React, {useContext} from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import {DataContext} from "../data/Data";

const DropContainer = ({ onDrop, children, table }) => {
    const [tables, setTables] = useContext(DataContext);

    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex = tables.findIndex(si => si.name === item.table);
            const tableIndex = tables.findIndex(si => si.name === table);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(tableIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, table);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, { isOver })}
        </div>
    )
};

export default DropContainer;