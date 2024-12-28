import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

import { Url, errorMsg, userRegisterInterface} from "../../interfaces";

import { act } from "react-dom/test-utils";
import axios, { AxiosError } from "axios";



// interface Response{
//     full_name : string
//     email:string
//     password: string
//     type_id:number
   
// }
interface stateinterface{
    isLoading:boolean
    isError:boolean
    isSuccess:boolean
    errorMsg:string
    
}


const initialState: stateinterface={
   
    isLoading:false,
    isError:false,
    isSuccess:false,
    errorMsg:'',
}

export const RegisterFn= createAsyncThunk(
    'user/register',
    async(data:userRegisterInterface,{rejectWithValue})=>{
        try {
            const res= await axios.post(
         `${Url}/user/create`,
                data
            );
            localStorage.setItem('user',JSON.stringify(res.data));
            console.log(res)
            return res.data
        } catch (error) {
            if(error instanceof AxiosError){
                return rejectWithValue(error.response?.data.message);
            }
                return rejectWithValue(errorMsg)

        }
            
        
    },
)

const registerSlice =createSlice({
    name: 'register',
    reducers:{
        resetRegisterState:()=>initialState,
    },
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(RegisterFn.pending,(state,)=>{
            state.isLoading=true;
            state.isError=false;
            state.isSuccess=false;
            // state.data={} as Response;
            state.errorMsg='';
        });
        // fullfilled
        builder.addCase(RegisterFn.fulfilled,(state , action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.errorMsg='';
            // state.data= action.payload as Response
        });
        builder.addCase(RegisterFn.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            // state.data= {} as Response
            state.errorMsg=String(action.payload);
        })
        
    }
})

export default registerSlice;
export const {resetRegisterState}= registerSlice.actions
