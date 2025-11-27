import { Home, GraduationCap, LayoutGrid, Video, LogOut, ChevronRight, Crown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/logo.png";
const navItems = [{
  title: "Home",
  url: "/dashboard",
  icon: Home
}, {
  title: "Training",
  url: "/training",
  icon: GraduationCap
}, {
  title: "Templates",
  url: "/templates",
  icon: LayoutGrid
}, {
  title: "Video Backgrounds",
  url: "/video-backgrounds",
  icon: Video
}, {
  title: "Premium",
  url: "/premium",
  icon: Crown
}];
export function AppSidebar() {
  const {
    user,
    signOut
  } = useAuth();
  const location = useLocation();
  const userInitials = user?.user_metadata?.full_name ? user.user_metadata.full_name.split(" ").map((n: string) => n[0]).join("").toUpperCase() : user?.email?.[0]?.toUpperCase() || "U";
  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User";
  return <Sidebar collapsible="offcanvas" className="border-r-0">
      <SidebarHeader className="p-5 pb-2">
        <NavLink to="/" className="flex items-center gap-2">
          <img alt="Sasifye" className="h-8 w-auto" src="/lovable-uploads/fa739a1e-5e5a-4933-8784-be74ff8f912c.png" />
        </NavLink>
      </SidebarHeader>

      <div className="px-5 py-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback className="text-white text-sm font-medium" style={{
            background: 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 45%, rgb(255, 156, 101))',
            boxShadow: 'rgba(255, 255, 255, 0.4) 0px -4px 8px inset, rgba(255, 255, 255, 0.8) 0px 0px 4px inset'
          }}>
              {userInitials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-white" style={{
            fontSize: '15.4px'
          }}>{userName}</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-white" style={{
              fontSize: '13.2px'
            }}>Free Plan</span>
            </div>
          </div>
        </div>
      </div>

      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => {
              const isActive = location.pathname === item.url;
              return <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title} className="h-10 px-3 rounded-full hover:bg-sidebar-accent data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-primary">
                      <NavLink to={item.url} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          <span className="text-sm font-semibold">{item.title}</span>
                        </div>
                        {isActive && <ChevronRight className="h-4 w-4" />}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>;
            })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={signOut} className="h-10 px-3 hover:bg-sidebar-accent text-sidebar-foreground/60 hover:text-sidebar-foreground">
              <LogOut className="h-5 w-5" />
              <span className="text-sm font-semibold">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>;
}