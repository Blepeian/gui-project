import React, { useContext, useState} from "react";
import CardItem from "../components/CardItem";
import DropContainer from "../components/DropContainer";
import Column from "../components/Column";
import {DataContext} from "../data/Data";
import { CreateTask, CreateTable } from "../data/CRUD";
import {withRouter} from "react-router";

const Board = () => {
    const [items, setItems, tables] = useContext(DataContext);

    const [show, setShow] = useState(false);
    const onClose = () => setShow(false);

    const [showTable, setShowTable] = useState(false);
    const onShowTable = () => setShowTable(true);
    const onCloseTable = () => setShowTable(false);

    const onDrop = (item, monitor, table) => {
        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, table});
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    const [name, setName] = useState('');
    const handleInput = (e) => {
        setName(e.target.value);
        setShow(true);
    }

    return (
        <div className={"row"}>
            <button onClick={onShowTable} className={"add-table-bttn"}>+</button>
            <CreateTable onClose={onCloseTable} show={showTable}/>

            {tables.map(t => {
                return (
                    <div key={t.name} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{t.name.toUpperCase()}</h2>
                        <button className={"add-bttn"} onClick={handleInput} value={t.name}>+</button>

                        <DropContainer onDrop={onDrop} table={t.name}>
                            <Column>
                                <CreateTask onClose={onClose} show={show} table={name}/>
                                {items
                                    .filter(i => i.table === t.name)
                                    .map((i, idx) => <CardItem key={i.id} item={i} index={idx} moveItem={moveItem} table={t} />)
                                }
                            </Column>
                        </DropContainer>
                    </div>
                );
            })}
        </div>
    );
};

export default withRouter(Board);