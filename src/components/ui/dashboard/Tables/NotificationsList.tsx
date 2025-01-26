import React from "react";
import { Trash, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";

interface Notification {
  id: number;
  title: string;
  type: string;
  date: string;
  status: string;
}

const notifications: Notification[] = [
  { id: 1, title: "System Update", type: "System", date: "2025-01-10", status: "Read" },
  { id: 2, title: "New Message", type: "Message", date: "2025-01-12", status: "Unread" },
  { id: 3, title: "Password Change", type: "Security", date: "2025-01-08", status: "Read" },
  { id: 4, title: "Promotion Alert", type: "Promotion", date: "2025-01-13", status: "Unread" },
];

type SortKey = keyof Notification;
type SortOrder = "asc" | "desc";

const NotificationsTable: React.FC = () => {
  const [sortKey, setSortKey] = React.useState<SortKey>("date");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("desc");

  const sortedNotifications = React.useMemo(() => {
    return [...notifications].sort((a, b) => {
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
        <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableCell onClick={() => handleSort("title")} className="cursor-pointer py-3 px-6">
                Title <SortIcon column="title" />
              </TableCell>
              <TableCell onClick={() => handleSort("type")} className="cursor-pointer py-3 px-6">
                Type <SortIcon column="type" />
              </TableCell>
              <TableCell onClick={() => handleSort("date")} className="cursor-pointer py-3 px-6">
                Date <SortIcon column="date" />
              </TableCell>
              <TableCell onClick={() => handleSort("status")} className="cursor-pointer py-3 px-6">
                Status <SortIcon column="status" />
              </TableCell>
              <TableCell className="py-3 px-6 text-center">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedNotifications.length > 0 ? (
              sortedNotifications.map((notification) => (
                <TableRow key={notification.id} className="hover:bg-gray-100">
                  <TableCell className="py-3 px-6">{notification.title}</TableCell>
                  <TableCell className="py-3 px-6">{notification.type}</TableCell>
                  <TableCell className="py-3 px-6">{notification.date}</TableCell>
                  <TableCell className="py-3 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        notification.status === "Read"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {notification.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-6 text-center">
                    <Button variant="link" className="text-red-600 hover:text-red-800">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                  No notifications available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NotificationsTable;
