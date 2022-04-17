import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById('root'));

const PopUp = ({ show, onClose, item }) => {
    return (
        <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
            <div className={"close-bttn-ctn"}>
                <button className="close-bttn" onClick={onClose}>X</button>
            </div>

            <div>
                <h2>{item.title}</h2>
                <h3>Description</h3>
                <p>{item.content}</p>
            </div>
        </Modal>
    );
};

export default PopUp;
