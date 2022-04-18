import React, {useContext, useState} from "react";
import Modal from "react-modal";
import { DataContext } from "../data/Data";

const AddLabels = ({onClose, show, item}) => {
    const [items, setItems, tables, setTables, recentItems, setRecentItems, labels, setLabels] = useContext(DataContext);

    const [ids, setIds] = useState('');
    const labelIds = (e) =>{
        if(e.target.checked){
            setIds(e.target.value);
        }
    }

    const addLabel = e =>{
        e.preventDefault();
    
        const temp = [...item.labels];
        labels.forEach(l => {
            if(ids.includes(l.id)){
                temp.push(l);
            }
        })

        item.labels = temp;

        const tempItems = [...items];
        tempItems.forEach(i => {
            if(i.id === item.id){
                i = item;
            }
        });
        setItems(tempItems);
        onClose();
    }

    return(
        <div>
            <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
                <div className={"close-bttn-ctn"}>
                    <button className="close-bttn" onClick={onClose}>X</button>
                </div>
                
                <div>
                    <form onSubmit={addLabel}>
                        <p>Choose a single label:</p>
                        {labels.map(l => {
                            return (
                                <div>
                                    <input name="checkbox" type="checkbox" value={l.id} onChange={labelIds}></input>
                                    <label for="checkbox">{l.text}</label>
                                </div>
                            );
                        })}
                        
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddLabels;