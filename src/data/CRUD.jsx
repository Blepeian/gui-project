import React, {useState, useContext} from "react";
import {DataContext} from "./Data";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById('root'));

export const CreatePost = ({ show, onClose, table }) =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [items, setItems, tables, setTables] = useContext(DataContext);

    const postTitle = (e) =>{
        setTitle(e.target.value);
    }

    const postContent = (e) =>{
        setContent(e.target.value);
    }

    const createPost = e =>{
        e.preventDefault();

        if(title === "" || content === ""){
            return;
        }
        else{
            const temp = [...items];
            const tempItem = {
                index: temp.length + 1,
                table: table,
                title: title,
                content: content
            };
            temp.push(tempItem);

            setItems(temp);
            onClose();
            setTitle('');
            setContent('');
        }
    }

    return(
        <div>
            <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
                <div className={"close-bttn-ctn"}>
                    <button className="close-bttn" onClick={onClose}>X</button>
                </div>
                
                <div>
                    <form onSubmit={createPost}>
                        <h3>New post:</h3>
                        <p>Title:</p>
                        <input type="text" name="title" value={title} onChange={postTitle}/>
                        <p>Content:</p>
                        <input type="text" name="content" value={content} onChange={postContent}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
