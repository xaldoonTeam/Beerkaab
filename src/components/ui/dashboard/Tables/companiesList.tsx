import React from "react";
import { Edit, Trash, ChevronUp, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import {Link} from "react-router-dom"

interface Company {
  id: number;
  name: string;
  industry: string;
  employees: number;
  status: string;
}

const companies: Company[] = [
  { id: 1, name: "Tech Innovators", industry: "Technology", employees: 150, status: "Active" },
  { id: 2, name: "Green Earth Inc.", industry: "Environmental", employees: 80, status: "Inactive" },
  { id: 3, name: "FinServe Solutions", industry: "Finance", employees: 200, status: "Active" },
  { id: 4, name: "HealthFirst", industry: "Healthcare", employees: 120, status: "Pending" },
];

type SortKey = keyof Company;
type SortOrder = "asc" | "desc";

const CompaniesTable: React.FC = () => {
  const [sortKey, setSortKey] = React.useState<SortKey>("id");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("asc");

  const sortedCompanies = React.useMemo(() => {
    return [...companies].sort((a, b) => {
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
        <h1 className="text-3xl font-bold text-gray-800">Companies</h1>
        <Link to="/Dashboard/Addcompanis">
        <Button variant="outline" className="flex items-center bg-[#325E56] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Company
        </Button></Link>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableCell onClick={() => handleSort("name")} className="cursor-pointer py-3 px-6">
                Name <SortIcon column="name" />
              </TableCell>
              <TableCell onClick={() => handleSort("industry")} className="cursor-pointer py-3 px-6">
                Industry <SortIcon column="industry" />
              </TableCell>
              <TableCell onClick={() => handleSort("employees")} className="cursor-pointer py-3 px-6">
                Employees <SortIcon column="employees" />
              </TableCell>
              <TableCell onClick={() => handleSort("status")} className="cursor-pointer py-3 px-6">
                Status <SortIcon column="status" />
              </TableCell>
              <TableCell className="py-3 px-6 text-center">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCompanies.length > 0 ? (
              sortedCompanies.map((company) => (
                <TableRow key={company.id} className="hover:bg-gray-100">
                  <TableCell className="py-3 px-6">{company.name}</TableCell>
                  <TableCell className="py-3 px-6">{company.industry}</TableCell>
                  <TableCell className="py-3 px-6">{company.employees}</TableCell>
                  <TableCell className="py-3 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        company.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : company.status === "Inactive"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {company.status}
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
                  No companies available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CompaniesTable;
