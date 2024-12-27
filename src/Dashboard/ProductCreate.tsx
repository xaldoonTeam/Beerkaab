// // import Nav from "@/components/Nav"
// // import SideParsm from "@/components/SideParsm"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import {
// //   Sheet,
// //   SheetClose,
// //   SheetContent,
// //   SheetDescription,
// //   SheetFooter,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet"
// // import { GoPlus } from "react-icons/go"
// // import { CiImport } from "react-icons/ci";

// // export function SheetCreateV() {
// //   return (
// //     <div className="min-h-screen">
// //       <div className='p-3   '>

// //       <h1 className='md:hidden '>

// //       <SideParsm  />
// //    </h1>
// //     <div className="navhome p-0 flex w-full justify-end">
// //      <Nav/>
// //          </div>
// //       </div>
// //     <div>

// //     <h1 className="font-semibold  text-lg">Create Vendor </h1>
// //     <div className="bg-white my-2 p-2 rounded-md w-full flex flex-col">
// //       <div className="flex gap-2 justify-end px-4">
// //         <button className="bg-[#008CC8]  px-2 gap-2  flex items-center text-white rounded-xl"><span className="text-xl"> <CiImport /> </span> Import excell</button>
// //         <button className="p-2 flex gap-2 items-center"><span className="bg-[#E1E0FF] text-xl p-2  rounded-full"><GoPlus /></span>Add new</button>
// //       </div>
// //       <form className="formdiv flex flex-col">
// //         <div className="grid grid-cols-4 gap-2">
// //           <div className="flex flex-col ">
// //             <label htmlFor="">Full name</label>
// //             <input type="text" className="border border-gray-400 rounded-[10px] p-2"/>
// //           </div>
// //            <div className="flex flex-col ">
// //             <label htmlFor="">Adress </label>
// //             <input type="text" className="border border-gray-400 rounded-[10px] p-2"/>
// //           </div>
// //           <div className="flex flex-col ">
// //             <label htmlFor="">Email</label>
// //             <input type="email" className="border border-gray-400 rounded-[10px] p-2"/>
// //           </div>
// //           <div className="flex flex-col ">
// //             <label htmlFor="">Phone</label>
// //             <input type="tel" className="border border-gray-400 rounded-[10px] p-2"/>
// //           </div>
// //         </div>
// //         <div className="font-bold  ">

// //         <hr className="my-4 font-semibold bg-[#dcdcdc] rounded-md p-[2px] " />
// //         </div>
// //       </form>
// //     </div>

// //     </div>
// //     </div>
// //   )
// // }


// // import React, { useState } from 'react';
// // import Nav from "@/components/Nav";
// // import SideParsm from "@/components/SideParsm";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Sheet,
// //   SheetClose,
// //   SheetContent,
// //   SheetDescription,
// //   SheetFooter,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";
// // import { GoPlus } from "react-icons/go";
// // import { CiImport, CiTrash } from "react-icons/ci";

// // export function SheetCreateV() {
// //   const [formInputs, setFormInputs] = useState([
// //     {
// //       fullName: '',
// //       address: '',
// //       email: '',
// //       phone: '',
// //     },
// //   ]);

// //   const handleAddNewInput = () => {
// //     setFormInputs([
// //       ...formInputs,
// //       {
// //         fullName: '',
// //         address: '',
// //         email: '',
// //         phone: '',
// //       },
// //     ]);
// //   };

// //   const handleInputChange = (index, field, value) => {
// //     const updatedInputs = [...formInputs];
// //     updatedInputs[index][field] = value;
// //     setFormInputs(updatedInputs);
// //   };

// //   const handleDelete = (index) => {
// //     const updatedInputs = [...formInputs];
// //     updatedInputs.splice(index, 1);
// //     setFormInputs(updatedInputs);
// //   };

