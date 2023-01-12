import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    currentFrame: 0,
    boxStructure: [],
}

const currentFrameMin = 0;


const reducerFnA = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT":
            return ({ currentFrame: state.currentFrame + 1 });
        case "PREV":
            return (state.currentFrame > currentFrameMin ? { currentFrame: state.currentFrame - 1 }
                : { currentFrame: state.currentFrame });
        case "updateBoxStructure":
            return ({ ...state, boxStructure: [...state.boxStructure, action.payload] });
        case "deleteBox":
            return ({ ...state, boxStructure: state.boxStructure.filter((box) => box.id !== action.payload) });
        default:
            return state;
    }
};

export const store = configureStore({ reducer: { reducerFnA } });