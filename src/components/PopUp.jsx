import React, {useState} from "react";
import Modal from "react-modal";
import { DeletePost, EditPost } from "../data/CRUD";

Modal.setAppElement(document.getElementById('root'));

const PopUp = ({ show, onClose, item }) => {
    const [showEdit, setShowEdit] = useState(false);
    const onShowEdit = () => setShowEdit(true);
    const onCloseEdit = () => setShowEdit(false);

    const [showDelete, setShowDelete] = useState(false);
    const onShowDelete = () => setShowDelete(true);
    const onCloseDelete = () => setShowDelete(false);
    return (
        <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
            <div className={"close-bttn-ctn"}>
                <button className="close-bttn" onClick={onClose}>X</button>
            </div>

            <div>
                <h2>{item.title}</h2>
                <p>-----------------------------------------</p>
                <h3>Description</h3>
                <p>{item.content}</p>
                <p>-----------------------------------------</p>
                <br></br>
            </div>

            <div>
                <button className={"crud-bttn"} onClick={onShowEdit}>Edit</button>
                <EditPost onClose={onCloseEdit} show={showEdit} item={item}/>
                <button className={"crud-bttn"} onClick={onShowDelete}>Delete</button>
                <DeletePost onClose={onCloseDelete} show={showDelete} item={item}/>
            </div>
        </Modal>
    );
};

export default PopUp;
