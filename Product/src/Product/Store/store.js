import SliceReducer from "./Slice";
import { configureStore } from '@reduxjs/toolkit';

const store =  configureStore({
    reducer : {
        Slice : SliceReducer ,
    }
    
}); 

export default store;