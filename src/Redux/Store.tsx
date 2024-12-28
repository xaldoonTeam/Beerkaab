import {configureStore} from'@reduxjs/toolkit'
import registerSlice from './Slice/RegisterSlice';
import userInfoSlice from './Slice/userinfo';
import { LoginSlice } from './Slice/LoginSlice';

import { GetAllProductSlice } from './Slice/getAllProductsSlice';
import { createVendorSlice } from './Slice/CreateVendorSlice';
import { createProductSlice } from './Slice/CreateProductSlice';
import { CreatePurchaseSlice } from './Slice/CreatePurchhaseSlice';
import  { createSaleSlice } from './Slice/CreateSaleSlice';
import { createCustomerSlice } from './Slice/CreateCustomerSlice';
// import { GetAllCustomerSlice, getAllUsersSlice } from './Slice/AllCustomers';
import { GetAllPurchaseSlice } from './Slice/AllPurchases';

import { delVendorSlice } from './Slice/DeleteVendor';
import { delProductSlice } from './Slice/DeleteProductSlice';

import { GetOneProductSlice } from './Slice/GEtOneProduct';
import { UpdateProductSlice } from './Slice/ProductUpdateSlice';
import { GetAllPayableSlice } from './Slice/GetAllPayableSlice';


import { GetAllSaleSlice } from './Slice/GetAllSaleSlice';
import { GetAllExpensesSlice } from './Slice/ExpensesSlice';


import { GetAllExpensesOnlySlice } from './Slice/expenses/AllExpensesSlice';
import { createExpensesSlice } from './Slice/expenses/CreateExpensesSlice';
import { delExpensesSlice } from './Slice/expenses/DeleteExpensesSlice';
import { UpdateExpensesSlice } from './Slice/expenses/UpdateExpensesSLice';
import { GetOneExpenseSlice } from './Slice/expenses/GetOneExpenses';
import { GetOneCompanySlice } from './Slice/GetOneCompanaySlice';
import { getAllUsersSlice } from './Slice/AllCustomers';
import { toolSlice } from './Slice/tools/createToolSlice';
import { getAllToolsSlice } from './Slice/tools/Tools';

 
export const store =configureStore({
reducer:{
    user:registerSlice.reducer,
    userInfo: userInfoSlice.reducer,
    LoginStore: LoginSlice.reducer,
    AllUsers:getAllUsersSlice.reducer,
    AllProduct:GetAllProductSlice.reducer,
    CreateVendor:createVendorSlice.reducer,
    CreateProduct:createProductSlice.reducer,
    createPurchase:CreatePurchaseSlice.reducer,
    createSales:createSaleSlice.reducer,
    AllPurchase:GetAllPurchaseSlice.reducer,
    CreateCustomer:createCustomerSlice.reducer,
    // AllCustomer:GetAllCustomerSlice.reducer,
    // UpdateVendor:UpdateVendorSlice.reducer,
    // AllIncome:GetAllIncomeSlice.reducer,
    DelVendor:delVendorSlice.reducer,
    DelProducs:delProductSlice.reducer,
    // GetOneVendor:GetOneVendorSlice.reducer,
    GetONeProduct:GetOneProductSlice.reducer,
    UpdateProduct:UpdateProductSlice.reducer,
    AllPayable:GetAllPayableSlice.reducer,
    // AllReceive:GetAllRecieveAbleSlice.reducer,
    // PAymentPayable: PayPAyableSlice.reducer,
    // ReceiveAple:PayReceiveAbleSlice.reducer,
    GetSale:GetAllSaleSlice.reducer,
    GetExpenses:GetAllExpensesSlice.reducer,
    // GetPurchaseReport:GetAllPurchasesSlice.reducer,
    // GetIncome:GetAllIncomeReportSlice.reducer,
    // GetOnePurhhase:GetOnePurchaseSlice.reducer,


    // AllEmployes:GetAllEmployeesSlice.reducer,
    // CreateEmployee:createEmployeesSlice.reducer,
    // deleteEmployee:delEmployeesSlice.reducer,
    // UpdateEmployees:UpdateEmployeeSlice.reducer,
    // OneEmployee:GetOneEmployeesSlice.reducer,


    //salary
  
    // expenses
    GetAllExpensesOnly:GetAllExpensesOnlySlice.reducer,
    CreateExpenses:createExpensesSlice.reducer,
    DelExpenses:delExpensesSlice.reducer,
    UpdateExpenses:UpdateExpensesSlice.reducer,
    OneExpense:GetOneExpenseSlice.reducer,

    //Companay
    GetOneCompanay:GetOneCompanySlice.reducer,

   // tools
   createTool:toolSlice.reducer,
   GetallTools:getAllToolsSlice.reducer


},
devTools:true
})
export type RootState = ReturnType<typeof store.getState>; //use Selector
export type AppDispatch =typeof store.dispatch;  //useDispatch