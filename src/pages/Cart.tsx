
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2 } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Header */}
        <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-card/70 backdrop-blur border-b border-border">
          <div className="flex items-center gap-4">
            <Link 
              to="/shop" 
              className="flex items-center gap-2 text-foreground hover:text-blue-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Shop</span>
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

        {/* Empty Cart */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">Add some amazing posters to get started!</p>
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
            to="/shop" 
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Shop</span>
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

      {/* Cart Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 text-sm font-medium transition"
            >
              Clear Cart
            </button>
          </div>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg border p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-2xl font-bold text-blue-600">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full border hover:bg-muted transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full border hover:bg-muted transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-semibold">
                          Total: ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-600 hover:text-red-700 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 bg-card rounded-lg border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Order Summary</h2>
              <div className="text-3xl font-bold text-blue-600">
                ${getTotalPrice().toFixed(2)}
              </div>
            </div>

            <div className="space-y-4">
              <button
                className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg"
                onClick={() => alert("Checkout functionality coming soon!")}
              >
                Proceed to Checkout
              </button>
              
              <div className="text-center">
                <Link 
                  to="/shop" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
