import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addNewContact = createAction('@contacts/addNewContact',
   (data) => ({
      payload: {
     ...data, id: uuidv4()
 }})
);
export const setError = createAction("@contacts/setError");

export const setLoading = createAction("@contacts/setLoading");
  
export const deleteContact = createAction('@contacts/deleteContact');

export const getContacts = createAction('@contacts/getContacts');

export const setFilter = createAction('@contacts/setFilter');