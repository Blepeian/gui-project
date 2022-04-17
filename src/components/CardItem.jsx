import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import PopUp from "./PopUp";

const CardItem = ({ item, index, moveItem}) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,
        item: { ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    const [show, setShow] = useState(false);
    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);

    return (
        <Fragment>
            <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} className={"item"} onClick={onOpen}>
                <div className={"color-bar"}/>
                <p className={"item-title"}>{item.title}</p>
                <p className={"item-status"}>{item.icon}</p>
            </div>

            <PopUp item={item} onClose={onClose} show={show}/>
        </Fragment>
    );
};

export default CardItem;
