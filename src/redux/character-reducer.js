import { createReducer } from "@reduxjs/toolkit";
import { rename, incraseAgility, decraseAgility, incraseStrenght, decraseStrenght, resetCharacter} from 'redux/actions'




const initialState = {
    name:"Characters name",
    params: {
        agility: 10,
        strenght: 7,
    },
}

export const characterReducer = createReducer(initialState,{

    [rename]: (state, action) => {
        state.name = action.payload;
        return state;
    },

    [incraseAgility]: (state, action) => {
        state.params.agility += action.payload
        return state
    },
    [decraseAgility]: (state, action) => {
        state.params.agility -= action.payload
        return state
    },

    [incraseStrenght]: (state, action) => {
        state.params.strenght += action.payload
        return state
    },
    [decraseStrenght]: (state, action) => {
        state.params.strenght -= action.payload
        return state
    },

    [resetCharacter]: (state) => state = initialState



})
