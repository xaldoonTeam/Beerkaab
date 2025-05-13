"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, ArrowUpDown, Check, DollarSign, Eye, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Nav from "@/DashComponents/Nav"
import SideParsm from "@/DashComponents/SideParsm"
// Sample data for tools (simplified version)
const tools = [
  { id: 1, name: "Lawn Mower", dailyRate: 25.0 },
  { id: 2, name: "Hedge Trimmer", dailyRate: 15.0 },
  { id: 3, name: "Garden Tiller", dailyRate: 30.0 },
  { id: 4, name: "Pressure Washer", dailyRate: 20.0 },
  { id: 5, name: "Leaf Blower", dailyRate: 12.0 },
]

// Sample data for orders
const initialOrders = [
  {
    id: "ORD-001",
    customerName: "John Smith",
    toolId: 1,
    rentalDate: new Date(2023, 3, 15),
    returnDate: new Date(2023, 3, 18),
    status: "Returned",
    totalCost: 75.0,
  },
  {
    id: "ORD-002",
    customerName: "Sarah Johnson",
    toolId: 3,
    rentalDate: new Date(2023, 3, 20),
    returnDate: new Date(2023, 3, 22),
    status: "Active",
    totalCost: 60.0,
  },
  {
    id: "ORD-003",
    customerName: "Michael Brown",
    toolId: 2,
    rentalDate: new Date(2023, 3, 10),
    returnDate: new Date(2023, 3, 15),
    status: "Overdue",
    totalCost: 75.0,
  },
  {
    id: "ORD-004",
    customerName: "Emily Davis",
    toolId: 5,
    rentalDate: new Date(2023, 3, 22),
    returnDate: new Date(2023, 3, 24),
    status: "Active",
    totalCost: 24.0,
  },
  {
    id: "ORD-005",
    customerName: "Robert Wilson",
    toolId: 4,
    rentalDate: new Date(2023, 3, 18),
    returnDate: new Date(2023, 3, 19),
    status: "Returned",
    totalCost: 20.0,
  },
]

// Type for sort configuration
type SortConfig = {
  key: string
  direction: "ascending" | "descending"
} | null

// Type for order status
type OrderStatus = "Active" | "Returned" | "Overdue"

// Type for order
type Order = {
  id: string
  customerName: string
  toolId: number
  rentalDate: Date
  returnDate: Date
  status: OrderStatus
  totalCost: number
}

