import React, { useState } from "react";
import TableHeader from "./data/TableHeader";
import TableView from "./data/TableView";
import { Company, companies as mockCompanies } from "./data/mockData";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import FormDialog from "./data/FormDialog";
import CompanyForm from "../Dashboard/Forms/CompanyForm";
// import { toast } from "sonner";
import Nav from "@/DashComponents/Nav"
import SideParsm from "@/DashComponents/SideParsm"
const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);
  const [formOpen, setFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const columns = [
    {
      id: "name",
      header: "Name",
      accessor: (row: Company) => row.name,
      sortable: true,
    },
    {
      id: "industry",
      header: "Industry",
      accessor: (row: Company) => row.industry,
      sortable: true,
    },
    {
      id: "employees",
      header: "Employees",
      accessor: (row: Company) => row.employees.toLocaleString(),
      sortable: true,
    },
    {
      id: "location",
      header: "Location",
      accessor: (row: Company) => row.location,
      sortable: true,
    },
    {
      id: "status",
      header: "Status",
      accessor: (row: Company) => {
        const statusStyles = {
          active: "bg-green-100 text-green-800 hover:bg-green-100",
          inactive: "bg-gray-100 text-gray-800 hover:bg-gray-100",
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
      id: "joinedAt",
      header: "Joined Date",
      accessor: (row: Company) => format(row.joinedAt, "MMM d, yyyy"),
      sortable: true,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = mockCompanies.filter(
      (company) =>
        company.name.toLowerCase().includes(query.toLowerCase()) ||
        company.industry.toLowerCase().includes(query.toLowerCase()) ||
        company.location.toLowerCase().includes(query.toLowerCase())
    );
    setCompanies(filtered);
  };

  const handleAddCompany = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newCompany: Company = {
        id: Date.now().toString(),
        name: data.name,
        industry: data.industry,
        employees: Number(data.employees),
        location: data.location,
        status: data.status,
        joinedAt: new Date(),
      };
      
      setCompanies((prev) => [newCompany, ...prev]);
      setIsSubmitting(false);
      setFormOpen(false);
      console.log ("Company added successfully");
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
        title="Companies" 
        onSearch={handleSearch}
        onAddNew={() => setFormOpen(true)}
      />
      <TableView 
        columns={columns} 
        data={companies} 
        emptyMessage={searchQuery ? "No companies match your search" : "No companies available"} 
      />
      
      <FormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        title="Add New Company"
        description="Fill in the details to add a new company."
        onSubmit={(e) => e.preventDefault()}
        isSubmitting={isSubmitting}
      >
        <CompanyForm onSubmit={handleAddCompany} />
      </FormDialog>
    </div>
  );
};

export default Companies;