// //   return (
// //     <div className="min-h-screen">
// //       <div className='p-3   '>
// //         <h1 className='md:hidden '>
// //           <SideParsm  />
// //         </h1>
// //         <div className="navhome p-0 flex w-full justify-end">
// //           <Nav/>
// //         </div>
// //       </div>
// //       <div>
// //         <h1 className="font-semibold  text-lg">Create Vendor </h1>
// //         <div className="bg-white my-2 p-4 rounded-[8px] w-full flex flex-col">
// //           <div className="flex gap-2 justify-end px-4">
// //             <button className="bg-[#008CC8]  px-2 gap-2  flex items-center text-white rounded-xl"><span className="text-xl"> <CiImport /> </span> Import excell</button>
// //             <button className="p-2 flex gap-2 items-center" onClick={handleAddNewInput}><span className="bg-[#E1E0FF] text-xl p-2  rounded-full"><GoPlus /></span>Add new</button>
// //           </div>
// //           {formInputs.map((input, index) => (
// //             <div key={index}>
// //               <form className="formdiv flex flex-col gap-4">
// //                 <div className="grid grid-cols-4 gap-2">
// //                   <div className="flex flex-col ">
// //                     <label htmlFor="">Full name</label>
// //                     <input
// //                       type="text"
// //                       className="border border-gray-400 rounded-[10px] p-2"
// //                       value={input.fullName}
// //                       onChange={(e) => handleInputChange(index, 'fullName', e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="flex flex-col ">
// //                     <label htmlFor="">Address</label>
// //                     <input
// //                       type="text"
// //                       className="border border-gray-400 rounded-[10px] p-2"
// //                       value={input.address}
// //                       onChange={(e) => handleInputChange(index, 'address', e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="flex flex-col ">
// //                     <label htmlFor="">Email</label>
// //                     <input
// //                       type="email"
// //                       className="border border-gray-400 rounded-[10px] p-2"
// //                       value={input.email}
// //                       onChange={(e) => handleInputChange(index, 'email', e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="flex flex-col ">
// //                     <label htmlFor="">Phone</label>
// //                     <input
// //                       type="tel"
// //                       className="border border-gray-400 rounded-[10px] p-2"
// //                       value={input.phone}
// //                       onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="flex justify-end">
// //                   <button className=" px-4 py-2 flex items-center gap-2 rounded-lg text-red-500" onClick={(e) => {
// //                     e.preventDefault();
// //                     handleDelete(index);
// //                   }}>
// //                     <CiTrash /> Delete
// //                   </button>
// //                 </div>
// //               </form>
// //               {index !== formInputs.length - 1 && <hr />}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { FormEvent, useEffect, useState } from 'react';
//  // library for parsing CSV/Excel files
// import * as XLSX from 'xlsx';

// import Nav from "@/DashComponents/Nav";
// import SideParsm from "@/DashComponents/SideParsm";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Sheet,
// //   SheetClose,
// //   SheetContent,
// //   SheetDescription,
// //   SheetFooter,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";
// import { GoPlus } from "react-icons/go";
// import { CiImport, CiTrash } from "react-icons/ci";
// import { useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '@/Redux/Store';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { createProductFn, resetProduct } from '@/Redux/Slice/CreateProductSlice';
// import toast from 'react-hot-toast';

// export function ProductCreate() {
//   const toastId = 'createProduct';

//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();

//   const CreateProductState = useSelector((state: RootState) => state.CreateProduct);

//   const [formInputs, setFormInputs] = useState([
//     {
//       product_code: '',
//       product_name: '',
//       product_alert_number: 0, // Change here
//       product_cost: '',
//       product_price: '',
//     },
//   ]);

//   const handleAddNewInput = () => {
//     setFormInputs([
//       ...formInputs,
//       {
//         product_code: '',
//         product_name: '',
//         product_alert_number: 0,
//         product_cost: '',
//         product_price: '',
//       },
//     ]);
//   };

//   const handleInputChange = (index: number, field: string, value: string) => {
//     const updatedInputs = [...formInputs];
//     updatedInputs[index] = { ...updatedInputs[index], [field]: value };
//     setFormInputs(updatedInputs);
//   };

//   const handleDelete = (index: number) => {
//     const updatedInputs = [...formInputs];
//     updatedInputs.splice(index, 1);
//     setFormInputs(updatedInputs);
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const binaryStr = e.target?.result as string;
//       const workbook = XLSX.read(binaryStr, { type: 'binary' });
//       const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//       const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//       const formattedData = data.slice(1).map((row: any[]) => {
//         const [product_code, product_name, product_alert_number, product_cost, product_price] = row;
//         return {
//           product_code: product_code || '',
//           product_name: product_name || '',
//           product_alert_number: +product_alert_number || 0, // Change here
//           product_cost: product_cost || '',
//           product_price: product_price || '',
//           company_id: ''
//         };
//       });
      
