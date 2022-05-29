import { createReducer } from "@reduxjs/toolkit";
import { setWeapon, resetWeapon } from "redux/actions";

const initialState = {
    weaponName: "Frostmourne",
    damage: 100,
    durability: 89,
};

export const weaponReducer = createReducer(initialState, {
    [setWeapon]: (state, actions) => state = actions.payload,

    [resetWeapon]: state => state = initialState,
});