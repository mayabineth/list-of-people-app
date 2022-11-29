import { createSlice } from "@reduxjs/toolkit";
interface types {
  persons: string[];
  amount: number;
  loading: boolean;
}
const initialState: types = {
  persons: [],
  amount: 10,
  loading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPersons: (state, { payload }) => {
      state.persons = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    calculateAmount: (state) => {
      state.amount = state.persons.length;
    },
  },
});

export const { setPersons, setLoading, calculateAmount } = cartSlice.actions;

export default cartSlice.reducer;
