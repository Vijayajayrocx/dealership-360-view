
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DealerProfile from "./pages/DealerProfile";
import SalesDashboard from "./pages/SalesDashboard";
import Inventory from "./pages/Inventory";
import OrderHistory from "./pages/OrderHistory";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<SalesDashboard />} />
              <Route path="profile" element={<DealerProfile />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="orders" element={<OrderHistory />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
