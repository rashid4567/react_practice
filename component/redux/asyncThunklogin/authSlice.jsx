import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const LoginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email,password},thunkAPI) =>{
    try{
          const response = await fetch("http://reqres.in/api/login",{
          method : "POST",
        headers : {"Content-Type":'application/json'},
        body : JSON.stringify({email, password})
      })

      if(!response.ok){
        return thunkAPI.rejectWithValue("Invalid email or password")
      }
      
      const data = await response.json();
      return data;
    }catch(err){
        return thunkAPI.rejectWithValue("something went wrong")
    }
    }
)

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null,
        token : null,
        loading : false,
        error : null,
    },
    reducers: {
        logout : (state) =>{
            state.user = null;
            state.token = null;
            state.error = null;
        },
    },
    extraReducers : (builder) =>{
        builder
        .addCase(LoginUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(LoginUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.token = action.payload.token;
            state.user = {email : "test user"};
        })
        .addCase(LoginUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;