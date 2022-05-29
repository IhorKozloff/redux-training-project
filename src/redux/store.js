import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from 'redux/character-slice'
import { weaponReducer } from 'redux/weapon-reducer'
import  phonebookRedusers from 'redux/phonebook-reducer'



export const store = configureStore({
  reducer: {
      characterAttributes: characterSlice.reducer,
      weaponAttributes: weaponReducer,
      phonebook: phonebookRedusers,

  },
})