import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          <Route path="/knowledge-qa" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">知识问答</h1>
                <p className="text-muted-foreground">创建智能问答机器人</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/knowledge-writing" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">知识写作</h1>
                <p className="text-muted-foreground">AI辅助内容创作</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/knowledge-recommendation" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">知识推荐</h1>
                <p className="text-muted-foreground">智能推荐系统</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/knowledge-media" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">知识媒体</h1>
                <p className="text-muted-foreground">多媒体知识管理</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/knowledge-base" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">知识库</h1>
                <p className="text-muted-foreground">统一知识存储管理</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/data-analytics" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">数据分析</h1>
                <p className="text-muted-foreground">知识使用情况分析</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/bid-assistant" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">标书助手</h1>
                <p className="text-muted-foreground">智能标书生成</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/legal-qa" element={
            <DashboardLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">法律问答</h1>
                <p className="text-muted-foreground">法律咨询助手</p>
              </div>
            </DashboardLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
