import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import { Url,errorMsg } from "@/Interfaces";

interface CustomerDta{
    customer_id:number
    customer_name:string
    customer_address:string
    customer_phone:string
    company_id:string
    created_at:string
    updated_at:string
}




const initialState ={
    isLoading: false,
    isError:false,
    isSuccess:false,
    errorMsg:'',
    data:[] as CustomerDta[],
};
export const getAllCustomerFn= createAsyncThunk(
    'AllCustomer',
    async(_,{rejectWithValue})=>{
        try {
            const compnay_Id =JSON.parse(localStorage.getItem("userInfo")!).company_id
            // const token= JSON.parse(localStorage.getItem("userInfo")!).accessToken;
            const res= await axios.get(`${Url}/customers?company_id=${compnay_Id}`,{
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
              })

              return res.data
        } catch (error) {

            if (error instanceof AxiosError)
                return rejectWithValue(error.response?.data.message || errorMsg);
        
              return rejectWithValue(errorMsg); 
            
        }
    }
)

export const GetAllCustomerSlice = createSlice({
    name:'getallCustomer',
    reducers:{
        resetAllCustomer :()=> initialState
    },
    initialState,
    extraReducers(builder){
        builder.addCase(getAllCustomerFn.pending,()=>({
            ...initialState,
            isLoading:true
        }));
        builder.addCase(getAllCustomerFn.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data:action.payload,

        }));
        builder.addCase(getAllCustomerFn.rejected,(_,action)=>({
            ...initialState,
            isError:true,
            errorMsg:String(action.payload),
        }));
    }
})

export  const { resetAllCustomer} = GetAllCustomerSlice.actions