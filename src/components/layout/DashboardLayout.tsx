import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Clock } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  duration?: string;
}

const getPageTitle = (pathname: string): string => {
  const routes: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/templates": "Templates",
    "/training": "Training",
    "/video-backgrounds": "Video Backgrounds",
    "/premium": "Premium",
  };
  return routes[pathname] || "Dashboard";
};

export function DashboardLayout({ children, title, subtitle, duration }: DashboardLayoutProps) {
  const location = useLocation();
  const { user } = useAuth();
  const pageTitle = title || getPageTitle(location.pathname);

  const userInitials = user?.user_metadata?.full_name
    ? user.user_metadata.full_name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
    : user?.email?.[0]?.toUpperCase() || "U";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#111315] overflow-x-hidden">
        <AppSidebar />
        <main className="flex-1 flex flex-col min-h-screen min-w-0 overflow-x-hidden">
          {/* Simple Header - page title + avatar */}
          <header className="flex items-center justify-between h-14 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-white/60 hover:text-white hover:bg-transparent">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <div>
                <h1 className="text-lg font-semibold text-white">{pageTitle}</h1>
                {subtitle && (
                  <p className="text-sm text-white/60">{subtitle}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {duration && (
                <div className="flex items-center gap-2 text-[#6F767E] text-sm bg-[#1A1D1F] px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>{duration} lesson</span>
                </div>
              )}
              <Avatar className="h-9 w-9">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback 
                  className="text-white text-xs font-medium"
                  style={{
                    background: 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 45%, rgb(255, 156, 101))',
                    boxShadow: 'rgba(255, 255, 255, 0.4) 0px -4px 8px inset, rgba(255, 255, 255, 0.8) 0px 0px 4px inset'
                  }}
                >
                  {userInitials}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          
          <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
            <div className="max-w-3xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
