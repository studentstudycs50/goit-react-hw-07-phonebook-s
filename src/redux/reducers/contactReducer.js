import { createReducer } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, setFilter, getContacts, setLoading, setError } from "../actions/contactActions";

const initialState = {
    contacts: [],
    filter: "", 
    isLoading: false,
    error: "",
    
}

const onAddNewContact = (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload]
})

const onDeleteContact = (state, action) => ({
    ...state,
    contacts: [...state.contacts.filter(item => item.id !== action.payload)]
})

const onSetFilter = (state, action) => ({
    ...state,
    filter: action.payload,
})


const onGetContacts = (state, action) => ({
    ...state,
    contacts: [...action.payload]
})

const onSetLoading = (state, action) => ({
    ...state, 
    isLoading: !state.isLoading
})

const onSetError = (state, action) => ({
    ...state,
    error: action.payload
})

const contactReducer = createReducer({ ...initialState },
    {
  
    [addNewContact]: onAddNewContact,
    [deleteContact]: onDeleteContact,
    [setFilter]: onSetFilter,
    [getContacts]: onGetContacts,
    [setLoading]: onSetLoading,
    [setError]: onSetError,

})

export default contactReducer;