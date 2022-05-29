import { createAction } from "@reduxjs/toolkit";


// Characters
export const rename = createAction('characterReducer/rename')

export const incraseAgility = createAction('characterReducer/incraseAgility');
export const decraseAgility = createAction('characterReducer/decraseAgility');


export const incraseStrenght = createAction('characterReducer/incraseStrenght');
export const decraseStrenght = createAction('characterReducer/decraseStrenght');

export const resetCharacter = createAction(`characterReducer/resetCharacter`)

// Weapon

export const setWeapon = createAction('weaponReducer/setWeapon');
export const resetWeapon = createAction(`weaponReducer/resetWeapon`)