import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (_,thunkAPI) =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            return await response.json()
        }catch(err){
            return thunkAPI.rejectWithValue("failed to fetch user");
        }
})

const userSlice = createSlice({
    name : 'users',
    initialState : {
        users : [],
        loading : false,
        error : null,
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;