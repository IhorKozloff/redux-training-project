import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import {  getContactsSucess, getContactsLoad, getContactsError } from 'redux/actions'
import { getAllContactsThunk } from 'redux/operations'

const phonebookReducer = createReducer([],{
    [getAllContactsThunk.fulfilled]: (state, actions) => state = actions.payload,
});


const loadingPhonebookReducer = createReducer(false,{
    [getAllContactsThunk.pending]: () => true,
    [getAllContactsThunk.fulfilled]: () => false,
    [getAllContactsThunk.rejected]: () => false,
});

export default combineReducers({
    phonebookReducer,
    loadingPhonebookReducer,
})