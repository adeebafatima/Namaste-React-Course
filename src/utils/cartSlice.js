import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(older) Redux => DON'T MUTATE STATE, return is mandate
      // We use to copy state , update that and return that
      // const newState = {...state};
      // newState.items.push(action.payload);
      // return newState;

      // RTK - Redux Tool Kit
      // Now we have to mutate the state , return is not mandate
      // RTK has abstracted vanilla redux thing from developers but behind the scene it is doing the same - using immer https://immerjs.github.io/immer/
      // RTK is creating a immutable state - Immer finds difference between original state and mutated state gives you a new state - immutable state
      // Mutating data ⬇️
      state.items.push(action.payload); // Due to this - Impure Function
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // console.log(current(state));
      // state = [] // Won't work because you are mutating the state .You are changing the reference of state
      // console.log(state);


      // RTK - Mutate the state or return the new state(new state will replace the original state)
      // state.items.length = 0;  or return {items:[]};
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


// Redux DevTools Extension
// Read RTK Query - In older redux we use thunk, middleware for async operation
