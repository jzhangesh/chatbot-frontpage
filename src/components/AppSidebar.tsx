import { NavLink, useLocation } from "react-router-dom";
import { 
  Bot, 
  Brain, 
  FileText, 
  Lightbulb, 
  Video, 
  Database, 
  FileBarChart, 
  Scale,
  ChevronRight,
  Sparkles
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "知识中心",
    items: [
      { 
        title: "知识问答", 
        url: "/knowledge-qa", 
        icon: Bot,
        description: "创建智能问答机器人"
      },
      { 
        title: "知识写作", 
        url: "/knowledge-writing", 
        icon: FileText,
        description: "AI辅助内容创作"
      },
      { 
        title: "知识推荐", 
        url: "/knowledge-recommendation", 
        icon: Lightbulb,
        description: "智能推荐系统"
      },
      { 
        title: "知识媒体", 
        url: "/knowledge-media", 
        icon: Video,
        description: "多媒体知识管理"
      },
      { 
        title: "知识库", 
        url: "/knowledge-base", 
        icon: Database,
        description: "统一知识存储"
      },
    ]
  },
  {
    title: "行业应用",
    items: [
      { 
        title: "标书助手", 
        url: "/bid-assistant", 
        icon: FileBarChart,
        description: "智能标书生成"
      },
      { 
        title: "法律问答", 
        url: "/legal-qa", 
        icon: Scale,
        description: "法律咨询助手"
      },
    ]
  }
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="w-72 transition-all duration-300">
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Logo区域 */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-sidebar-foreground">ChatBot门户</h1>
              <p className="text-xs text-muted-foreground">智能应用集成平台</p>
            </div>
          </div>
        </div>

        {navigationItems.map((group) => (
          <SidebarGroup key={group.title} className="px-4">
            <SidebarGroupLabel className="text-muted-foreground uppercase tracking-wider text-xs font-medium mb-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`
                        group relative overflow-hidden rounded-lg transition-all duration-300
                        ${isActive(item.url) 
                          ? "bg-sidebar-accent text-sidebar-accent-foreground border border-primary/20" 
                          : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                        }
                      `}
                    >
                      <NavLink to={item.url} className="flex items-center gap-3 p-3 relative">
                        {/* 活跃状态指示器 */}
                        {isActive(item.url) && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full" />
                        )}
                        
                        <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive(item.url) ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground"}`} />
                        
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium">{item.title}</div>
                          <div className="text-xs text-muted-foreground truncate">{item.description}</div>
                        </div>
                        
                        <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${isActive(item.url) ? "rotate-90" : "group-hover:translate-x-1"}`} />
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}