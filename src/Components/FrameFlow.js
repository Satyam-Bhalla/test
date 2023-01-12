import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/main.module.scss";

export default function FrameFlow() {
    const dispatch = useDispatch();
    const currentFrame = useSelector((state) => state.reducerFnA.currentFrame);
    const setNextFrame = () => {
        dispatch({ type: "NEXT" });
    }
    const setPrevFrame = () => {
        dispatch({ type: "PREV" });
    }
    console.log(currentFrame);
    return (
        <div className={styles.frameFlowContainer}>
            <button className={styles.btn} onClick={setPrevFrame}>Previous Frame</button>
            <button className={styles.btn} onClick={setNextFrame}>Next Frame</button>
        </div>
    );
}