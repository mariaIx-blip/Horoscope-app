import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, FileText, BookOpen, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home, emoji: "🏠" },
    { path: "/input", label: "Input Form", icon: FileText, emoji: "📝" },
    { path: "/storybook", label: "Storybook", icon: BookOpen, emoji: "📚" },
    { path: "/tarot", label: "Tarot Gift", icon: Sparkles, emoji: "🔮" },
    { path: "/about", label: "About", icon: Info, emoji: "ℹ️" },
  ];

  return (
    <>
      {/* Sidebar Toggle Button */}
      <Button
        onClick={toggleSidebar}
        data-testid="button-sidebar-toggle"
        className="fixed top-6 left-6 z-50 bg-primary hover:bg-primary/80 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-glow"
        size="icon"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
          data-testid="overlay-sidebar"
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-card/95 backdrop-blur-lg border-r border-border z-50 sidebar-transition transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        data-testid="sidebar-navigation"
      >
        <div className="p-6">
          <h2 className="text-xl font-magical text-secondary mb-6" data-testid="text-sidebar-title">
            Navigation
          </h2>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeSidebar}
                data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                <div
                  className={cn(
                    "flex items-center space-x-3 text-foreground hover:text-secondary transition-colors cursor-pointer p-3 rounded-lg hover:bg-primary/20",
                    location === item.path && "bg-primary/20 text-secondary"
                  )}
                >
                  <span className="text-xl" data-testid={`emoji-${item.label.toLowerCase()}`}>
                    {item.emoji}
                  </span>
                  <span data-testid={`text-${item.label.toLowerCase()}`}>{item.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Margin Adjustment */}
      <style>{`
        #mainContent {
          margin-left: ${isOpen ? "16rem" : "0"};
        }
        
        @media (max-width: 1024px) {
          #mainContent {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
