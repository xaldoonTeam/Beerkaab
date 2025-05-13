"use client"

import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { ChevronDown, ChevronRight,Leaf, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"

interface Tool {
  id: string
  title: string
  price: number
  category: string
  condition: string 
  rating: number
  image: string
}

const tools: Tool[] = [
  {
    id: "tool1",
    title: "Tractor XL-5000",
    price: 12000,
    category: "Mashiinnada Beerta",
    condition: "Available",
    rating: 4.8,
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    id: "tool2",
    title: "Harvester Pro",
    price: 8500,
    category: "Mashiinnada Beerta",
    condition: "Available",
    rating: 4.2,
    image: "https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg",
  },
  {
    id: "tool3",
    title: "Irrigation System",
    price: 2200,
    category: "Nidaamyada Biyaha",
    condition: "Available",
    rating: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_lcq0H2eLPUcWXWkQyvedCx4mLUlFhW-ShPd77Es8Q_G2mkXltL3yJBsMH00kaJC-DY&usqp=CAU",
  },
  {
    id: "tool4",
    title: "Organic Fertilizer",
    price: 450,
    category: "Fertiliyoonka",
    condition: "Available",
    rating: 4.0,
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    id: "tool5",
    title: "Seed Planter",
    price: 1800,
    category: "Abuurka",
    condition: "Available",
    rating: 3.9,
    image: "https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg",
  },
  {
    id: "tool6",
    title: "Farm Greenhouse",
    price: 5000,
    category: "Guriyada Beerta",
    condition: "Available",
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_lcq0H2eLPUcWXWkQyvedCx4mLUlFhW-ShPd77Es8Q_G2mkXltL3yJBsMH00kaJC-DY&usqp=CAU",
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Mashiinnada Beerta",
  "Abuurka",
  "Nidaamyada Biyaha",
  "Fertiliyoonka",
  "Alaabta Beeraha",
  "Guriyada Beerta",
]

// Conditions for filtering
const conditions = ["All Conditions", "Available", "Available"]

// Sort options
const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "priceAsc", label: "Price: Low to High" },
  { id: "priceDesc", label: "Price: High to Low" },
  { id: "Availableest", label: "Availableest" },
  { id: "rating", label: "Highest Rated" },
]

