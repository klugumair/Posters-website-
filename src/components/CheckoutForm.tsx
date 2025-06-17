
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useCart } from "../hooks/useCart";
import { Instagram, ExternalLink, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice } = useCart();
  const { toast } = useToast();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderCopied, setOrderCopied] = useState(false);

  const generateOrderSummary = () => {
    const orderDetails = cartItems.map(item => 
      `${item.title} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const total = getTotalPrice();
    
    return `Hi! I'd like to order these items:\n\n${orderDetails}\n\nTotal: $${total.toFixed(2)}`;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setOrderCopied(true);
      toast({
        title: "Order details copied!",
        description: "Your order summary has been copied to clipboard. Now click Instagram to message us!",
      });
      setTimeout(() => setOrderCopied(false), 3000);
      return true;
    } catch (error) {
      console.log('Clipboard failed:', error);
      toast({
        title: "Clipboard not available",
        description: "Please manually copy your order details below.",
        variant: "destructive",
      });
      setShowOrderModal(true);
      return false;
    }
  };

  const handleInstagramRedirect = async () => {
    const orderSummary = generateOrderSummary();
    const copied = await copyToClipboard(orderSummary);
    
    // Always open Instagram regardless of copy success
    window.open('https://www.instagram.com/aethergraphix/', '_blank');
  };

  const handleManualCopy = async () => {
    const orderSummary = generateOrderSummary();
    await copyToClipboard(orderSummary);
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
              <h2 className="text-2xl font-semibold">Order via Instagram</h2>
              <p className="text-muted-foreground">
                Complete your order by messaging us on Instagram. We'll copy your order details and open our Instagram page.
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleInstagramRedirect}
                className="w-full py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Instagram className="w-5 h-5 mr-2" />
                {orderCopied ? "Order Copied! " : "Copy Order & "}Open Instagram
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>

              <Button 
                onClick={handleManualCopy}
                variant="outline"
                className="w-full"
              >
                {orderCopied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {orderCopied ? "Copied!" : "Copy Order Details"}
              </Button>
            </div>

            <div className="text-sm text-muted-foreground space-y-2 bg-muted/30 p-4 rounded-lg">
              <p className="font-medium">How it works:</p>
              <p>1. 📋 Click "Copy Order & Open Instagram"</p>
              <p>2. 📱 You'll be taken to our Instagram page</p>
              <p>3. 💬 Send us a message and paste your order details</p>
              <p>4. ✨ We'll confirm your order and arrange payment!</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Your Order Details:</h3>
              <Button 
                onClick={handleManualCopy}
                variant="ghost"
                size="sm"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground whitespace-pre-line bg-background p-3 rounded border select-all">
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

      {/* Order Details Modal */}
      <Dialog open={showOrderModal} onOpenChange={setShowOrderModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Order Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Copy the order details below and paste them when messaging us on Instagram:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap select-all">{generateOrderSummary()}</pre>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleManualCopy} className="flex-1">
                <Copy className="w-4 h-4 mr-2" />
                Copy Details
              </Button>
              <Button 
                onClick={() => {
                  window.open('https://www.instagram.com/aethergraphix/', '_blank');
                  setShowOrderModal(false);
                }}
                variant="outline"
                className="flex-1"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Open Instagram
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CheckoutForm;
