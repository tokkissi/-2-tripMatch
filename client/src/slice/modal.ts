import { createSlice } from "@reduxjs/toolkit";

interface ModalType {
  show: boolean;
  element: null | string | string[]; // [title, content, button text, cancleButton text]
}

const initialState: ModalType = { show: false, element: null };

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModal: (state, action) => ({ show: true, element: action.payload }),
    closeModal: (state) => ({ ...state, show: false }),
  },
});

export const { showModal, closeModal } = modalSlice.actions;
