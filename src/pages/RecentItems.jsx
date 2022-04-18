import React, { useContext } from "react";
import {DataContext} from "../data/Data";
import CardItem from "../components/CardItem";

const RecentItems = () => {
    const [items, setItems, tables, setTables, recentItems, setRecentItems] = useContext(DataContext);

    return (
        <div className="login-form">
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
            })}
        </div>
    );
}

export default RecentItems;
