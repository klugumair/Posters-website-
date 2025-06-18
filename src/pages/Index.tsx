
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
            alt="AetherGraphix Logo"
            className="h-8 w-8 rounded-full shadow object-cover border border-border"
            draggable={false}
          />
          <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-blue-600 transition font-medium">Home</Link>
          <Link to="/shop" className="text-foreground hover:text-blue-600 transition font-medium">Shop</Link>
          <a href="#about" className="text-foreground hover:text-blue-600 transition font-medium">About</a>
        </nav>
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AetherGraphix
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your space with stunning, high-quality posters that capture the essence of modern art and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="text-lg px-8 py-4">
                Explore Collection
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Custom Orders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-card rounded-lg shadow border overflow-hidden hover:shadow-lg transition-all group-hover:scale-105">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About AetherGraphix</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're passionate about bringing exceptional art into your everyday spaces. Our carefully curated collection 
            features premium quality posters that blend contemporary aesthetics with timeless appeal. Each piece is 
            printed on high-grade materials to ensure vibrant colors and lasting durability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">High-grade materials and professional printing for lasting beauty.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Quick and secure delivery to bring art to your doorstep.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
              <p className="text-muted-foreground">Personalized posters tailored to your unique vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
              alt="AetherGraphix Logo"
              className="h-8 w-8 rounded-full shadow object-cover border border-border"
              draggable={false}
            />
            <span className="text-xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Transforming spaces with exceptional art and design.
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition">Shop</Link>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
            <Link to="/custom-order" className="text-muted-foreground hover:text-foreground transition">Custom Orders</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 AetherGraphix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
