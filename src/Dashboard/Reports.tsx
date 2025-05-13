import React, { useState } from "react";
import TableHeader from "./data/TableHeader";
import TableView from "./data/TableView";
import { Report, reports as mockReports } from "./data/mockData";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import FormDialog from "./data/FormDialog";
import ReportForm from "./Forms/ReportForm";
// import { toast } from "sonner";
import Nav from "@/DashComponents/Nav"
import SideParsm from "@/DashComponents/SideParsm"
const Reports = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reports, setReports] = useState<Report[]>(mockReports);
  const [formOpen, setFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const columns = [
    {
      id: "title",
      header: "Title",
      accessor: (row: Report) => row.title,
      sortable: true,
    },
    {
      id: "type",
      header: "Type",
      accessor: (row: Report) => {
        const typeStyles = {
          sales: "bg-blue-100 text-blue-800 hover:bg-blue-100",
          analytics: "bg-green-100 text-green-800 hover:bg-green-100",
          performance: "bg-purple-100 text-purple-800 hover:bg-purple-100",
          custom: "bg-orange-100 text-orange-800 hover:bg-orange-100",
        };
        
        return (
          <Badge 
            variant="outline" 
            className={typeStyles[row.type]}
          >
            {row.type.charAt(0).toUpperCase() + row.type.slice(1)}
          </Badge>
        );
      },
      sortable: true,
    },
    {
      id: "createdBy",
      header: "Created By",
      accessor: (row: Report) => row.createdBy,
      sortable: true,
    },
    {
      id: "status",
      header: "Status",
      accessor: (row: Report) => {
        const statusStyles = {
          draft: "bg-gray-100 text-gray-800 hover:bg-gray-100",
          published: "bg-green-100 text-green-800 hover:bg-green-100",
          archived: "bg-amber-100 text-amber-800 hover:bg-amber-100",
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
      id: "createdAt",
      header: "Created Date",
      accessor: (row: Report) => format(row.createdAt, "MMM d, yyyy"),
      sortable: true,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = mockReports.filter(
      (report) =>
        report.title.toLowerCase().includes(query.toLowerCase()) ||
        report.type.toLowerCase().includes(query.toLowerCase()) ||
        report.createdBy.toLowerCase().includes(query.toLowerCase())
    );
    setReports(filtered);
  };

  const handleAddReport = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newReport: Report = {
        id: Date.now().toString(),
        title: data.title,
        type: data.type,
        createdBy: data.createdBy,
        status: data.status,
        createdAt: new Date(),
      };
      
      setReports((prev) => [newReport, ...prev]);
      setIsSubmitting(false);
      setFormOpen(false);
      console.log("Report added successfully");
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
        title="Orders & Reports" 
        onSearch={handleSearch} 
        onAddNew={() => setFormOpen(true)}
      />
      <TableView 
        columns={columns} 
        data={reports} 
        emptyMessage={searchQuery ? "No reports match your search" : "No reports available"} 
      />
      
      <FormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        title="Add New Report"
        description="Fill in the details to add a new report."
        onSubmit={(e) => e.preventDefault()}
        isSubmitting={isSubmitting}
      >
        <ReportForm onSubmit={handleAddReport} />
      </FormDialog>
    </div>
  );
};

export default Reports;
