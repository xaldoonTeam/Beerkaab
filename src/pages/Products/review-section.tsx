"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

interface Review {
  id: string
  user: string
  rating: number
  date: string
  comment: string
  avatar: string
}

interface ReviewSectionProps {
  reviews: Review[]
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
        <div className="flex items-center">
          <div className="flex mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${star <= averageRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-gray-700 font-medium">{averageRating.toFixed(1)} out of 5</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <div className="flex items-start">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.user} />
                <AvatarFallback>{review.user.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-800">{review.user}</h4>
                  <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <div className="flex my-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Button */}
      {!showReviewForm ? (
        <Button
          onClick={() => setShowReviewForm(true)}
          variant="outline"
          className="w-full border-green-600 text-green-700 hover:bg-green-50"
        >
          Write a Review
        </Button>
      ) : (
        <div className="space-y-4 border-t border-gray-100 pt-6">
          <h3 className="font-medium text-gray-800">Write Your Review</h3>

          {/* Rating Selection */}
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Your Rating:</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-6 w-6 transition-colors ${
                      star <= (hoverRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 hover:text-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <Textarea placeholder="Share your experience with this product..." className="min-h-[120px]" />

          <div className="flex space-x-3">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Submit Review</Button>
            <Button variant="outline" onClick={() => setShowReviewForm(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

