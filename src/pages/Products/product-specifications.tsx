"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

interface Specification {
  name: string
  value: string
}

interface ProductSpecificationsProps {
  specifications: Specification[]
  features: string[]
}

export function ProductSpecifications({ specifications, features }: ProductSpecificationsProps) {
  return (
    <Tabs defaultValue="specifications" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
      </TabsList>

      <TabsContent value="specifications" className="mt-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <dl className="divide-y divide-gray-200">
            {specifications.map((spec, index) => (
              <div key={index} className="py-3 grid grid-cols-2">
                <dt className="text-sm font-medium text-gray-600">{spec.name}</dt>
                <dd className="text-sm text-gray-900">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </TabsContent>

      <TabsContent value="features" className="mt-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  )
}
