
import { useState } from "react";
import { Outlet, NavLink, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Bell, 
  UserRound, 
  LogOut, 
  Menu, 
  X,
  BookUser,
  Wrench,
  AlignLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardLayout = () => {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // If loading, show loading indicator
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  const navigation = [
    { name: "Sales Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Service Dashboard", href: "/dashboard/service", icon: Wrench },
    { name: "Alignment", href: "/dashboard/alignment", icon: AlignLeft },
    { name: "Profile", href: "/dashboard/profile", icon: UserRound },
    { name: "Inventory", href: "/dashboard/inventory", icon: Package },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
    { name: "Contact Book", href: "/dashboard/contacts", icon: BookUser },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  ];

  const NavItem = ({ item }: { item: typeof navigation[0] }) => {
    const isActive = location.pathname === item.href;
    
    return (
      <NavLink
        to={item.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )
        }
      >
        <item.icon className="h-5 w-5" />
        <span>{item.name}</span>
      </NavLink>
    );
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 border-r border-border bg-card">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-6 border-b border-border">
            <h1 className="text-2xl font-bold text-foreground">DS360</h1>
          </div>
          
          <div className="flex-1 flex flex-col justify-between py-4 px-3 overflow-y-auto">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
            
            <div className="mt-auto">
              <div className="flex items-center p-3 mb-2 bg-accent rounded-lg">
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarImage src={user?.avatarUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=64"} alt={user?.name} />
                  <AvatarFallback className="bg-muted text-muted-foreground">
                    {user?.name?.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium truncate text-foreground">{user?.name}</p>
                  <p className="text-xs text-muted-foreground truncate capitalize">{user?.role.replace("-", " ")}</p>
                </div>
              </div>
              <Button 
                variant="outline"
                className="w-full justify-start"
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-4 bg-background border-b border-border">
        <div className="flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between h-16 px-6 border-b border-border">
                  <h1 className="text-2xl font-bold text-foreground">DS360</h1>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-4 px-3 overflow-y-auto">
                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <NavItem key={item.name} item={item} />
                    ))}
                  </nav>
                  
                  <div className="mt-auto">
                    <div className="flex items-center p-3 mb-2 bg-accent rounded-lg">
                      <Avatar className="h-10 w-10 border border-border">
                        <AvatarImage src={user?.avatarUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=64"} alt={user?.name} />
                        <AvatarFallback className="bg-muted text-muted-foreground">
                          {user?.name?.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium truncate text-foreground">{user?.name}</p>
                        <p className="text-xs text-muted-foreground truncate capitalize">{user?.role.replace("-", " ")}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full justify-start"
                      onClick={logout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="ml-3 text-xl font-bold text-foreground">DS360</h1>
        </div>
        
        <Avatar className="h-8 w-8 border border-border">
          <AvatarImage src={user?.avatarUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=64"} alt={user?.name} />
          <AvatarFallback className="bg-muted text-muted-foreground">
            {user?.name?.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 pt-20 lg:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
