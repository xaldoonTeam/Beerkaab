import {Link} from "react-router-dom"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}
export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center text-sm ${className}`}>
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />}
            {item.active ? (
              <span className="font-medium text-green-700">{item.label}</span>
            ) : (
              <Link to={item.href} className="text-gray-600 hover:text-green-700 hover:underline transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
