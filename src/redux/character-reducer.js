import { createReducer } from "@reduxjs/toolkit";
import { incraseAgility, decraseAgility, incraseStrenght, decraseStrenght} from 'redux/character-actions'




const initialState = {
    name:"Characters name",
    params: {
        agility: 10,
        strenght: 7,
    },
}

export const characterReducer = createReducer(initialState,{
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




})
