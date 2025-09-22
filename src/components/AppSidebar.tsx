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
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "知识中心",
    level: 1,
    items: []
  },
  {
    title: "知识应用",
    level: 2,
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
      }
    ]
  },
  {
    title: "知识管理",
    level: 2,
    items: [
      { 
        title: "知识库", 
        url: "/knowledge-base", 
        icon: Database,
        description: "统一知识存储管理"
      },
      { 
        title: "数据分析", 
        url: "/data-analytics", 
        icon: FileBarChart,
        description: "知识使用情况分析"
      }
    ]
  },
  {
    title: "行业应用",
    level: 3,
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
    <Sidebar className="w-72 transition-all duration-300 shrink-0">
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
          <SidebarGroup key={group.title} className={`px-4 ${group.level === 1 ? 'mb-6' : group.level === 2 ? 'mb-4' : 'mb-2'}`}>
            <SidebarGroupLabel 
              className={`
                flex items-center gap-2 uppercase tracking-wider font-medium mb-3
                ${group.level === 1 ? 'text-primary text-sm' : 
                  group.level === 2 ? 'text-secondary text-xs' : 
                  'text-muted-foreground text-xs'}
              `}
            >
              {group.level === 1 && <div className="w-2 h-2 rounded-full bg-primary" />}
              {group.level === 2 && <div className="w-1.5 h-1.5 rounded-full bg-secondary" />}
              {group.level === 3 && <div className="w-1 h-1 rounded-full bg-muted-foreground" />}
              {group.title}
            </SidebarGroupLabel>
            
            {group.items.length > 0 && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`
                          group relative overflow-hidden rounded-lg transition-all duration-300 mb-1
                          ${isActive(item.url) 
                            ? "bg-sidebar-accent text-sidebar-accent-foreground border border-primary/30 shadow-sm" 
                            : "hover:bg-sidebar-accent/60 text-sidebar-foreground"
                          }
                        `}
                      >
                        <NavLink to={item.url} className="flex items-center gap-3 p-3 relative">
                          {/* 层级缩进 */}
                          <div className={`w-${group.level} flex-shrink-0`} />
                          
                          {/* 活跃状态指示器 */}
                          {isActive(item.url) && (
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                          )}
                          
                          <item.icon className={`
                            w-4 h-4 flex-shrink-0 transition-colors
                            ${isActive(item.url) ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground"}
                          `} />
                          
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium leading-tight">{item.title}</div>
                            <div className="text-xs text-muted-foreground truncate mt-0.5">{item.description}</div>
                          </div>
                          
                          <ChevronRight className={`
                            w-3 h-3 text-muted-foreground transition-all duration-200
                            ${isActive(item.url) ? "rotate-90 text-primary" : "group-hover:translate-x-0.5 group-hover:text-sidebar-foreground"}
                          `} />
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}