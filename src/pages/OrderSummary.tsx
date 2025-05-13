import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Download, Home } from "lucide-react"
import {Link} from "react-router-dom"

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">Your tractor rental has been successfully booked.</p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-28%20105154-GRTkQy3cacRGdRq20zfwq9gI4f8A6p.png"
                  alt="Cagaf Tractor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-medium">Cagaf Tractor</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  April 28 - May 1, 2025 (4 days)
                </div>
                <div className="text-sm text-gray-500 mt-1">Booking ID: #AGR28042025</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-medium">$660.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payment Status</span>
                <span className="text-green-600 font-medium">Paid</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            A confirmation email has been sent to your email address with all the details.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download Receipt
            </Button>
            <Link to="/" className="w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
