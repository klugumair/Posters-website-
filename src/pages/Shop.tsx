
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

// Sample shop products - expanded for dedicated shop page
const SHOP_ITEMS = [
  {
    id: 1,
    title: "Galactic Painter",
    img: "/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png",
    price: "$14",
    desc: "Astronaut in purple nebula, stunning cosmic wall art.",
    category: "Space"
  },
  {
    id: 2,
    title: "Celestial Portal",
    img: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=400&q=80",
    price: "$12",
    desc: "Blue starry night poster, surreal & dreamy.",
    category: "Abstract"
  },
  {
    id: 3,
    title: "Neon Peaks",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
    price: "$13",
    desc: "Futuristic mountain fog print, bold accent for any space.",
    category: "Nature"
  },
  {
    id: 4,
    title: "Ocean Dreams",
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
    price: "$11",
    desc: "Serene water landscape, perfect for relaxation spaces.",
    category: "Nature"
  },
  {
    id: 5,
    title: "Cosmic Cat",
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
    price: "$10",
    desc: "Adorable feline with cosmic background, whimsical art.",
    category: "Animals"
  },
  {
    id: 6,
    title: "Modern Living",
    img: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
    price: "$9",
    desc: "Contemporary interior design inspiration.",
    category: "Interior"
  }
];

const Shop = () => {
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
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Shop Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Our Collection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover unique AI-generated and custom-designed posters to transform your space.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SHOP_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-card flex flex-col rounded-xl overflow-hidden shadow hover:shadow-lg hover-scale transition duration-200 group border"
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
                    <span className="font-bold text-2xl text-blue-600">{item.price}</span>
                    <button
                      className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 text-sm font-medium transition"
                      disabled
                      title="Coming Soon"
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
            <a
              href="mailto:order@blissposters.com?subject=Custom%20Poster%20Request"
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Order Custom Poster
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
