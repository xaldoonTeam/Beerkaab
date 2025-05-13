import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import { Url,errorMsg } from "@/Interfaces";
import { ifError } from "assert";
import { resetRegisterState } from "./RegisterSlice";



interface ProductF{
    product_id: number,
    product_code:string,
    product_name: string,
    product_cost:string,
    product_price: string,
    product_alert_number: number,
    company_id: string,
    created_at: string,
    updated_at: string
}

const initialState ={
    isLoading: false,
    isError:false,
    isSuccess:false,
    errorMsg:'',
    data:[] as ProductF[],
};
export const getOneProductFN= createAsyncThunk(
    'getOneproduct',
    async(vendor_id: number,{rejectWithValue})=>{
        try {
            const compnay_vendor_Id =JSON.parse(localStorage.getItem("userInfo")!).company_id
            const token= JSON.parse(localStorage.getItem("userInfo")!).accessToken;
            const res= await axios.get(`${Url}/products/${vendor_id}`,{
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

export const GetOneProductSlice = createSlice({
    name:'getOneProduct',
    reducers:{
        resetOneProduct :()=> initialState
    },
    initialState,
    extraReducers(builder){
        builder.addCase(getOneProductFN.pending,()=>({
            ...initialState,
            isLoading:true
        }));
        builder.addCase(getOneProductFN.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data:action.payload,

        }));
        builder.addCase(getOneProductFN.rejected,(_,action)=>({
            ...initialState,
            isError:true,
            errorMsg:String(action.payload),
        }));
    }
})

export  const { resetOneProduct} = GetOneProductSlice.actions

