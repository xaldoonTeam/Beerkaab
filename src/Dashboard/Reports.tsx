import Nav from '@/DashComponents/Nav';
import SideParsm from '@/DashComponents/SideParsm';
import LineReport1 from '@/DashComponents/ui/LineReports';
import  { useState, useEffect } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiMoneyCnyBoxFill, RiMoneyEuroCircleFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import MyChart from '@/DashComponents/ui/RebortChartsAre';
import Lottie from 'lottie-react';
import Mastercard from '../../public/mastercard.json';
import { Link } from 'react-router-dom';
// import { GetAllIncomeReporFn } from '@/Redux/Slice/Los/Porift';
import { AppDispatch, RootState } from '@/Redux/Store';
import { useSelector, useDispatch } from 'react-redux';

function Reports() {

  const dispatch = useDispatch<AppDispatch>();
  // const GetAllincomeState = useSelector((state: RootState) => state.GetIncome);
  const currentDate = new Date();
  
  // Get date 30 days ago
  const pastDate = new Date();
  pastDate.setDate(currentDate.getDate() - 30);

  // Format dates as needed (assuming yyyy-mm-dd format)
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Set initial state
  const [startDate, setStartDate] = useState(formatDate(pastDate));
  const [endDate, setEndDate] = useState(formatDate(currentDate));
  console.log(setEndDate,setStartDate)

  // useEffect(() => {
  //   if (startDate && endDate) {
  //     dispatch(GetAllIncomeReporFn({ startDate, endDate }));
  //   }
  // }, [dispatch, startDate, endDate]);

  
  // const totalSales = GetAllincomeState.data?.salesInfo
  //   ? GetAllincomeState.data.salesInfo.reduce((acc, sale) => acc + parseFloat(sale.total_sales || "0"), 0)
  //   : 0;

  // const totalSalesCost = GetAllincomeState.data?.salesInfo
  //   ? GetAllincomeState.data.salesInfo.reduce((acc, sale) => acc + parseFloat(sale.total_sales_cost || "0"), 0)
  //   : 0;

  // const totalSalariesExpenses = GetAllincomeState.data?.salaryExpenses
  //   ? GetAllincomeState.data.salaryExpenses.reduce((acc, expense) => acc + parseFloat(expense.total_salaries_expenses || "0"), 0)
  //   : 0;

  // const totalOtherExpenses = GetAllincomeState.data?.otherExpenses
  //   ? GetAllincomeState.data.otherExpenses.reduce((acc, expense) => acc + parseFloat(expense.total_other_expenses || "0"), 0)
  //   : 0;

  // // Calculate financial metrics
  // const netSale = totalSales - totalSalesCost;
  // const totalExpenses = totalSalariesExpenses + totalOtherExpenses;
  // const income = netSale - totalExpenses;

  // const isLoss = income <= 0;

  return (
    <div className='min-h-screen'>
      <div className="p-3 flex items-center">
        <h1 className="lg:hidden">
          <SideParsm />
        </h1>
        <div className="navhome p-0 flex w-full justify-end">
          <Nav />
        </div>
      </div>

      <div className='w-[98%] m-auto'>
        <h1 className='dark:text-white text-lg font-semibold'>Reports</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to={"SaleReport"}>
              <div className="bg-gradient-to-r from-[#ea3a72] to-[#e42a5d] p-2 text-white rounded-xl flex items-center justify-between">
                <div>
                  <h1 className="text-yellow-500 text-3xl">
                    <FaBitcoin />
                  </h1>
                  <h1 className="text-md font-semibold">Sales</h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <HiArrowTrendingUp />
                    Report
                  </h3>
                </div>
                <div>
                  <LineReport1 />
                </div>
              </div>
            </Link>

            <Link to={"ExpensesReport"}>
              <div className="bg-gradient-to-r from-[#562583] to-[#923fe4] p-2 text-white rounded-xl flex items-center justify-between">
                <div>
                  <h1 className="text-black text-3xl">
                    <RiMoneyCnyBoxFill className="bg-white rounded-full p-2" />
                  </h1>
                  <h1 className="text-md font-semibold">Expenses</h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <HiArrowTrendingUp />
                    Report
                  </h3>
                </div>
                <div>
                  <LineReport1 />
                </div>
              </div>
            </Link>

            <Link to={"PurchasesReport"}>
              <div className="bg-gradient-to-tr from-[#254383] to-[#132145] p-2 text-white rounded-xl flex items-center justify-between">
                <div>
                  <h1 className="text-yellow-500 text-3xl">
                    <FaBitcoin />
                  </h1>
                  <h1 className="text-md font-semibold">Purchases </h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <HiArrowTrendingUp />
                    Report
                  </h3>
                </div>
                <div>
                  <LineReport1 />
                </div>
              </div>
            </Link>

            <Link to={"Income"}>
              <div className="bg-gradient-to-r from-[#1a7757] to-[#035d48] via-[#1a7757] bg-[length:100%_100%] p-2 text-white rounded-xl flex items-center justify-between">
                <div>
                  <h1 className="text-yellow-500 text-3xl">
                    <FaBitcoin />
                  </h1>
                  <h1 className="text-md font-semibold">Profit/Loss</h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <HiArrowTrendingUp />
                    Report
                  </h3>
                </div>
                <div>
                  <LineReport1 />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 justify-center w-[100%] mt-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white my-3 col-span-3 md:col-span-2 lg:col-span-3 rounded-xl">
            <MyChart />
          </div>
          <div className="bg-white p-4 text-black IncomeDive overflow-hidden flex flex-col rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h1 className={`text-2xl font-semibold ${ (0) ? 'text-red-600' : ''}`}>{(1) ? 'Loss' : 'Profit'}</h1>
              <span className="dark:bg-white">
                <RiMoneyEuroCircleFill />
              </span>
            </div>
            <h2 className='text-lg'>$Dollar</h2>
            <h1 className={`font-bold text-5xl ${(0) ? 'text-red-600' : 'text-violet-600'}`}>100</h1>
            <div className="bg-transparent w-[200px] h-[180px]">
              <Lottie animationData={Mastercard} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
