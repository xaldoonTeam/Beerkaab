// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { useDispatch } from 'react-redux';
// import { delVendorFn, resetDelVendor } from '@/Redux/Slice/DeleteVendor';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/Redux/Store';
// import { getAllVendorsFn } from '@/Redux/Slice/GetAllVendor';
// // import { getOneVendorFn, resetOneVendor } from '@/Redux/Slice/GetOneVendor';
// import { Link } from 'react-router-dom';

// const columns: GridColDef[] = [
//   { field: 'vendor_id', headerName: 'Id', width: 100 },
//   { field: 'vendor_name', headerName: 'Name', width: 200 },
//   { field: 'vendor_email', headerName: 'Email', width: 300 },
//   { field: 'vendor_phone', headerName: 'Phone number', width: 200 },
//   { field: 'vendor_address', headerName: 'Address', width: 200 },
//   {
//     field: 'action',
//     headerName: 'Action',
//     width: 100,
//     renderCell: (params) => (
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <ActionCell {...params} />
//       </div>
//     ),
//   },
// ];

// export const ActionCell = (params:any) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const dispatch = useDispatch<AppDispatch>()
//   // const navigate = useNavigate();
//   // const toastId = "deleteVendor";

//   const handleClick = (event:any) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleDelete = () => {
//     dispatch(delVendorFn(params.row.vendor_id));
//     dispatch(resetDelVendor());
//     handleClose();
//   };

//   // const GetOneVendorHandle = () => {
//   //   dispatch(getOneVendorFn(params.row.vendor_id));
//   //   dispatch(resetOneVendor());
//   //   handleClose();
//   // };

//   return (
//     <div>
//       <MoreVertIcon
//         aria-label="more"
//         aria-controls={open ? 'long-menu' : undefined}
//         aria-expanded={open ? 'true' : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//       />
//       <Menu
//         id="long-menu"
//         MenuListProps={{
//           'aria-labelledby': 'long-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: 48 * 4.5,
//             width: '20ch',
//           },
//         }}
//       >
//         <Link to={`/Dashboard/Vendor/Update/${params.row.vendor_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//           <MenuItem onClick={() => console.log('Update')}>Update</MenuItem>
//         </Link>
//         <MenuItem onClick={handleDelete}>Delete</MenuItem>
//         <MenuItem onClick={() => console.log('More')}>More</MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default function DataGridDemo() {
//   const toastId = "vendor del";
//   const VendorState = useSelector((state: RootState) => state.AllVendors);
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     dispatch(getAllVendorsFn());
//   }, [dispatch]);

//   const DelVendorState = useSelector((state: RootState) => state.DelVendor);

//   React.useEffect(() => {
//     if (DelVendorState.isLoading) toast.loading('Deleting!', { id: toastId });
//     if (DelVendorState.isSuccess) {
//       toast.success('Vendor is deleted.', { id: toastId });
//       navigate('/Dashboard/Vendor');
//     }
//     if (DelVendorState.isError) {
//       toast.error(DelVendorState.errorMsg, { id: toastId });
//     }
//     dispatch(resetDelVendor());
//   }, [DelVendorState.isLoading, DelVendorState.isError, DelVendorState.isSuccess, dispatch, navigate]);

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       <Box sx={{ flex: 1, width: '98%' }}>
//         <DataGrid
//           rows={VendorState.data.map((vendor) => ({ id: vendor.vendor_id, ...vendor }))}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 10,
//               },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           sx={{
//             gap: '20px',
//           }}
//         />
//       </Box>
//     </Box>
//   );
// }
