
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { useCart } from "../hooks/useCart";
import { SHOP_ITEMS } from "../data/products";

const Shop = () => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(SHOP_ITEMS.map(item => item.category)))];
  
  const filteredItems = selectedCategory === "All" 
    ? SHOP_ITEMS 
    : SHOP_ITEMS.filter(item => item.category === selectedCategory);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (item: typeof SHOP_ITEMS[0], e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-card/70 backdrop-blur border-b border-border">
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
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Shop Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Our Collection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover unique AI-generated and custom-designed posters to transform your space.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-card text-foreground hover:bg-blue-600/10 border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-card flex flex-col rounded-xl overflow-hidden shadow hover:shadow-lg hover-scale transition duration-200 group border cursor-pointer"
                onClick={() => handleProductClick(item.id)}
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6 justify-between">
                  <div>
                    <div className="text-xl font-semibold mb-2">{item.title}</div>
                    <div className="text-muted-foreground text-sm mb-4">{item.desc}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl text-blue-600">${item.price}</span>
                    <button
                      className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 text-sm font-medium transition"
                      onClick={(e) => handleAddToCart(item, e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-card rounded-xl p-8 border">
            <h2 className="text-2xl font-bold mb-4">Want Something Custom?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Let us create a custom poster just for you.
            </p>
            <Link
              to="/custom-order"
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Order Custom Poster
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
