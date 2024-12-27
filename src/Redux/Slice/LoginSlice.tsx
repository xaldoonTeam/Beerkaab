import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios, {AxiosError} from 'axios'
import {Url, errorMsg} from '../../Interfaces'


interface UserLoginData {
    user_id:number;
    full_name:string;
    company_id: string;
    email: string;
    type: { id: number; type: 'admin' | 'user' };
    accessToken: string;
    refreshToken: string;
    create_at:string;
    updated_at:string
  }

const initialState={
    data:{} as UserLoginData,
    Isloading:false,
    isError:false,
    isSuccess:false,
    errorMsg:'',
};

export const LoginFn = createAsyncThunk(
    'user/login',
    async(data:any,{rejectWithValue})=>{
        try {
            const res = await axios.post(`${Url}/auth/signin`,data);
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
        return rejectWithValue(error.request?.data.mesaagae || errorMsg)
        return rejectWithValue(errorMsg)
        }
    }
);

export const LoginSlice = createSlice({
     name:'login',
     reducers:{ reset:()=>initialState},
     initialState,
     extraReducers:(builder)=>{
        builder.addCase(LoginFn.pending,()=>({
            ...initialState,
            Isloading:true,
        }));
        
        builder.addCase(LoginFn.fulfilled,(_,action)=>({
            ...initialState,
            data: action.payload,
            isSuccess: true
         }));
       builder.addCase(LoginFn.rejected,(_,action)=>({
        ...initialState,
        isError:true,
        errorMsg: String(action.payload)
       }))   
     }
})
export const {reset} =LoginSlice.actions