"use client"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "@/Redux/Store"
import Nav from "@/DashComponents/Nav"
import SideParsm from "@/DashComponents/SideParsm"
import LineReport1 from "@/DashComponents/ui/LineReports"
import MyChart from "@/DashComponents/ui/RebortChartsAre"
import {
  Bitcoin,
  TrendingUp,
  Building2,
  Wrench,
  FileBarChart,
  CircleDollarSign,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

// Import Mastercard animation
import Mastercard from "../../public/mastercard.json"

function Reports() {
  const dispatch = useDispatch<AppDispatch>()
  // const GetAllincomeState = useSelector((state: RootState) => state.GetIncome);
  const currentDate = new Date()

  // Get date 30 days ago
  const pastDate = new Date()
  pastDate.setDate(currentDate.getDate() - 30)

  // Format dates as needed (assuming yyyy-mm-dd format)
  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0") // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  // Sample recent activities data
  const recentActivities = [
    { id: 1, title: "Sales Report Generated", time: "2 hours ago", type: "increase", amount: "$1,200" },
    { id: 2, title: "New Expense Added", time: "5 hours ago", type: "decrease", amount: "$350" },
    { id: 3, title: "Monthly Report Exported", time: "Yesterday", type: "neutral", amount: "" },
    { id: 4, title: "New Tool Purchase", time: "2 days ago", type: "decrease", amount: "$720" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="p-3 flex items-center backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
        <h1 className="lg:hidden">
          <SideParsm />
        </h1>
        <div className="navhome p-0 flex w-full justify-end">
          <Nav />
        </div>
      </div>

      <div className="w-[98%] m-auto py-4">
        <h1 className="dark:text-white text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">
          Reports
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to={"SaleReport"}>
              <div className="bg-gradient-to-r from-[#ea3a72] to-[#e42a5d] p-4 text-white rounded-xl flex items-center justify-between shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 overflow-hidden relative group">
                <div className="absolute -right-10 -top-10 h-32 w-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h1 className="text-yellow-500 text-3xl mb-2">
                    <Bitcoin className="h-8 w-8" />
                  </h1>
                  <h1 className="text-md font-semibold">Sales</h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" />
                    Report
                  </h3>
                </div>
                <div>
                  <LineReport1 />
                </div>
              </div>
            </Link>

            <Link to={"ExpensesReport"}>
              <div className="bg-gradient-to-r from-[#562583] to-[#923fe4] p-4 text-white rounded-xl flex items-center justify-between shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden relative group">
                <div className="absolute -right-10 -top-10 h-32 w-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h1 className="text-black text-3xl mb-2">
                    <Building2 className="h-8 w-8 bg-white rounded-full p-1" />
                  </h1>
                  <h1 className="text-md font-semibold">Companies</h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" />
                    Report
                  </h3>
                </div>
                <div>
                  <LineReport1 />
                </div>
              </div>
            </Link>

            <Link to={"PurchasesReport"}>
              <div className="bg-gradient-to-tr from-[#254383] to-[#132145] p-4 text-white rounded-xl flex items-center justify-between shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden relative group">
                <div className="absolute -right-10 -top-10 h-32 w-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h1 className="text-yellow-500 text-3xl mb-2">
                    <Wrench className="h-8 w-8" />
                  </h1>
                  <h1 className="text-md font-semibold">Tools </h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" />
                    Report
                  </h3>
                </div>
                <div>
                  <LineReport1 />
                </div>
              </div>
            </Link>

            <Link to={"Income"}>
              <div className="bg-gradient-to-r from-[#1a7757] to-[#035d48] via-[#1a7757] bg-[length:100%_100%] p-4 text-white rounded-xl flex items-center justify-between shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden relative group">
                <div className="absolute -right-10 -top-10 h-32 w-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h1 className="text-yellow-500 text-3xl mb-2">
                    <FileBarChart className="h-8 w-8" />
                  </h1>
                  <h1 className="text-md font-semibold">Reports</h1>
                  <h3 className="text-xs flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" />
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

        <div className="grid grid-cols-1 justify-center w-[100%] mt-6 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 my-3 col-span-3 md:col-span-2 lg:col-span-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Performance Analytics</h2>
            </div>
            <MyChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white IncomeDive overflow-hidden flex flex-col rounded-xl shadow-lg relative"
          >
            <div className="absolute -right-20 -bottom-20 h-48 w-48 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -top-20 h-48 w-48 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h1 className={`text-2xl font-semibold ${0 ? "text-red-400" : "text-white"}`}>
                  {1 ? "Loss" : "Profit"}
                </h1>
                <span className="dark:bg-white/10 p-2 rounded-full">
                  <CircleDollarSign className="h-6 w-6 text-emerald-400" />
                </span>
              </div>
              <h2 className="text-lg text-slate-300">$Dollar</h2>
              <h1 className={`font-bold text-5xl ${0 ? "text-red-400" : "text-emerald-400"} mb-4`}>100</h1>
              <div className="bg-transparent w-[200px] h-[180px]">
                <Lottie animationData={Mastercard} loop={true} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="dark:text-white text-lg font-bold">Recent Activities</h1>
            <button className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
              View All
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            {recentActivities.map((activity, index) => (
              <div
                key={activity.id}
                className={`flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                  index !== recentActivities.length - 1 ? "border-b border-slate-200 dark:border-slate-700" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-full ${
                      activity.type === "increase"
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                        : activity.type === "decrease"
                          ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                    }`}
                  >
                    {activity.type === "increase" ? (
                      <ArrowUpRight className="h-5 w-5" />
                    ) : activity.type === "decrease" ? (
                      <ArrowDownRight className="h-5 w-5" />
                    ) : (
                      <Clock className="h-5 w-5" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white">{activity.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{activity.time}</p>
                  </div>
                </div>

                {activity.amount && (
                  <span
                    className={`font-medium ${
                      activity.type === "increase"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : activity.type === "decrease"
                          ? "text-rose-600 dark:text-rose-400"
                          : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {activity.amount}
                  </span>
                )}
              </div>
            ))}

            <div className="bg-slate-50 dark:bg-slate-800 p-3 border-t border-slate-200 dark:border-slate-700">
              <button className="w-full py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                Load More Activities
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Reports
