import React from "react";
import { Edit, Trash, Plus, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import {Link} from "react-router-dom"
interface Booking {
  id: number;
  customer: string;
  date: string;
  time: string;
  status: string;
}

const bookings: Booking[] = [
  { id: 1, customer: "John Doe", date: "2025-01-16", time: "10:00 AM", status: "Confirmed" },
  { id: 2, customer: "Jane Smith", date: "2025-01-17", time: "2:00 PM", status: "Pending" },
  { id: 3, customer: "Michael Brown", date: "2025-01-18", time: "5:00 PM", status: "Cancelled" },
  { id: 4, customer: "Emily Davis", date: "2025-01-19", time: "11:00 AM", status: "Confirmed" },
];

type SortKey = keyof Booking;
type SortOrder = "asc" | "desc";

const BookingsTable: React.FC = () => {
  const [sortKey, setSortKey] = React.useState<SortKey>("id");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("asc");

  const sortedBookings = React.useMemo(() => {
    return [...bookings].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortKey, sortOrder]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const SortIcon: React.FC<{ column: SortKey }> = ({ column }) => {
    if (column !== sortKey) return null;
    return sortOrder === "asc" ? <ChevronUp className="inline w-4 h-4" /> : <ChevronDown className="inline w-4 h-4" />;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Bookings</h1>
        <Link to="/Dashboard/Addbooking">
        <Button variant="outline" className="flex items-center bg-[#325E56] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Booking
        </Button></Link>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableCell onClick={() => handleSort("customer")} className="cursor-pointer py-3 px-6">
                Customer <SortIcon column="customer" />
              </TableCell>
              <TableCell onClick={() => handleSort("date")} className="cursor-pointer py-3 px-6">
                Date <SortIcon column="date" />
              </TableCell>
              <TableCell onClick={() => handleSort("time")} className="cursor-pointer py-3 px-6">
                Time <SortIcon column="time" />
              </TableCell>
              <TableCell onClick={() => handleSort("status")} className="cursor-pointer py-3 px-6">
                Status <SortIcon column="status" />
              </TableCell>
              <TableCell className="py-3 px-6 text-center">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedBookings.length > 0 ? (
              sortedBookings.map((booking) => (
                <TableRow key={booking.id} className="hover:bg-gray-100">
                  <TableCell className="py-3 px-6">{booking.customer}</TableCell>
                  <TableCell className="py-3 px-6">{booking.date}</TableCell>
                  <TableCell className="py-3 px-6">{booking.time}</TableCell>
                  <TableCell className="py-3 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-600"
                          : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-6 text-center space-x-4">
                    <Button variant="link" className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="link" className="text-red-600 hover:text-red-800">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                  No bookings available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingsTable;
