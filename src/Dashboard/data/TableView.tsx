import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type SortDirection = "asc" | "desc" | null;

interface TableColumn {
  id: string;
  header: string;
  accessor: (row: any) => React.ReactNode;
  sortable?: boolean;
}

interface TableViewProps {
  columns: TableColumn[];
  data: any[];
  emptyMessage?: string;
}

const TableView: React.FC<TableViewProps> = ({ 
  columns, 
  data,
  emptyMessage = "No data available"
}) => {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (columnId: string) => {
    if (sortField === columnId) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortField(null);
        setSortDirection(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortField(columnId);
      setSortDirection("asc");
    }
  };

  const getSortedData = () => {
    if (!sortField || !sortDirection) return data;
    
    return [...data].sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];
      
      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  };

  const getSortIcon = (columnId: string) => {
    if (sortField !== columnId) return null;
    return sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />;
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.id} className="font-semibold">
                {column.sortable ? (
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-semibold hover:bg-transparent"
                    onClick={() => handleSort(column.id)}
                  >
                    <span className="flex items-center">
                      {column.header}
                      {getSortIcon(column.id)}
                    </span>
                  </Button>
                ) : (
                  column.header
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {getSortedData().length > 0 ? (
            getSortedData().map((row, rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-muted/50">
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.accessor(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
