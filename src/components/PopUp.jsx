import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById('root'));

const PopUp = ({ show, onClose, item }) => {
    return (
        <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
            <div className={"close-bttn-ctn"}>
                <h2 style={{ flex: "1 90%" }}>{item.title}</h2>
                <button className="close-bttn" onClick={onClose}>X</button>
            </div>

            <div>
                <h3>Description</h3>
                <p>{item.content}</p>
            </div>
        </Modal>
    );
};

export default PopUp;
