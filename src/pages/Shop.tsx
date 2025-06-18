
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "../components/ThemeToggle";

const Shop = () => {
  const { addToCart, cartItems } = useCart();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const getQuantity = (productId: number) => quantities[productId] || 1;

  const setQuantity = (productId: number, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const handleAddToCart = (product: any) => {
    const quantity = getQuantity(product.id);
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
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
        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="relative flex items-center gap-2 text-foreground hover:text-blue-600 transition"
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
            <span className="hidden md:inline text-sm font-medium">Cart</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Poster Collection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of high-quality posters to transform your space
            </p>
          </div>

          {/* Custom Order Section */}
          <div className="mb-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Want Something Custom?</h2>
            <p className="text-white/90 mb-6">
              Create your own personalized poster with your images and our professional design touch
            </p>
            <Link to="/custom-order">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                <Plus className="w-4 h-4 mr-2" />
                Order Custom Poster
              </Button>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-card rounded-lg shadow border overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">(4.9)</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(product.id, getQuantity(product.id) - 1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{getQuantity(product.id)}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(product.id, getQuantity(product.id) + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
