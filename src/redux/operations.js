import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getContactsLoad, getContactsSucess, getContactsError } from 'redux/actions'
axios.defaults.baseURL = 'https://62860485f0e8f0bb7c0e5d72.mockapi.io/';

// export const getAllContacts = () => async dispatch => {

//     dispatch(getContactsLoad()); 


//     try {
//         const data = await axios.get('contacts').then(result => result.data)
//         dispatch(getContactsSucess(data))
//     }
//     catch (error) {
//         dispatch(getContactsError(error))
//     }

// }

export const getAllContactsThunk = createAsyncThunk(
    'phonebook/getContacts',
    async () => {
      const response = await axios.get('contacts').then(result => result.data)
      return response
    }
  )