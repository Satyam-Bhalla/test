import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/main.module.scss";

export default function MainImage({ imageSrc }) {
    const canvas = useRef();
    const dispatch = useDispatch();
    const [runCheck, setRunCheck] = useState(false);
    const [newCords, setNewCords] = useState(useSelector((state) => state.reducerFnA.boxStructure));

    const getCoodinates = () => {
        const dom = document.getElementById("img");
        dom.addEventListener('mousedown', (e) => {
            setNewCords((items) => { return { ...items, x1: e.offsetX, y1: e.offsetY, x4: e.offsetX, y2: e.offsetY } });
        });
        dom.addEventListener('mouseup', (e) => {
            setNewCords((items) => { return { ...items, x3: e.offsetX, y3: e.offsetY, x2: e.offsetX, y4: e.offsetY } });
        });
        const width = Math.abs(newCords.x2 - newCords.x1);
        const height = Math.abs(newCords.y2 - newCords.y3);
        setNewCords((items) => { return { ...items, width, height, id: Math.floor(Math.random() * 100) } });
        // Add setter function to update state
        // dispatch({ type: "updateBoxStructure", payload: newCords });
        drawRect();
        setRunCheck(false);
    }

    const drawRect = () => {
        const dom = document.getElementById("img");
        const ctx = dom.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "black"
        ctx.rect(newCords.x1, newCords.y1, newCords.width, newCords.height);
        ctx.stroke();
    }

    useEffect(() => {
        getCoodinates();
        // setTimeout(() => {
        //     dispatch({ type: "updateBoxStructure", payload: newCords });
        // }, 200);
    }, [runCheck]);
    console.log(newCords);
    return (
        <canvas
            onMouseDown={() => { setRunCheck(true) }}
            ref={canvas}
            id="img"
            style={{ backgroundImage: `url(${imageSrc})` }}
            className={styles.mainImg}>
        </canvas>
    );
}