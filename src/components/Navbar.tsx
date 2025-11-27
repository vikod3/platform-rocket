import { useState } from "react";
import { NavbarGradientButton } from "./NavbarGradientButton";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { AnimatedText } from "./AnimatedText";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "Feature",
    href: "/feature"
  }, {
    name: "Pricing",
    href: "/pricing"
  }];
  return <nav className="w-full py-5 px-8 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logo} alt="Design Rocket" className="h-8 w-auto object-contain" />
      </a>

      {/* Desktop Navigation Items - Hidden on mobile/tablet */}
      <div className="hidden lg:flex items-center gap-2 px-2 border-2 border-white/5 rounded-lg shadow-inner-glow">
        {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setActiveLink(item.name)} className={cn("px-4 py-2 rounded-md transition-colors", activeLink === item.name ? "text-violet-100" : "text-white/50 hover:text-white/80")}>
            <AnimatedText>{item.name}</AnimatedText>
          </a>)}
      </div>

      {/* Right Section - Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        <a href="/auth" className="text-white/50 hover:text-white/80 transition-colors px-4 py-2">
          Login
        </a>
        <a href="/auth?mode=signup">
          <NavbarGradientButton>Get Started</NavbarGradientButton>
        </a>
      </div>

      {/* Mobile/Tablet - Hamburger Menu */}
      <div className="flex lg:hidden items-center gap-4">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="text-violet-100 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card border-white/10 w-[280px]">
            <div className="flex flex-col gap-6 mt-8">
              {/* Navigation Links */}
              <div className="flex flex-col gap-2">
                {navItems.map(item => <a key={item.name} href={item.href} onClick={() => {
                setActiveLink(item.name);
                setMobileMenuOpen(false);
              }} className={cn("px-4 py-3 rounded-md transition-colors text-lg", activeLink === item.name ? "text-violet-100 bg-white/5" : "text-white/50 hover:text-white/80 hover:bg-white/5")}>
                    {item.name}
                  </a>)}
              </div>

              {/* Login & Get Started Buttons */}
              <div className="px-4 flex flex-col gap-3">
                <a href="/auth" className="text-white/50 hover:text-white/80 transition-colors py-2 text-center">
                  Login
                </a>
                <a href="/auth?mode=signup">
                  <NavbarGradientButton>Get Started</NavbarGradientButton>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>;
};