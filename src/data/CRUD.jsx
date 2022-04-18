import React, {useState, useContext} from "react";
import {DataContext} from "./Data";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById('root'));

export const CreatePost = ({ show, onClose, table }) =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [items, setItems, tables, setTables, recentItems, setRecentItems] = useContext(DataContext);

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
                id: temp.length + 1,
                table: table,
                title: title,
                content: content
            };
            temp.push(tempItem);

            const tempRecent = [...recentItems];
            tempRecent.shift();
            tempRecent.push(tempItem);

            setItems(temp);
            setRecentItems(tempRecent);
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

export const EditPost = ({ show, onClose, item }) =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [items, setItems, tables, setTables] = useContext(DataContext);

    const postTitle = (e) =>{
        setTitle(e.target.value);
    }

    const postContent = (e) =>{
        setContent(e.target.value);
    }

    const editPost = e =>{
        e.preventDefault();

        if(title === "" || content === ""){
            return;
        }
        else{
            const temp = [...items];
            const tempItem = {
                id: item.id,
                table: item.table,
                title: title,
                content: content
            };
            
            temp[item.id-1] = tempItem;

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
                    <form onSubmit={editPost}>
                        <h3>Edit post:</h3>
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

export const DeletePost = ({ show, onClose, item }) =>{
    const [items, setItems, tables, setTables] = useContext(DataContext);

    const deletePost = e =>{
        e.preventDefault();

        const temp = [...items];
        for(var i = 0; i < temp.length; i++){
            if(temp[i].id === item.id){
                temp.splice(i, 1);
            }
        }

        setItems(temp);
        onClose();
    }

    return(
        <div>
            <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
                <div className={"close-bttn-ctn"}>
                    <button className="close-bttn" onClick={onClose}>X</button>
                </div>
                
                <div>
                    <form onSubmit={deletePost}>
                        <h3>Are you sure you want to delete this post?</h3>
                        <button type="submit">Yes</button>
                        <button className={"crud-bttn"} onClick={onClose}>No</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export const CreateTable = ({ show, onClose }) =>{
    const [name, setName] = useState('');
    const [items, setItems, tables, setTables] = useContext(DataContext);

    const nameTable = (e) =>{
        setName(e.target.value);
    }

    const createTable = e =>{
        e.preventDefault();

        if(name === ""){
            return;
        }
        else{
            const temp = [...tables];
            const tempTable = {
                index: temp.length + 1,
                name: name
            };

            temp.push(tempTable);

            setTables(temp);
            onClose();
            setName('');
        }
    }

    return(
        <div>
            <Modal isOpen={show} onRequestClose={onClose} className={"modal"} overlayClassName={"overlay"}>
                <div className={"close-bttn-ctn"}>
                    <button className="close-bttn" onClick={onClose}>X</button>
                </div>
                
                <div>
                    <form onSubmit={createTable}>
                        <p>New table:</p>
                        <input type="text" name="name" value={name} onChange={nameTable}/>
                        <br></br>
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
