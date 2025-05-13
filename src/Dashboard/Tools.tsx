import React, { useState } from "react";
import TableHeader from "../Dashboard/data/TableHeader";
import TableView from "../Dashboard/data/TableView";
import { Tool, tools as mockTools } from "../Dashboard/data/mockData";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Star } from "lucide-react";
import FormDialog from "../Dashboard/data/FormDialog";
import ToolForm from "../Dashboard/data/ToolForm";
// import { toast } from "sonner";
import Nav from "@/DashComponents/Nav"
import SideParsm from "@/DashComponents/SideParsm"
const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tools, setTools] = useState<Tool[]>(mockTools);
  const [formOpen, setFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const columns = [
    {
      id: "name",
      header: "Name",
      accessor: (row: Tool) => row.name,
      sortable: true,
    },
    {
      id: "category",
      header: "Category",
      accessor: (row: Tool) => row.category,
      sortable: true,
    },
    {
      id: "price",
      header: "Price",
      accessor: (row: Tool) => (row.price === 0 ? "Free" : `$${row.price.toFixed(2)}`),
      sortable: true,
    },
    {
      id: "license",
      header: "License",
      accessor: (row: Tool) => {
        const licenseStyles = {
          free: "bg-green-100 text-green-800 hover:bg-green-100",
          premium: "bg-blue-100 text-blue-800 hover:bg-blue-100",
          enterprise: "bg-purple-100 text-purple-800 hover:bg-purple-100",
        };
        
        return (
          <Badge 
            variant="outline" 
            className={licenseStyles[row.license]}
          >
            {row.license.charAt(0).toUpperCase() + row.license.slice(1)}
          </Badge>
        );
      },
      sortable: true,
    },
    {
      id: "rating",
      header: "Rating",
      accessor: (row: Tool) => (
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span>{row.rating.toFixed(1)}</span>
        </div>
      ),
      sortable: true,
    },
    {
      id: "updatedAt",
      header: "Last Updated",
      accessor: (row: Tool) => format(row.updatedAt, "MMM d, yyyy"),
      sortable: true,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = mockTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase()) ||
        tool.license.toLowerCase().includes(query.toLowerCase())
    );
    setTools(filtered);
  };

  const handleAddTool = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newTool: Tool = {
        id: Date.now().toString(),
        name: data.name,
        category: data.category,
        price: Number(data.price),
        license: data.license,
        rating: Number(data.rating),
        updatedAt: new Date(),
      };
      
      setTools((prev) => [newTool, ...prev]);
      setIsSubmitting(false);
      setFormOpen(false);
      console.log
      ("Tool added successfully");
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
        title="Tools" 
        onSearch={handleSearch} 
        onAddNew={() => setFormOpen(true)}
      />
      <TableView 
        columns={columns} 
        data={tools} 
        emptyMessage={searchQuery ? "No tools match your search" : "No tools available"} 
      />
      
      <FormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        title="Add New Tool"
        description="Fill in the details to add a new tool."
        onSubmit={(e) => e.preventDefault()}
        isSubmitting={isSubmitting}
      >
        <ToolForm onSubmit={handleAddTool} />
      </FormDialog>
    </div>
  );
};

export default Tools;
