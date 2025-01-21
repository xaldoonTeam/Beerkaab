import React from "react";
import { Edit, Trash, Plus, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import {Link} from "react-router-dom"

interface Tool {
  id: number;
  name: string;
  type: string;
  region: string;
  status: string;
}

const tools: Tool[] = [
  { id: 1, name: "Tractor Model X", type: "Agricultural", region: "North America", status: "Available" },
  { id: 2, name: "Irrigation Pump Y", type: "Water Management", region: "Europe", status: "In Use" },
  { id: 3, name: "Harvester Z", type: "Agricultural", region: "Asia", status: "Available" },
  { id: 4, name: "Drone Alpha", type: "Monitoring", region: "South America", status: "Maintenance" },
];

type SortKey = keyof Tool;
type SortOrder = "asc" | "desc";

const ToolsTable: React.FC = () => {
  const [sortKey, setSortKey] = React.useState<SortKey>("id");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("asc");

  const sortedTools = React.useMemo(() => {
    return [...tools].sort((a, b) => {
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
        <h1 className="text-3xl font-bold text-gray-800">Tools Management</h1>
        <Link to="/Dashboard/Addtools">
        <Button variant="outline" className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Tool
        </Button></Link>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableCell onClick={() => handleSort("name")} className="cursor-pointer py-3 px-6">
                Name <SortIcon column="name" />
              </TableCell>
              <TableCell onClick={() => handleSort("type")} className="cursor-pointer py-3 px-6">
                Type <SortIcon column="type" />
              </TableCell>
              <TableCell onClick={() => handleSort("region")} className="cursor-pointer py-3 px-6">
                Region <SortIcon column="region" />
              </TableCell>
              <TableCell onClick={() => handleSort("status")} className="cursor-pointer py-3 px-6">
                Status <SortIcon column="status" />
              </TableCell>
              <TableCell className="py-3 px-6 text-center">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTools.length > 0 ? (
              sortedTools.map((tool) => (
                <TableRow key={tool.id} className="hover:bg-gray-100">
                  <TableCell className="py-3 px-6">{tool.name}</TableCell>
                  <TableCell className="py-3 px-6">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">{tool.type}</span>
                  </TableCell>
                  <TableCell className="py-3 px-6">{tool.region}</TableCell>
                  <TableCell className="py-3 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        tool.status === "Available"
                          ? "bg-green-100 text-green-600"
                          : tool.status === "In Use"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {tool.status}
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
                  No tools available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ToolsTable;