export default function ToolsPage() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 15000])
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedCondition, setSelectedCondition] = useState("All Conditions")
  const [selectedSort, setSelectedSort] = useState("featured")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [filteredTools, setFilteredTools] = useState(tools)

  // Find min and max prices in the dataset
  const minPrice = 0
  const maxPrice = 15000

  // Apply filters and sorting
  useEffect(() => {
    let result = [...tools]
    const AvailableActiveFilters: string[] = []

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (tool) =>
          tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      AvailableActiveFilters.push(`Search: "${searchQuery}"`)
    }

    // Apply price range filter
    result = result.filter((tool) => tool.price >= priceRange[0] && tool.price <= priceRange[1])
    if (priceRange[0] > minPrice || priceRange[1] < maxPrice) {
      AvailableActiveFilters.push(`Price: $${priceRange[0]} - $${priceRange[1]}`)
    }

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      result = result.filter((tool) => tool.category === selectedCategory)
      AvailableActiveFilters.push(selectedCategory)
    }

    // Apply condition filter
    if (selectedCondition !== "All Conditions") {
      result = result.filter((tool) => tool.condition === selectedCondition)
      AvailableActiveFilters.push(selectedCondition)
    }

    // Apply sorting
    switch (selectedSort) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price)
        break
      case "priceDesc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "Availableest":
        // In a real app, you'd sort by date
        result.sort((a, b) => a.id.localeCompare(b.id))
        break
      default:
        // Featured - default order
        break
    }

    setActiveFilters(AvailableActiveFilters)
    setFilteredTools(result)
  }, [searchQuery, priceRange, selectedCategory, selectedCondition, selectedSort])

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setPriceRange([minPrice, maxPrice])
    setSelectedCategory("All Categories")
    setSelectedCondition("All Conditions")
    setSelectedSort("featured")
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-green-900/80 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            <img
              src="https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg"
              alt="Farm equipment background"
              sizes="100vw"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="relative z-20 container mx-auto py-28 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md">Qalabka Beeraha</h1>
          <div className="flex justify-center items-center gap-2 text-lg font-medium">
            <Link to="/" className="hover:text-green-200 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-green-100">Qalabka Beeraha</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for farm equipment..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="w-full lg:w-1/4">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">FILTER BY:</h3>

                  {/* Price Range Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-base font-semibold text-gray-700">Price</h4>
                      <span className="text-sm text-gray-500">
                        ${priceRange[0]} - ${priceRange[1]}
                      </span>
                    </div>
                    <Slider
                      defaultValue={[minPrice, maxPrice]}
                      min={minPrice}
                      max={maxPrice}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                  </div>

                  {/* Condition */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-700 mb-3">Condition</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {conditions.slice(1).map((condition) => (
                        <div
                          key={condition}
                          className={`flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedCondition === condition
                              ? "border-green-500 bg-green-50 shadow-sm"
                              : "border-gray-200 hover:border-green-200"
                          }`}
                          onClick={() =>
                            setSelectedCondition(selectedCondition === condition ? "All Conditions" : condition)
                          }
                        >
                          <div
                            className={`w-3 h-3 rounded-full mb-2 ${
                              condition === "Available"
                                ? "bg-amber-500"
                                : condition === "Available"
                                  ? "bg-amber-500"
                                  : "bg-purple-500"
                            }`}
                          ></div>
                          <span
                            className={`text-sm font-medium ${
                              selectedCondition === condition ? "text-green-800" : "text-gray-700"
                            }`}
                          >
                            {condition}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="rounded-lg overflow-hidden border border-green-100">
                    <div className="bg-green-50 px-4 py-3">
                      <h3 className="text-lg font-bold text-green-800">QALABKA BEERAHA</h3>
                    </div>
                    <div className="p-3">
                      <ul className="space-y-2">
                        {categories.slice(1).map((category) => (
                          <li
                            key={category}
                            className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
                              selectedCategory === category
                                ? "bg-green-100 text-green-800 font-medium"
                                : "hover:bg-gray-50"
                            }`}
                            onClick={() =>
                              setSelectedCategory(selectedCategory === category ? "All Categories" : category)
                            }
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Service Types */}
                  <div className="rounded-lg overflow-hidden border border-green-100">
                    <div className="bg-green-50 px-4 py-3">
                      <h3 className="text-lg font-bold text-green-800">NOOCYADA ADEEGA</h3>
                    </div>
                    <div className="p-3">
                      <ul className="space-y-2">
                        {[
                          { id: "mechanical", label: "Qalabka Mashiinka", icon: "🔧" },
                          { id: "chemical", label: "Fertilizers Kiimikada", icon: "🧪" },
                          { id: "organic", label: "Alaabta Dabiiciga ah", icon: "🌱", defaultChecked: true },
                          { id: "tools", label: "Alaabta Beeraha", icon: "🛠️" },
                          { id: "livestock", label: "Alaabta Xoolaha", icon: "🐄" },
                        ].map(({ id, label, icon, defaultChecked }) => (
                          <li key={id} className="flex items-center px-3 py-2 rounded-md hover:bg-gray-50">
                            <div className="flex h-5 items-center">
                              <Checkbox id={id} defaultChecked={defaultChecked} className="mr-2" />
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">{icon}</span>
                              <label
                                htmlFor={id}
                                className="text-sm font-medium leading-none cursor-pointer select-none"
                              >
                                {label}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  <Button
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-50"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Horizontal Filter Line */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center mr-2">
                  <SlidersHorizontal className="h-5 w-5 text-green-700 mr-2" />
                  <span className="font-semibold text-gray-700">Filters:</span>
                </div>

                {/* Category Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-gray-300">
                      Category
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {categories.map((category) => (
                        <DropdownMenuItem
                          key={category}
                          className={selectedCategory === category ? "bg-green-50 text-green-700 font-medium" : ""}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Price Range Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-gray-300">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72 p-4">
                    <DropdownMenuLabel>Price Range</DropdownMenuLabel>
                    <div className="mt-4 px-1">
                      <Slider
                        defaultValue={[minPrice, maxPrice]}
                        min={minPrice}
                        max={maxPrice}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Condition Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-gray-300">
                      Condition
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select Condition</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {conditions.map((condition) => (
                        <DropdownMenuItem
                          key={condition}
                          className={selectedCondition === condition ? "bg-green-50 text-green-700 font-medium" : ""}
                          onClick={() => setSelectedCondition(condition)}
                        >
                          {condition}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

               
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-500">Active filters:</span>
                  {activeFilters.map((filter, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-50 text-green-700">
                      {filter}
                    </Badge>
                  ))}
                  <Button
                    variant="ghost"
                    className="h-7 px-2 text-sm text-green-700 hover:text-green-800 hover:bg-green-50"
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{Math.min(filteredTools.length, visibleCount)}</span> of{" "}
                <span className="font-semibold">{filteredTools.length}</span> results
              </p>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTools.slice(0, visibleCount).map((tool) => (
                <Link to={`/SingleProduct`} key={tool.id} className="block">
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={tool.image || "/placeholder.svg"}
                        alt={tool.title}
                        className="object-cover transition-transform duration-500 hover:scale-110 w-full"
                      />
                      <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${tool.price.toLocaleString()}
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`
                          ${
                            tool.condition === "Available"
                              ? "bg-green-500"
                              : tool.condition === "Available"
                                ? "bg-amber-500"
                                : "bg-purple-500"
                          }
                        `}
                        >
                          {tool.condition}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="text-sm text-green-700 font-medium mb-1">{tool.category}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(tool.rating) ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-1 text-sm text-gray-500">{tool.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                          View Details
                        </Button>
                        <div className="text-green-700 font-bold">${tool.price.toLocaleString()}</div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {visibleCount < filteredTools.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg"
                >
                  Load More
                </Button>
              </div>
            )}

            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No tools found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="bg-emerald-50 text-white py-20 pt-32 relative overflow-hidden ">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300"></div> */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-700/50"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-emerald-700/50"
                  ></motion.div>
                </div>
      
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <Leaf className="w-10 h-10 text-emerald-700" />
                    </motion.div>
      
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
                      Ready to Transform Your
                      <span className="bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent ml-2">
                        Agricultural Operations?
                      </span>
                    </h2>
                    <p className="text-xl text-black mb-10">
                      Contact our team of experts today to discuss how our services can help you achieve better results and
                      maximize your farm's potential.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-emerald-900 bg-white rounded-full hover:bg-emerald-50 transition-colors duration-300 shadow-lg shadow-emerald-900/20"
                        >
                          Contact Us
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/services/pricing"
                          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-700 rounded-full hover:bg-emerald-600 transition-colors duration-300 border border-emerald-600 shadow-lg shadow-emerald-900/20"
                        >
                          View Pricing
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
    </div>
  )
}
