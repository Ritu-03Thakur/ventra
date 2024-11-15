import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   username : "" , 
}
const authSlice = createSlice({
    name : "user" , 
   initialState , 
   reducers : {
    setName : (state , action) => {
        state.username = action.payload ; 
    }
   }
})
export const { setName } = authSlice.actions ;
export const showName = (state : any) => state.user.username ; 

export default authSlice.reducer;