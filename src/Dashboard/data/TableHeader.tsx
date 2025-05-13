import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

interface TableHeaderProps {
  title: string;
  onSearch: (query: string) => void;
  onAddNew?: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ 
  title, 
  onSearch,
  onAddNew,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 mt-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search..."
            className="pl-10 w-full"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button onClick={onAddNew}>
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>
    </div>
  );
};

export default TableHeader;
