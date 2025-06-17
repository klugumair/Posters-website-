
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useCart } from "../hooks/useCart";
import { Instagram, ExternalLink } from "lucide-react";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice } = useCart();

  const generateOrderSummary = () => {
    const orderDetails = cartItems.map(item => 
      `${item.title} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const total = getTotalPrice();
    
    return `Hi! I'd like to order these items:\n\n${orderDetails}\n\nTotal: $${total.toFixed(2)}`;
  };

  const handleInstagramRedirect = () => {
    const orderSummary = generateOrderSummary();
    const encodedMessage = encodeURIComponent(orderSummary);
    
    // Open Instagram page in new tab
    window.open('https://www.instagram.com/aethergraphix/', '_blank');
    
    // You could also copy the order details to clipboard for easy pasting
    navigator.clipboard.writeText(orderSummary).catch(() => {
      // Fallback if clipboard API fails
      console.log('Order details:', orderSummary);
    });
  };

  const subtotal = getTotalPrice();
  const total = subtotal;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Complete Your Order</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Instagram Contact Section */}
        <div className="space-y-6">
          <div className="bg-card p-8 rounded-lg border text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us on Instagram</h2>
              <p className="text-muted-foreground">
                Click the button below to reach out to us on Instagram. Your order details will be copied to your clipboard so you can easily share them with us.
              </p>
            </div>

            <Button 
              onClick={handleInstagramRedirect}
              className="w-full py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Contact on Instagram
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>📋 Your order details will be copied automatically</p>
              <p>📱 Message us @aethergraphix with your order</p>
              <p>✨ We'll handle the rest from there!</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Order Summary Preview:</h3>
            <div className="text-sm text-muted-foreground whitespace-pre-line">
              {generateOrderSummary()}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-card p-6 rounded-lg border h-fit">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Contact us for details</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
