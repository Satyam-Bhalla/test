import React from "react";
import { useSelector } from "react-redux";

export default function BoundingBox() {
    // const boxes = useSelector((state) => state.reducerFnB.boxStructure);
    return (
        <div>
            <label>Bounding Boxes</label>
            {/* map through boxes state */}
            {/* {boxes.map((box, index) => {
                <div>
                    <label>Box {index} with x: {box.x1}, y: {box.y1}, width: {box.width}, height: {box.height}</label>
                    <button>Delete</button>
                </div>
            })} */}
        </div>
    );
}