import { useState } from "react";
import { NavbarGradientButton } from "./NavbarGradientButton";
import { Menu, User, LogOut, LayoutDashboard, FileText, Video, GraduationCap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/emotionsites_logo.png";
import { AnimatedText } from "./AnimatedText";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
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

  const authenticatedPages = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Templates", href: "/templates", icon: FileText },
    { name: "Video Backgrounds", href: "/video-backgrounds", icon: Video },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Premium", href: "/premium", icon: Crown },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  return <nav className="w-full py-5 px-8 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logo} alt="Motion Sites" className="h-8 w-auto object-contain" />
      </a>

      {/* Desktop Navigation Items - Hidden on mobile/tablet */}
      <div className="hidden lg:flex items-center gap-2 px-2 border-2 border-white/5 rounded-lg shadow-inner-glow">
        {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setActiveLink(item.name)} className={cn("px-4 py-2 rounded-md transition-colors", activeLink === item.name ? "text-violet-100" : "text-white/50 hover:text-white/80")}>
            <AnimatedText>{item.name}</AnimatedText>
          </a>)}
      </div>

      {/* Right Section - Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition-colors">
                <User className="w-4 h-4 text-violet-100" />
                <span className="text-white/80">Menu</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-white/10">
              <DropdownMenuLabel className="text-violet-100">My Pages</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              {authenticatedPages.map((page) => (
                <DropdownMenuItem
                  key={page.name}
                  onClick={() => navigate(page.href)}
                  className="cursor-pointer hover:bg-white/5"
                >
                  <page.icon className="w-4 h-4 mr-2" />
                  {page.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="cursor-pointer hover:bg-white/5 text-red-400"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <a href="/auth" className="text-white/50 hover:text-white/80 transition-colors px-4 py-2">
              Login
            </a>
            <a href="/auth?mode=signup">
              <NavbarGradientButton>Get Started</NavbarGradientButton>
            </a>
          </>
        )}
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

              {/* Login & Get Started Buttons OR Authenticated Menu */}
              <div className="px-4 flex flex-col gap-3">
                {user ? (
                  <>
                    <div className="space-y-2">
                      <p className="text-xs text-white/40 uppercase tracking-wider px-2">My Pages</p>
                      {authenticatedPages.map((page) => (
                        <button
                          key={page.name}
                          onClick={() => {
                            navigate(page.href);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-white/70 hover:text-white/90 hover:bg-white/5 transition-colors"
                        >
                          <page.icon className="w-4 h-4" />
                          <span>{page.name}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-red-400 hover:bg-red-400/10 transition-colors mt-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <a href="/auth" className="text-white/50 hover:text-white/80 transition-colors py-2 text-center">
                      Login
                    </a>
                    <a href="/auth?mode=signup">
                      <NavbarGradientButton>Get Started</NavbarGradientButton>
                    </a>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>;
};