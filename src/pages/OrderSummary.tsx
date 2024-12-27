"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Replace with your actual Stripe public key
const stripePromise = loadStripe("your-publishable-key-here");

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const items = [
  { id: 1, name: "Product A", quantity: 2, price: 25 },
  { id: 2, name: "Product B", quantity: 1, price: 30 },
  { id: 3, name: "Product C", quantity: 3, price: 15 },
];

// Stripe Payment Component
function StripePayment({ total }: { total: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleStripePayment = async () => {
    if (!stripe || !elements) {
      console.error("Stripe has not loaded yet!");
      return;
    }

    setPaymentLoading(true);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        body: JSON.stringify({ amount: total * 100 }), // Amount in cents
        headers: { "Content-Type": "application/json" },
      });

      const { clientSecret } = await res.json();

      const cardElement = elements.getElement(CardElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement! },
      });

      if (error) {
        console.error("Payment failed:", error.message);
        alert("Payment failed! Please try again.");
      } else if (paymentIntent?.status === "succeeded") {
        console.log("Payment succeeded:", paymentIntent);
        alert("Payment successful!");
      }
    } catch (err) {
      console.error("Error during payment:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-4 p-4 border rounded-md">
        <CardElement />
      </div>
      <Button
        onClick={handleStripePayment}
        disabled={paymentLoading}
        className="w-full border border-gray-300 hove:text-gray-700 hover:bg-gray-100 bg-green-800 text-white"
      >
        {paymentLoading ? "Processing..." : "Pay with Stripe"}
      </Button>
    </div>
  );
}

function OrderSummary() {
  const [isZaadDialogOpen, setIsZaadDialogOpen] = useState(false);
  const [zaadNumber, setZaadNumber] = useState("");

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  const handleZaadPayment = () => {
    alert(`Processing Zaad payment for number: ${zaadNumber}`);
    setIsZaadDialogOpen(false);
    setZaadNumber("");
  };

  return (
    <div className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Button
            onClick={() => setIsZaadDialogOpen(true)}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Pay with Zaad
          </Button>
        </div>

        <Dialog open={isZaadDialogOpen} onOpenChange={setIsZaadDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enter Zaad Number</DialogTitle>
              <DialogDescription>
                Please enter your Zaad number to proceed with the payment.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Label htmlFor="zaadNumber" className="block mb-2 text-xl text-green-800">
                Fadlan kuso dir Number Kan
              </Label>
              <p className="mt-5 text-lg font-semibold">063 4860444</p>
            </div>
            <DialogFooter />
          </DialogContent>
        </Dialog>

        {/* Stripe Payment Form */}
        <Elements stripe={stripePromise}>
          <StripePayment total={total} />
        </Elements>
      </div>
    </div>
  );
}

export default OrderSummary;
