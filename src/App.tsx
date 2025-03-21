
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DealerProfile from "./pages/DealerProfile";
import SalesDashboard from "./pages/SalesDashboard";
import ServiceDashboard from "./pages/ServiceDashboard";
import Inventory from "./pages/Inventory";
import OrderHistory from "./pages/OrderHistory";
import Notifications from "./pages/Notifications";
import ContactBook from "./pages/ContactBook";
import AlignmentPage from "./pages/AlignmentPage";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<SalesDashboard />} />
              <Route path="profile" element={<DealerProfile />} />
              <Route path="service" element={<ServiceDashboard />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="orders" element={<OrderHistory />} />
              <Route path="contacts" element={<ContactBook />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="alignment" element={<AlignmentPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
