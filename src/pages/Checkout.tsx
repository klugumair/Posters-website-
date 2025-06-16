
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Header */}
        <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-card/70 backdrop-blur border-b border-border">
          <div className="flex items-center gap-4">
            <Link 
              to="/cart" 
              className="flex items-center gap-2 text-foreground hover:text-blue-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Cart</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
                alt="AetherGraphix Logo"
                className="h-8 w-8 rounded-full shadow object-cover border border-border"
                draggable={false}
              />
              <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
            </Link>
          </div>
          <ThemeToggle />
        </header>

        {/* Empty Cart Message */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">Add some items to your cart before checking out!</p>
            <Link 
              to="/shop"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-card/70 backdrop-blur border-b border-border">
        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Cart</span>
          </Link>
          <div className="h-6 w-px bg-border" />
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
              alt="AetherGraphix Logo"
              className="h-8 w-8 rounded-full shadow object-cover border border-border"
              draggable={false}
            />
            <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
          </Link>
        </div>
        <ThemeToggle />
      </header>

      {/* Checkout Content */}
      <main className="flex-1">
        <CheckoutForm />
      </main>
    </div>
  );
};

export default Checkout;
