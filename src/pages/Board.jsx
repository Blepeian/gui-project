import React, { useContext, useState} from "react";
import CardItem from "../components/CardItem";
import DropContainer from "../components/DropContainer";
import Column from "../components/Column";
import {DataContext} from "../data/Data";
import { CreatePost } from "../data/CRUD";

const Board = () => {
    const [items, setItems, tables] = useContext(DataContext);

    const [show, setShow] = useState(false);
    const onClose = () => setShow(false);

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
            {tables.map(t => {
                return (
                    <div key={t.name} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{t.name.toUpperCase()}</h2>
                        <button className={"add-bttn"} onClick={handleInput} value={t.name}>+</button>

                        <DropContainer onDrop={onDrop} table={t.name}>
                            <Column>
                                <CreatePost onClose={onClose} show={show} table={name}/>
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

export default Board;