import { configureStore } from '@reduxjs/toolkit'
import { characterReducer } from 'redux/character-reducer'


export const store = configureStore({
  reducer: {
      characterAttributes: characterReducer,
  },
})