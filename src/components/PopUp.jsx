import React, {useState, useContext} from "react";
import Modal from "react-modal";
import { DeleteTask, EditTask } from "../data/CRUD";
import AddLabels from "./Labels";
import {DataContext} from "../data/Data";

Modal.setAppElement(document.getElementById('root'));

const PopUp = ({ show, onClose, item }) => {
    const [showEdit, setShowEdit] = useState(false);
    const onShowEdit = () => setShowEdit(true);
    const onCloseEdit = () => setShowEdit(false);

    const [showDelete, setShowDelete] = useState(false);
    const onShowDelete = () => setShowDelete(true);
    const onCloseDelete = () => setShowDelete(false);

    const [showLabels, setShowLabels] = useState(false);
    const onShowLabels = () => setShowLabels(true);
    const onCloseLabels = () => setShowLabels(false);

    const [items, setItems] = useContext(DataContext);

    const archive = () => {
        if(item.table === "archive"){
            item.table = "done";
        }
        else{
            item.table = "archive";
        }

        const temp = [...items];
        temp.forEach(i => {
            if(i.id === item.id){
                i = item;
            }
        });
        setItems(temp);
        onClose();
    }

    return (
        <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
            <div className={"close-bttn-ctn"}>
                <button className="close-bttn" onClick={onClose}>X</button>
            </div>
            
            <div>
                <h2>{item.title}</h2>
                {
                    item.labels.map(l => <p style={{
                        "background-color":l.color,
                        "width": 'fit-content'}}>{l.text}</p>)
                }
                <button className={"add-label-bttn"} onClick={onShowLabels}>Add labels</button>
                <AddLabels onClose={onCloseLabels} show={showLabels} item={item}/>
                <p>-----------------------------------------</p>
                <h3>Description</h3>
                <p>{item.content}</p>
                <p>-----------------------------------------</p>
                <br></br>
            </div>

            <div className={"cruds"}>
                <button className={"crud-bttn"} onClick={onShowEdit}>Edit</button>
                <EditTask onClose={onCloseEdit} show={showEdit} item={item}/>
                <button className={"crud-bttn"} onClick={onShowDelete}>Delete</button>
                <DeleteTask onClose={onCloseDelete} show={showDelete} item={item}/>
                <button className={"crud-bttn"} onClick={archive}>Archive/Unarchive</button>
            </div>
        </Modal>
    );
};

export default PopUp;
