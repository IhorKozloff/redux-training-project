import { createAction } from "@reduxjs/toolkit";

export const incraseAgility = createAction('characterReducer/incraseAgility');
export const decraseAgility = createAction('characterReducer/decraseAgility');


// export const characterReducer = createReducer(initialState, {
//     [setName]: (state, action) => {
//         state.name = action.payload;
//         return state
//     },
