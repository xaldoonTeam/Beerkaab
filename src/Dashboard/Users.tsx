import React, { useState } from "react";
import TableHeader from "./data/TableHeader";
import TableView from "./data/TableView";
import { User, users as mockUsers } from "./data/mockData";
import { Badge } from "../components/ui/badge";
import { format } from "date-fns";
import FormDialog from "./data/FormDialog";
import UserForm from "./Forms/UserForm";
import Nav from "@/DashComponents/Nav"
import SideParsm from "@/DashComponents/SideParsm"
const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [formOpen, setFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const columns = [
    {
      id: "name",
      header: "Name",
      accessor: (row: User) => row.name,
      sortable: true,
    },
    {
      id: "email",
      header: "Email",
      accessor: (row: User) => row.email,
      sortable: true,
    },
    {
      id: "role",
      header: "Role",
      accessor: (row: User) => row.role,
      sortable: true,
    },
    {
      id: "status",
      header: "Status",
      accessor: (row: User) => {
        const statusStyles = {
          active: "bg-green-100 text-green-800 hover:bg-green-100",
          inactive: "bg-gray-100 text-gray-800 hover:bg-gray-100",
          pending: "bg-amber-100 text-amber-800 hover:bg-amber-100",
        };
        
        return (
          <Badge 
            variant="outline" 
            className={statusStyles[row.status]}
          >
            {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
          </Badge>
        );
      },
      sortable: true,
    },
    {
      id: "lastActive",
      header: "Last Active",
      accessor: (row: User) => format(row.lastActive, "MMM d, yyyy"),
      sortable: true,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = mockUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.role.toLowerCase().includes(query.toLowerCase())
    );
    setUsers(filtered);
  };

  const handleAddUser = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newUser: User = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        role: data.role,
        status: data.status,
        lastActive: new Date(),
      };
      
      setUsers((prev) => [newUser, ...prev]);
      setIsSubmitting(false);
      setFormOpen(false);
      console.log   ("User added successfully");
    }, 500);
  };

  return (
    <div>
        <div className="p-3 flex items-center backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
              <h1 className="lg:hidden">
                <SideParsm />
              </h1>
              <div className="navhome p-0 flex w-full justify-end">
                <Nav />
              </div>
            </div>
            
      <TableHeader 
        title="Users" 
        onSearch={handleSearch} 
        onAddNew={() => setFormOpen(true)}
      />
      <TableView 
        columns={columns} 
        data={users} 
        emptyMessage={searchQuery ? "No users match your search" : "No users available"} 
      />
      
      <FormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        title="Add New User"
        description="Fill in the details to add a new user."
        onSubmit={(e) => e.preventDefault()}
        isSubmitting={isSubmitting}
      >
        <UserForm onSubmit={handleAddUser} />
      </FormDialog>
    </div>
  );
};

export default Users;