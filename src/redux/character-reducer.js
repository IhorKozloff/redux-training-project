import { createReducer } from "@reduxjs/toolkit";
import { incraseAgility, decraseAgility} from 'redux/character-actions'




const initialState = {
    name:"Caracters name",
    params: {
        agility: 10,
        strenght: 7,
    },
}

export const characterReducer = createReducer(initialState,{
    [incraseAgility]: (state, action) => state.params.agility + action.payload,
    [decraseAgility]: (state, action) => state.params.agility - action.payload,
})
