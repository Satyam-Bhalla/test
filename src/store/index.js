import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    currentFrame: 0,
    boxStructure: [],
}

const currentFrameMin = 0;




export const store = configureStore({ reducer: { reducerFnA } });
