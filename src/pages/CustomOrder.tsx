
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, ExternalLink, ShoppingCart, Copy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "../components/ThemeToggle";
import { useCart } from "../hooks/useCart";

const POSTER_SIZES = [
  { id: "small", name: "Small (11x14 inches)", price: 12 },
  { id: "medium", name: "Medium (16x20 inches)", price: 15 },
  { id: "large", name: "Large (18x24 inches)", price: 20 },
  { id: "xlarge", name: "Extra Large (24x36 inches)", price: 25 }
];

const CustomOrder = () => {
  const { toast } = useToast();
  const { cartItems } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const generateCustomOrderSummary = () => {
    const selectedSizeInfo = POSTER_SIZES.find(size => size.id === selectedSize);
    const orderDetails = [
      `Custom Poster Order`,
      `Name: ${customerName}`,
      `Email: ${customerEmail}`,
      `Size: ${selectedSizeInfo?.name || "Not selected"}`,
      `Price: $${selectedSizeInfo?.price || 0}`,
      `Description: ${description || "No description provided"}`,
      `Images: Will be sent in Instagram conversation`
    ].join('\n');
    
    return `Hi! I'd like to order a custom poster:\n\n${orderDetails}\n\nI will send the images in our Instagram conversation.`;
  };

  const handleInstagramContact = async () => {
    if (!selectedSize || !customerName || !customerEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields before contacting us.",
        variant: "destructive",
      });
      return;
    }

    const orderSummary = generateCustomOrderSummary();
    
    try {
      await navigator.clipboard.writeText(orderSummary);
      toast({
        title: "Order details copied!",
        description: "Your custom order details have been copied. Now opening Instagram to message us!",
      });
    } catch (error) {
      toast({
        title: "Please copy manually",
        description: "Copy the order details below and paste them when messaging us on Instagram.",
      });
    }

    window.open('https://www.instagram.com/aethergraphix/', '_blank');
  };

  const handleCopyOrderSummary = async () => {
    if (!selectedSize || !customerName || !customerEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields to copy the order summary.",
        variant: "destructive",
      });
      return;
    }

    const orderSummary = generateCustomOrderSummary();
    
    try {
      await navigator.clipboard.writeText(orderSummary);
      toast({
        title: "Order summary copied!",
        description: "The order details have been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please select and copy the text manually.",
        variant: "destructive",
      });
    }
  };

  const selectedSizeInfo = POSTER_SIZES.find(size => size.id === selectedSize);

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
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Poster Order</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create a personalized poster that's uniquely yours by providing your details and sending us your images via Instagram.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <Input
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Poster Size *</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a size" />
                      </SelectTrigger>
                      <SelectContent>
                        {POSTER_SIZES.map((size) => (
                          <SelectItem key={size.id} value={size.id}>
                            {size.name} - ${size.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description (Optional)</label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe how you want your poster designed, any text to include, color preferences, etc."
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Image Instructions */}
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Your Images</h2>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Instagram className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Send Images via Instagram</h3>
                    <p className="text-muted-foreground mb-4">
                      Your images will be sent personally through our Instagram conversation after you contact us. This ensures the best quality and direct communication for your custom order.
                    </p>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        💡 <strong>Tip:</strong> Prepare your high-quality images (JPG, PNG) and send them to us via Instagram DM along with your order details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary & Contact */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                <div className="space-y-3">
                  {POSTER_SIZES.map((size) => (
                    <div 
                      key={size.id} 
                      className={`flex justify-between p-3 rounded border transition ${
                        selectedSize === size.id ? 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800' : ''
                      }`}
                    >
                      <span className="font-medium">{size.name}</span>
                      <span className="font-bold text-blue-600">${size.price}</span>
                    </div>
                  ))}
                </div>
                
                {selectedSizeInfo && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Selected Total:</span>
                      <span className="text-blue-600">${selectedSizeInfo.price}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Instagram */}
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg text-center">
                    <Instagram className="w-8 h-8 text-white mx-auto mb-2" />
                    <h3 className="text-white font-semibold mb-2">Order via Instagram</h3>
                    <p className="text-white/90 text-sm mb-4">
                      Contact us on Instagram to finalize your custom poster order
                    </p>
                    <Button 
                      onClick={handleInstagramContact}
                      className="w-full bg-white text-purple-600 hover:bg-gray-100"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Contact Us on Instagram
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-2 bg-muted/30 p-4 rounded-lg">
                    <p className="font-medium">How it works:</p>
                    <p>1. 📋 Fill in all the required information above</p>
                    <p>2. 📱 Click "Contact Us on Instagram"</p>
                    <p>3. 💬 Send us a message with your order details</p>
                    <p>4. 🖼️ Upload your images in the Instagram chat</p>
                    <p>5. ✨ We'll confirm your order and arrange payment!</p>
                  </div>
                </div>
              </div>

              {/* Order Summary Preview */}
              {(customerName || customerEmail || selectedSize) && (
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Order Summary Preview:</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyOrderSummary}
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line bg-background p-3 rounded border select-all">
                    {generateCustomOrderSummary()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomOrder;
