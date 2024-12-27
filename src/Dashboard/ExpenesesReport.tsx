// import { getAllExpensesFn } from "@/Redux/Slice/ExpensesSlice";
// import { AppDispatch, RootState } from "@/Redux/Store";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import SideParsm from "@/DashComponents/SideParsm";
// import Nav from "@/DashComponents/Nav";
// import { Link, useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";

// function ExpensesReport() {
//   const dispatch = useDispatch<AppDispatch>();
//   const GetAllExpensesState = useSelector((state: RootState) => state.GetExpenses);
//   const [startDate, setStartDate] = useState<string>("");
//   const [endDate, setEndDate] = useState<string>("");

//   const submitHandler = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (startDate && endDate) {
//       const data = { startDate, endDate };
//       dispatch(getAllExpensesFn(data));
//     }
//   };

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!localStorage.getItem('userInfo')) {
//       navigate('/'); // or any other path you want to navigate to
//     }
//   }, [navigate]);

//   const salaryColumns: GridColDef[] = [
//     { field: "employee_name", headerName: "Name", width: 250 },
//     { field: "employee_phone", headerName: "Phone", width: 150 },
//     { field: "salary_amount", headerName: "Salary Amount", width: 150, renderCell: (params) => `$${params.value}` },
//     { field: "paid_amount", headerName: "Paid Amount", width: 200, renderCell: (params) => `$${params.value}` },
//     { field: "employee_address", headerName: "Address", width: 250 },
//     { field: "date", headerName: "Date", width: 200 },
//   ];

//   const otherExpensesColumns: GridColDef[] = [
//     { field: "item_name", headerName: "Item Name", width: 250 },
//     { field: "item_qty", headerName: "Quantity", width: 150 },
//     { field: "item_cost", headerName: "Cost", width: 150, renderCell: (params) => `$${params.value}` },
//     { field: "paid_amount", headerName: "Paid Amount", width: 200, renderCell: (params) => `$${params.value}` },
//     { field: "date", headerName: "Date", width: 200 },
//   ];

//   // const salaryExpenses = GetAllExpensesState.data?.salaryExpenses || [];
//   // const otherExpenses = GetAllExpensesState.data?.otherExpenses || [];

//   // const totalSalary = salaryExpenses.reduce((total, expense) => total + parseFloat(expense.salary_amount || "0"), 0);
//   // const otherExpensesTotal = otherExpenses.reduce((total, expense) => total + (parseFloat(expense.item_cost || "0") * (expense.item_qty || 0)), 0);
//   // const totalExpenses = totalSalary + otherExpensesTotal;

//   return (
//     <div className="h-screen overflow-auto">
//       <div className="p-3 flex items-center justify-between">
//         <h1 className="lg:hidden">
//           <SideParsm />
//         </h1>
//         <div className="navhome p-0 flex w-full justify-end">
//           <Nav />
//         </div>
//       </div>
//       <Link to="/Dashboard/Reports">
//         <h1 className="text-xl">
//           <IoArrowBack />
//         </h1>
//       </Link>
//       <div className="flex flex-col justify-center items-center mx-6">
//         <h1 className="text-xl">Macaash Company</h1>
//         <h2 className="text-lg">Expenses Report</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-4">
//           <div className="flex flex-col dark:text-black">
//             <label htmlFor="">Start date</label>
//             <input
//               type="date"
//               className="rounded-xl min-w-[220px] p-2"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col dark:text-black">
//             <label htmlFor="">End date</label>
//             <input
//               type="date"
//               className="rounded-xl min-w-[220px] p-2"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               max={new Date().toISOString().slice(0, 10)}
//             />
//           </div>
//         </div>
//         <button
//           className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={submitHandler}
//         >
//           Get Expenses Report
//         </button>
//         <h1 className="justify-end text-xl">Total Expenses: </h1>
//         <div className="bg-white dark:text-black p-3 rounded-xl mt-3 overflow-x-auto w-[98%] mx-auto max-w-[1150px]">
//           <h1>Salary Expenses</h1>
//           <Box
//             className="w-full h-full border-none"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//             }}
//           >
//             <Box className="flex-1 w-full">
//               <DataGrid
//                 rows={salaryExpenses.map((expense: any, index: number) => ({
//                   id: expense.salary_id || `salary_${index}`, // Ensure unique ID
//                   ...expense,
//                 }))}
//                 columns={salaryColumns}
//                 initialState={{
//                   pagination: {
//                     paginationModel: {
//                       pageSize: 10,
//                     },
//                   },
//                 }}
//                 pageSizeOptions={[5]}
//                 sx={{
//                   paddingRight: "10px",
//                   paddingLeft: "10px",
//                   ".MuiDataGrid-main": {
//                     overflowX: "auto",
//                   },
//                   ".MuiDataGrid-row, .MuiDataGrid-cell": {
//                     whiteSpace: "nowrap",
//                   },
//                 }}
//               />
//               <div className="flex justify-end p-4">
//                 <div className="dark:text-black">
//                   Total Salary: ${totalSalary.toFixed(2)}
//                 </div>
//               </div>
//             </Box>
//           </Box>
//         </div>
//         <div className="bg-white rounded-xl mt-3 dark:text-black p-3 overflow-x-auto w-[98%] mx-auto max-w-[1150px]">
//           <h1>Other Expenses</h1>
//           <Box
//             className="w-full h-full border-none"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//             }}
//           >
//             <Box className="flex-1 w-full">
//               <DataGrid
//                 rows={otherExpenses.map((expense: any, index: number) => ({
//                   id: expense.expense_id || `expense_${index}`, // Ensure unique ID
//                   ...expense,
//                 }))}
//                 columns={otherExpensesColumns}
//                 initialState={{
//                   pagination: {
//                     paginationModel: {
//                       pageSize: 10,
//                     },
//                   },
//                 }}
//                 pageSizeOptions={[5]}
//                 sx={{
//                   paddingRight: "10px",
//                   paddingLeft: "10px",
//                   ".MuiDataGrid-main": {
//                     overflowX: "auto",
//                   },
//                   ".MuiDataGrid-row, .MuiDataGrid-cell": {
//                     whiteSpace: "nowrap",
//                   },
//                 }}
//               />
//               <div className="flex justify-end p-4">
//                 <div className="dark:text-black">
//                   Total Other Expenses: ${otherExpensesTotal.toFixed(2)}
//                 </div>
//               </div>
//             </Box>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExpensesReport;