//       setFormInputs(formattedData);
//     };
//     reader.readAsBinaryString(file);
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     const formData = formInputs.map((input) => ({
//       product_code: input.product_code,
//       product_name: input.product_name,
//       product_alert_number: input.product_alert_number,
//       product_cost: input.product_cost,
//       product_price: input.product_price,
//       company_id: ''
//     }));
    
//     dispatch(createProductFn(formData));
//   };

//   useEffect(() => {
//     if (CreateProductState.isLoading) {
//       toast.loading('Creating product...', { id: toastId });
//     }
//     if (CreateProductState.IsSuccess) {
//       toast.success('Successfully created.', { id: toastId });
//       navigate('/Dashboard/Products');
//     }
//     if (CreateProductState.isError) {
//       toast.error(CreateProductState.errorMsg, { id: toastId });
//     }
//     dispatch(resetProduct());
//   }, [CreateProductState.IsSuccess, CreateProductState.isLoading, CreateProductState.isError, dispatch, navigate]);
    
//   useEffect(() => {
//     if (!localStorage.getItem('userInfo')) {
//       navigate('/'); // or any other path you want to navigate to
//     }
//   }, [navigate]);


//   return (
//     <div className="min-h-screen ">
//       <div className='p-3 flex items-center justify-between'>
//         <h1 className='lg:hidden'>
//           <SideParsm />
//         </h1>
//         <div className="navhome p-0 flex w-full justify-end">
//           <Nav />
//         </div>
//       </div>
//       <div>
//         <h1 className="font-semibold dark:text-white text-lg">Create Products </h1>
//         <form onSubmit={handleSubmit} className="bg-white text-black my-2 p-4 rounded-[8px] w-full flex flex-col">
//           <div className="flex gap-2 justify-end px-4">
//             <button type='button'  className="bg-[#008CC8] px-2 gap-2 flex items-center text-white rounded-xl" onClick={(event) => document.getElementById('excel-import')?.click()}>
//               <span className="text-xl"> <CiImport /> </span> Import Excel
//             </button>
//             <input
//               id="excel-import"
//               type="file"
//               accept=".csv, .xlsx"
//               style={{ display: 'none' }}
//               onChange={handleFileChange}
//             />
//             <button type='button' className="p-2 flex gap-2 items-center" onClick={handleAddNewInput}>
//               <span className="bg-[#E1E0FF] text-xl p-2 rounded-full"><GoPlus /></span>Add new
//             </button>
//           </div>
//           {formInputs.map((input, index) => (
//             <div key={index}>
//               <div className="formdiv flex flex-col gap-4">
//                 <div className="grid grid-cols-4 gap-2">
//                   <div className="flex flex-col">
//                     <label htmlFor="">Product code</label>
//                     <input
//                       type="text"
//                       className="border border-gray-400 rounded-[10px] p-2"
//                       value={input.product_code}
//                       onChange={(e) => handleInputChange(index, 'product_code', e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="">Product Name</label>
//                     <input
//                       type="text"
//                       className="border border-gray-400 rounded-[10px] p-2"
//                       value={input.product_name}
//                       onChange={(e) => handleInputChange(index, 'product_name', e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="">Product Cost</label>
//                     <input
//                       type="text"
//                       className="border border-gray-400 rounded-[10px] p-2"
//                       value={input.product_cost}
//                       onChange={(e) => handleInputChange(index, 'product_cost', e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="">Product Price</label>
//                     <input
//                       type="text"
//                       className="border border-gray-400 rounded-[10px] p-2"
//                       value={input.product_price}
//                       onChange={(e) => handleInputChange(index, 'product_price', e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="">Product Alert Number</label>
//                     <input
//                     type="number"
//                     className="border border-gray-400 rounded-[10px] p-2"
                    
//                     value={input.product_alert_number}
//                     onChange={(e) => handleInputChange(index, 'product_alert_number', Number(e.target.value))} // Change here
//                   />

//                   </div>
//                 </div>
//                 <div className="flex justify-end">
//                   <button className="px-4 py-2 flex items-center gap-2 rounded-lg text-red-500" onClick={(e) => {
//                     e.preventDefault();
//                     handleDelete(index);
//                   }}>
//                     <CiTrash /> Delete
//                   </button>
//                 </div>
//               </div>
//               {index !== formInputs.length - 1 && <hr />}
//             </div>
//           ))}
//           <div className="div flex justify-end my-4">
//             <button type='submit' className='bg-[#605BFF] rounded-[8px] shadow-[0_4px_23.5px_rgba(96,91,255,1)] flex justify-center w-[14%] text-white p-2'>Create Products</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
