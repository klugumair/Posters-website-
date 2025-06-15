
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { useCart } from "../hooks/useCart";

// Same product data as in Shop.tsx
const SHOP_ITEMS = [
  {
    id: 1,
    title: "Galactic Painter",
    img: "/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png",
    price: 14,
    desc: "Astronaut in purple nebula, stunning cosmic wall art.",
    category: "Space",
    fullDescription: "This breathtaking piece features an astronaut floating through a purple nebula, capturing the wonder and mystery of space exploration. Perfect for adding a cosmic touch to any room."
  },
  {
    id: 2,
    title: "Celestial Portal",
    img: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=400&q=80",
    price: 12,
    desc: "Blue starry night poster, surreal & dreamy.",
    category: "Abstract",
    fullDescription: "A mesmerizing portal through the cosmos, featuring deep blues and ethereal starlight. This surreal artwork brings a sense of mystery and wonder to your space."
  },
  {
    id: 3,
    title: "Neon Peaks",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
    price: 13,
    desc: "Futuristic mountain fog print, bold accent for any space.",
    category: "Nature",
    fullDescription: "Dramatic mountain silhouettes emerge from neon-tinted fog, creating a futuristic landscape that combines natural beauty with cyberpunk aesthetics."
  },
  {
    id: 4,
    title: "Ocean Dreams",
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
    price: 11,
    desc: "Serene water landscape, perfect for relaxation spaces.",
    category: "Nature",
    fullDescription: "Tranquil ocean waves meet a peaceful horizon in this calming artwork. The soft blues and gentle movement create a meditative atmosphere perfect for bedrooms or meditation spaces."
  },
  {
    id: 5,
    title: "Cosmic Cat",
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
    price: 10,
    desc: "Adorable feline with cosmic background, whimsical art.",
    category: "Animals",
    fullDescription: "A charming tabby cat set against a starry cosmic backdrop. This whimsical piece combines the comfort of our feline friends with the wonder of the universe."
  },
  {
    id: 6,
    title: "Modern Living",
    img: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
    price: 9,
    desc: "Contemporary interior design inspiration.",
    category: "Interior",
    fullDescription: "Clean lines and modern aesthetics showcase contemporary interior design. Perfect for those who appreciate minimalist beauty and architectural elegance."
  },
  {
    id: 7,
    title: "Circuit Dreams",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    price: 15,
    desc: "Abstract circuit board art, perfect for tech enthusiasts.",
    category: "Technology",
    fullDescription: "Intricate circuit board patterns create an abstract technological landscape. Ideal for offices, gaming rooms, or any space that celebrates the beauty of technology."
  },
  {
    id: 8,
    title: "Code Matrix",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    price: 16,
    desc: "Programming code visualization, developer's dream.",
    category: "Technology",
    fullDescription: "Flowing lines of code create a digital matrix effect. A must-have for developers, programmers, and anyone passionate about the digital world."
  },
  {
    id: 9,
    title: "Laptop Workspace",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    price: 8,
    desc: "Minimalist workspace inspiration.",
    category: "Interior",
    fullDescription: "A clean, organized workspace featuring a laptop setup. Perfect inspiration for home offices and anyone who appreciates minimalist productivity aesthetics."
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const product = SHOP_ITEMS.find(item => item.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-blue-600 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-card/70 backdrop-blur border-b border-border">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-foreground hover:text-blue-600 transition"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </button>
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

      {/* Product Detail */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-96 md:h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              
              <p className="text-muted-foreground text-lg mb-6">
                {product.fullDescription}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-blue-600">${product.price}</span>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg"
                >
                  Add to Cart
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

              <div className="mt-8 p-4 bg-card rounded-lg border">
                <h3 className="font-semibold mb-2">Product Details</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• High-quality digital print</li>
                  <li>• Multiple size options available</li>
                  <li>• Ready to frame</li>
                  <li>• Fast shipping worldwide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