export default function RentalOrdersTable() {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [sortConfig, setSortConfig] = useState<SortConfig>(null)
  const [newOrder, setNewOrder] = useState<Omit<Order, "id" | "totalCost">>({
    customerName: "",
    toolId: 1,
    rentalDate: new Date(),
    returnDate: new Date(),
    status: "Active",
  })

  // Sorting function
  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending"

    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }

    setSortConfig({ key, direction })
  }

  // Get sorted items
  const getSortedItems = (items: Order[]) => {
    if (!sortConfig) return items

    return [...items].sort((a, b) => {
      if (sortConfig.key === "rentalDate" || sortConfig.key === "returnDate") {
        // For date values
        const aDate = a[sortConfig.key as "rentalDate" | "returnDate"]
        const bDate = b[sortConfig.key as "rentalDate" | "returnDate"]

        if (sortConfig.direction === "ascending") {
          return aDate.getTime() - bDate.getTime()
        } else {
          return bDate.getTime() - aDate.getTime()
        }
      } else if (sortConfig.key === "totalCost") {
        // For numeric values
        if (sortConfig.direction === "ascending") {
          return a.totalCost - b.totalCost
        } else {
          return b.totalCost - a.totalCost
        }
      } else {
        // For string values (customerName, status, id)
        const aValue = a[sortConfig.key as keyof Order] as string
        const bValue = b[sortConfig.key as keyof Order] as string

        if (sortConfig.direction === "ascending") {
          return aValue.localeCompare(bValue)
        } else {
          return bValue.localeCompare(aValue)
        }
      }
    })
  }

  const sortedOrders = getSortedItems(orders)

  // Helper to render sort indicator
  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="ml-1 h-4 w-4" />
    }

    return sortConfig.direction === "ascending" ? (
      <ArrowUp className="ml-1 h-4 w-4" />
    ) : (
      <ArrowDown className="ml-1 h-4 w-4" />
    )
  }

  // Get tool name by ID
  const getToolName = (toolId: number) => {
    const tool = tools.find((t) => t.id === toolId)
    return tool ? tool.name : "Unknown Tool"
  }

  // Calculate total cost based on tool daily rate and rental duration
  const calculateTotalCost = (toolId: number, rentalDate: Date, returnDate: Date) => {
    const tool = tools.find((t) => t.id === toolId)
    if (!tool) return 0

    const days = Math.ceil((returnDate.getTime() - rentalDate.getTime()) / (1000 * 60 * 60 * 24))
    return tool.dailyRate * days
  }

  // Handle adding a new order
  const handleAddOrder = () => {
    const totalCost = calculateTotalCost(newOrder.toolId, newOrder.rentalDate, newOrder.returnDate)
    const orderId = `ORD-${String(orders.length + 1).padStart(3, "0")}`

    setOrders([...orders, { ...newOrder, id: orderId, totalCost }])

    setNewOrder({
      customerName: "",
      toolId: 1,
      rentalDate: new Date(),
      returnDate: new Date(),
      status: "Active",
    })
  }

  // Handle marking an order as returned
  const markAsReturned = (id: string) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status: "Returned" as OrderStatus } : order)))
  }

  // Get status badge
  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "Returned":
        return <Badge className="bg-gray-100 text-gray-800">Returned</Badge>
      case "Overdue":
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>
    }
  }

  return (
    <div className="container mx-auto py-6">
        <div className="p-3 flex items-center backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
              <h1 className="lg:hidden">
                <SideParsm />
              </h1>
              <div className="navhome p-0 flex w-full justify-end">
                <Nav />
              </div>
            </div>
      <h1 className="text-2xl font-bold mb-4">Rental Orders</h1>

      <div className="flex justify-end mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Order
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Rental Order</DialogTitle>
              <DialogDescription>Enter the details for the new rental order.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  value={newOrder.customerName}
                  onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tool" className="text-right">
                  Tool
                </Label>
                <Select
                  value={newOrder.toolId.toString()}
                  onValueChange={(value) => setNewOrder({ ...newOrder, toolId: Number.parseInt(value) })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a tool" />
                  </SelectTrigger>
                  <SelectContent>
                    {tools.map((tool) => (
                      <SelectItem key={tool.id} value={tool.id.toString()}>
                        {tool.name} (${tool.dailyRate}/day)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rentalDate" className="text-right">
                  Rental Date
                </Label>
                <Input
                  id="rentalDate"
                  type="date"
                  value={newOrder.rentalDate.toISOString().split("T")[0]}
                  onChange={(e) => setNewOrder({ ...newOrder, rentalDate: new Date(e.target.value) })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="returnDate" className="text-right">
                  Return Date
                </Label>
                <Input
                  id="returnDate"
                  type="date"
                  value={newOrder.returnDate.toISOString().split("T")[0]}
                  onChange={(e) => setNewOrder({ ...newOrder, returnDate: new Date(e.target.value) })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddOrder}>Create Order</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableCaption>List of Garden Tool Rental Orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer" onClick={() => requestSort("id")}>
              <div className="flex items-center">
                Order ID
                {getSortIcon("id")}
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => requestSort("customerName")}>
              <div className="flex items-center">
                Customer
                {getSortIcon("customerName")}
              </div>
            </TableHead>
            <TableHead>Tool</TableHead>
            <TableHead className="cursor-pointer" onClick={() => requestSort("rentalDate")}>
              <div className="flex items-center">
                Rental Date
                {getSortIcon("rentalDate")}
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => requestSort("returnDate")}>
              <div className="flex items-center">
                Return Date
                {getSortIcon("returnDate")}
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => requestSort("status")}>
              <div className="flex items-center">
                Status
                {getSortIcon("status")}
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => requestSort("totalCost")}>
              <div className="flex items-center">
                Total Cost
                {getSortIcon("totalCost")}
              </div>
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{getToolName(order.toolId)}</TableCell>
              <TableCell>{(order.rentalDate, "MMM dd, yyyy")}</TableCell>
              <TableCell>{(order.returnDate, "MMM dd, yyyy")}</TableCell>
              <TableCell>{getStatusBadge(order.status)}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                  {order.totalCost.toFixed(2)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {order.status === "Active" && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => markAsReturned(order.id)}
                      className="text-green-600 border-green-200 hover:bg-green-50"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
