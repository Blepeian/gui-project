import React, { useContext } from "react";
import {DataContext} from "../data/Data";
import CardItem from "../components/CardItem";
import DropContainer from "../components/DropContainer";
import Column from "../components/Column";

const Archive = () => {
    const [items, setItems, tables, setTables] = useContext(DataContext);

    return(
        <div key={"archive"} className={"col-wrapper"}>
            <h2 className={"col-header"}>Archive</h2>

            <DropContainer table={"archive"}>
                <Column>
                    {items
                        .filter(i => i.table === "archive")
                        .map((i, idx) => <CardItem key={i.id} item={i} index={idx} table={"archive"} />)
                    }
                </Column>
            </DropContainer>
        </div>
    )
}

export default Archive;