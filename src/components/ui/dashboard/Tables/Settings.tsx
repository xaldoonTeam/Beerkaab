import React from "react";
import { Edit, Trash, Plus, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";

interface Setting {
  id: number;
  name: string;
  value: string;
  category: string;
}

const settings: Setting[] = [
  { id: 1, name: "Site Title", value: "AgriTools", category: "General" },
  { id: 2, name: "Default Language", value: "English", category: "Localization" },
  { id: 3, name: "Timezone", value: "UTC", category: "Localization" },
  { id: 4, name: "Contact Email", value: "support@agritools.com", category: "Communication" },
];

type SortKey = keyof Setting;
type SortOrder = "asc" | "desc";

const SettingsTable: React.FC = () => {
  const [sortKey, setSortKey] = React.useState<SortKey>("id");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("asc");

  const sortedSettings = React.useMemo(() => {
    return [...settings].sort((a, b) => {
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
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <Button variant="outline" className="flex items-center bg-[#325E56] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Setting
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableCell onClick={() => handleSort("name")} className="cursor-pointer py-3 px-6">
                Setting Name <SortIcon column="name" />
              </TableCell>
              <TableCell onClick={() => handleSort("value")} className="cursor-pointer py-3 px-6">
                Value <SortIcon column="value" />
              </TableCell>
              <TableCell onClick={() => handleSort("category")} className="cursor-pointer py-3 px-6">
                Category <SortIcon column="category" />
              </TableCell>
              <TableCell className="py-3 px-6 text-center">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedSettings.length > 0 ? (
              sortedSettings.map((setting) => (
                <TableRow key={setting.id} className="hover:bg-gray-100">
                  <TableCell className="py-3 px-6">{setting.name}</TableCell>
                  <TableCell className="py-3 px-6">{setting.value}</TableCell>
                  <TableCell className="py-3 px-6">{setting.category}</TableCell>
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
                <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                  No settings available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SettingsTable;
