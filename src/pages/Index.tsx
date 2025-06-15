import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const STEPS = [
  {
    title: "1. Pick Your Style",
    description: "Choose from modern AI art or fully custom. Tell us your idea and pick a size.",
  },
  {
    title: "2. We Design It",
    description: "Our AI and designers craft a bespoke, high-res poster just for you.",
  },
  {
    title: "3. Delivered Fast",
    description: "Approve your design and get it delivered to your door, ready to hang.",
  },
];

// Sample shop products
const SHOP_ITEMS = [
  {
    id: 1,
    title: "Galactic Painter",
    img: "/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png",
    price: "$12",
    desc: "Astronaut in purple nebula, stunning cosmic wall art.",
  },
  {
    id: 2,
    title: "Celestial Portal",
    img: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=400&q=80",
    price: "$10",
    desc: "Blue starry night poster, surreal & dreamy.",
  },
  {
    id: 3,
    title: "Neon Peaks",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
    price: "$11",
    desc: "Futuristic mountain fog print, bold accent for any space.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground px-0 py-0">
      {/* Header with logo & nav */}
      <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-card/70 backdrop-blur fixed top-0 left-0 z-40 border-b border-border">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/31a7662c-7cae-413d-bf9e-4852bc320833.png"
            alt="AetherGraphix Logo"
            className="h-10 w-10 rounded-full shadow object-cover border border-border"
            draggable={false}
          />
          <span className="text-2xl font-extrabold font-mono tracking-tight">AetherGraphix</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/shop" className="text-md text-foreground font-medium hover:text-blue-600 transition">Shop</Link>
          <a href="#how" className="text-md text-foreground font-medium hover:text-blue-600 transition">How it works</a>
          <a href="#about" className="text-md text-foreground font-medium hover:text-blue-600 transition">About</a>
        </nav>
        <ThemeToggle />
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-20 md:h-20" />

      {/* Hero */}
      <section className="w-full max-w-2xl mx-auto flex flex-col items-center text-center px-6 py-12">
        <img
          src="https://i.pinimg.com/736x/e3/87/a2/e387a2fc68928665bd6e68eec840af8a.jpg"
          alt="Stunning AI art example"
          className="rounded-xl shadow-md mb-8 w-full max-h-72 object-cover"
          draggable={false}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">AetherGraphix</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Custom-designed posters powered by AI or made by hand — unique decor for your space.
        </p>
        <a
          href="mailto:order@blissposters.com?subject=Order%20Custom%20Poster"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition mb-4"
        >
          Order a Custom Poster
        </a>
      </section>

      {/* Shop Section */}
      <section
        id="shop"
        className="w-full max-w-5xl mx-auto px-4 py-12 mt-6 md:mt-8 bg-background/90 rounded-lg shadow-inner"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Shop Featured Prints</h2>
          <Link 
            to="/shop" 
            className="text-blue-600 hover:text-blue-700 font-medium transition"
          >
            View All →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {SHOP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-card flex flex-col rounded-xl overflow-hidden shadow hover:shadow-lg hover-scale transition duration-200 group border"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
              <div className="flex flex-col flex-1 p-4 justify-between">
                <div>
                  <div className="text-xl font-semibold mb-1">{item.title}</div>
                  <div className="text-muted-foreground text-xs mb-2">{item.desc}</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-lg">{item.price}</span>
                  <button
                    className="px-4 py-1 bg-blue-600 rounded text-white hover:bg-blue-700 text-sm font-medium transition"
                    disabled
                    title="Coming Soon"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full max-w-2xl mx-auto text-center mt-12 px-4">
        <h2 className="text-2xl font-semibold mb-3">Why AetherGraphix?</h2>
        <p className="text-md text-muted-foreground">
          From vibrant AI-generated art to fully custom creations, we make posters that bring your walls to life. No templates, no limits—just one-of-a-kind design, made easy.
        </p>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="w-full max-w-4xl mx-auto mt-16 px-4"
      >
        <h3 className="text-xl font-semibold text-center mb-6 text-blue-600">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col items-center p-6 bg-card rounded-lg shadow hover:shadow-lg transition"
            >
              <div
                className={
                  "text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4"
                }
              >
                {idx + 1}
              </div>
              <div className="font-semibold text-lg mb-1">{step.title}</div>
              <div className="text-muted-foreground text-sm">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="w-full max-w-2xl mx-auto mt-20 text-center border-t border-border pt-8 text-muted-foreground text-sm mb-2"
      >
        <div>
          Questions?{" "}
          <a href="mailto:aiposters23@gmail.com" className="text-blue-600 hover:underline">
            aiposters23@gmail.com
          </a>
        </div>
        <div className="mt-2 opacity-60">AetherGraphix &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Index;
