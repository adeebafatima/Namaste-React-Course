import { configureStore } from "@reduxjs/toolkit"; //@reduxjs/toolkit has things to do with redux, creating a store is a redux thing
import cartReducer from './cartSlice'
const appStore = configureStore({
    //One BIG reducer, Each slice has its own reducer
    reducer:{
        cart:cartReducer
    }
});

export default appStore;