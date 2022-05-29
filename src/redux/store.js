import { configureStore } from '@reduxjs/toolkit'
import { characterReducer } from 'redux/character-reducer'
import { weaponReducer } from 'redux/weapon-reducer'


export const store = configureStore({
  reducer: {
      characterAttributes: characterReducer,
      weaponAttributes: weaponReducer,
  },
})