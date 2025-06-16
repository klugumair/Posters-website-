
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { Button } from "../components/ui/button";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-card/70 backdrop-blur border-b border-border">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
            alt="AetherGraphix Logo"
            className="h-8 w-8 rounded-full shadow object-cover border border-border"
            draggable={false}
          />
          <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
        </Link>
        <ThemeToggle />
      </header>

      {/* Success Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border mb-6">
            <h2 className="font-semibold mb-2">What's Next?</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• You'll receive an email confirmation shortly</li>
              <li>• Your order will be processed within 1-2 business days</li>
              <li>• Shipping typically takes 3-5 business days</li>
              <li>• You'll receive tracking information once shipped</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Link to="/shop" className="block">
              <Button variant="outline" className="w-full">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccess;
