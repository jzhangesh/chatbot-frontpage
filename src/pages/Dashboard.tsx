import { Bot, FileText, Lightbulb, Video, Database, FileBarChart, Scale, TrendingUp } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const knowledgeFeatures = [
  {
    title: "知识问答",
    description: "构建智能问答机器人，支持多轮对话和上下文理解，为用户提供精准的知识查询服务。",
    icon: Bot,
    features: ["创建Bot", "编定知识", "发布Bot", "对话管理"],
    status: 'active' as const
  },
  {
    title: "知识写作",
    description: "AI辅助内容创作工具，支持模板定制和智能生成，提升内容创作效率和质量。",
    icon: FileText,
    features: ["创建模板", "内容生成", "智能润色", "版本管理"],
    status: 'active' as const
  },
  {
    title: "知识推荐",
    description: "基于用户行为和内容相关性的智能推荐系统，提供个性化的知识发现体验。",
    icon: Lightbulb,
    features: ["推荐算法", "用户画像", "内容标签", "效果分析"],
    status: 'beta' as const
  },
  {
    title: "知识媒体",
    description: "统一管理文档、视频、音频等多媒体知识资源，支持智能检索和内容分析。",
    icon: Video,
    features: ["多媒体上传", "智能标注", "内容检索", "格式转换"],
    status: 'active' as const
  },
  {
    title: "知识库管理",
    description: "企业级知识库管理平台，支持权限控制、版本管理和知识图谱构建。",
    icon: Database,
    features: ["权限管理", "版本控制", "知识图谱", "数据统计"],
    status: 'active' as const
  }
];

const industryFeatures = [
  {
    title: "标书助手",
    description: "基于行业标准的智能标书生成工具，支持模板库和自动化编制流程。",
    icon: FileBarChart,
    features: ["模板库", "智能填充", "合规检查", "协同编辑"],
    status: 'active' as const
  },
  {
    title: "法律问答助手",
    description: "专业法律知识问答系统，提供准确的法条解释和案例分析服务。",
    icon: Scale,
    features: ["法条查询", "案例分析", "风险评估", "文书生成"],
    status: 'beta' as const
  }
];

const stats = [
  { label: "活跃用户", value: "2,847", change: "+12%" },
  { label: "知识条目", value: "156K", change: "+8%" },
  { label: "问答对话", value: "43.2K", change: "+24%" },
  { label: "系统可用性", value: "99.9%", change: "+0.1%" }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* 欢迎区域 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Chatbot功能集成门户
        </h1>
        <p className="text-muted-foreground text-lg">
          智能化知识管理与行业应用解决方案平台
        </p>
      </div>

      {/* 数据统计 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={stat.label} className="tech-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="flex items-center gap-1 text-secondary text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 知识中心功能 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
          <h2 className="text-2xl font-semibold text-foreground">知识中心</h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeFeatures.map((feature, index) => (
            <div key={feature.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* 行业应用 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-secondary to-primary rounded-full" />
          <h2 className="text-2xl font-semibold text-foreground">行业应用</h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industryFeatures.map((feature, index) => (
            <div key={feature.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}