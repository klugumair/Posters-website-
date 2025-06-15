
import React from "react";

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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-background text-foreground px-6 py-12">
      {/* Hero */}
      <section className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
          alt="poster art example"
          className="rounded-xl shadow-md mb-8 w-full max-h-72 object-cover"
          draggable={false}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Bliss Posters
        </h1>
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

      {/* About */}
      <section className="w-full max-w-2xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-semibold mb-3">Why Bliss Posters?</h2>
        <p className="text-md text-muted-foreground">
          From vibrant AI-generated art to fully custom creations, we make posters that bring your walls to life. No templates, no limits—just one-of-a-kind design, made easy.
        </p>
      </section>

      {/* How it works */}
      <section className="w-full max-w-4xl mx-auto mt-16">
        <h3 className="text-xl font-semibold text-center mb-6 text-blue-600">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col items-center p-6 bg-card rounded-lg shadow hover:shadow-lg transition"
            >
              <div className={`text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4`}>{idx + 1}</div>
              <div className="font-semibold text-lg mb-1">{step.title}</div>
              <div className="text-muted-foreground text-sm">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="w-full max-w-2xl mx-auto mt-20 text-center border-t border-border pt-8 text-muted-foreground text-sm">
        <div>Questions? <a href="mailto:hello@blissposters.com" className="text-blue-600 hover:underline">hello@blissposters.com</a></div>
        <div className="mt-2 opacity-60">Bliss Posters &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Index;
