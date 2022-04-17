import React, { useContext } from "react";
import CardItem from "../components/CardItem";
import DropContainer from "../components/DropContainer";
import Column from "../components/Column";
import {DataContext} from "../data/Data";

const Board = () => {
    const [items, setItems, tables] = useContext(DataContext);

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

    return (
        <div className={"row"}>
            {tables.map(t => {
                return (
                    <div key={t.name} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{t.name.toUpperCase()}</h2>
                        <DropContainer onDrop={onDrop} table={t.name}>
                            <Column>
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