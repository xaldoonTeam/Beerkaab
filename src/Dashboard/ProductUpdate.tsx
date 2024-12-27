// import React, { useEffect, useState } from 'react';
// import { resetVendorUpdates, UpdateVendorFn } from '@/Redux/Slice/updateVEnderSlice';
// import { AppDispatch, RootState } from '@/Redux/Store';
// import Nav from '@/DashComponents/Nav';
// import SideParsm from '@/DashComponents/SideParsm';
// import toast from 'react-hot-toast';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getOneProductFN } from '@/Redux/Slice/GEtOneProduct';
// import { UpdateProductFn, UpdateProductSlice, resetProductUpdates } from '@/Redux/Slice/ProductUpdateSlice';

// function ProductUpdate() {
//   const toastId = "update";
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();

//   const OneProductState = useSelector((state: RootState) => state.GetONeProduct);
//   const UpdateProductState = useSelector((state: RootState) => state.UpdateProduct);

// const params = useParams();
//   const id = params.product_id 
//   console.log("params",id)

//   const [ProductData, setProductData] = useState({
//     product_name: '',
//     product_code: '',
//     product_cost: '',
//     product_price: '',
//     product_id: '',
//     product_alert_number:'',
//   });

//   useEffect(() => {
//     if (id) {
//       dispatch(getOneProductFN(+id));
//     }
//   }, [id, dispatch]);

//   useEffect(() => {
//     if (OneProductState.data) {
//       setProductData({
//         product_name: OneProductState.data.product_name || '',
//         product_code: OneProductState.data.product_code || '',
//         product_cost: OneProductState.data.product_cost || '',
//         product_price: OneProductState.data.product_price || '',
//         product_id: OneProductState.data.product_id || '',
//         product_alert_number:OneProductState.data.product_alert_number||'',
//       });
//     }
//   }, [OneProductState.data]);

//   useEffect(() => {
//     if (UpdateProductState.isLoading) {
//       toast.loading('Updating Product...', { id: toastId });
//     }
//     if (UpdateProductState.IsSuccess) {
//       toast.success('Successfully updated.', { id: toastId });
//       navigate('/Dashboard/Products');
//     }
//     if (UpdateProductState.isError) {
//       toast.error(UpdateProductState.errorMsg, { id: toastId });
//     }
//     if (UpdateProductState.isLoading || UpdateProductState.IsSuccess || UpdateProductState.isError) {
//       dispatch(resetProductUpdates());
//     }
//   }, [UpdateProductState.isLoading, UpdateProductState.IsSuccess, UpdateProductState.isError, dispatch, navigate]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({
//       ...ProductData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(UpdateProductFn(ProductData));
//   };

//   return (
//     <div className="min-h-screen text-black dark:text-white">
//       <div className='p-3 flex items-center justify-between'>
//         <h1 className='lg:hidden'>
//           <SideParsm />
//         </h1>
//         <div className="navhome p-0 flex w-full justify-end">
//           <Nav />
//         </div>
//       </div>
//       <div>
//         <h1 className="font-semibold text-lg dark:text-white">Update Product</h1>
//         <form onSubmit={handleSubmit} className="bg-white text-black my-2 p-4 rounded-[8px] w-full flex flex-col">
//           <div className="formdiv flex flex-col gap-4">
//             <div className="grid grid-cols-4 gap-2">
//               <div className="flex flex-col">
//                 <label htmlFor="product_name">Product name</label>
//                 <input
//                   type="text"
//                   name="product_name"
//                   className="border border-gray-400 rounded-[10px] p-2"
//                   value={ProductData.product_name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="product_code">Product code</label>
//                 <input
//                   type="text"
//                   name="product_code"
//                   className="border border-gray-400 rounded-[10px] p-2"
//                   value={ProductData.product_code}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="product_cost">product Cost</label>
//                 <input
//                   type="tel"
//                   name="product_cost"
//                   className="border border-gray-400 rounded-[10px] p-2"
//                   value={ProductData.product_cost}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="product_price">Price</label>
//                 <input
//                   type="number"
//                   name="product_price"
//                   className="border border-gray-400 rounded-[10px] p-2"
//                   value={ProductData.product_price}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="product_price">Allert number</label>
//                 <input
//                   type="number"
//                   name="product_alert_number"
//                   className="border border-gray-400 rounded-[10px] p-2"
//                   value={ProductData.product_alert_number}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-end my-4">
//             <button type='submit' className='bg-[#605BFF] rounded-[8px] shadow-[0_4px_23.5px_rgba(96,91,255,1)] flex justify-center min-w-[180px] w-[14%] text-white p-2'>Update Product</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ProductUpdate;
