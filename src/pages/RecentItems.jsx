import React, { useContext, useState} from "react";
import {DataContext} from "../data/Data";
import CardItem from "../components/CardItem";

const RecentItems = () => {
    const [items, setItems, tables, setTables, recentItems, setRecentItems] = useContext(DataContext);

    return (
        <div>
            <h1>Recent Tasks</h1>
            {recentItems.map(r => {
                return (
                    <div key={r.item_id}>
                        {items
                            .filter(i => i.id === r.item_id)
                            .map((i, idx) => <CardItem key={i.id} item={i} index={idx}/>)
                        }
                    </div>
                );
                {console.log(recentItems)};
            })}
        </div>
    );
}

export default RecentItems;
