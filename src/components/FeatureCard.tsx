import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  status?: 'active' | 'beta' | 'coming-soon';
  onClick?: () => void;
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  status = 'active',
  onClick 
}: FeatureCardProps) {
  const statusConfig = {
    active: { label: '可用', className: 'bg-secondary text-secondary-foreground' },
    beta: { label: 'Beta', className: 'bg-primary text-primary-foreground' },
    'coming-soon': { label: '即将推出', className: 'bg-muted text-muted-foreground' }
  };

  return (
    <Card 
      className="tech-card glow-effect cursor-pointer group h-full"
      onClick={onClick}
    >
      <CardContent className="p-6">
        {/* 卡片头部 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <Badge variant="secondary" className={statusConfig[status].className}>
                {statusConfig[status].label}
              </Badge>
            </div>
          </div>
        </div>

        {/* 描述 */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* 功能列表 */}
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* 操作按钮 */}
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium transition-all duration-300 group-hover:shadow-lg"
          disabled={status === 'coming-soon'}
        >
          {status === 'coming-soon' ? '敬请期待' : '立即使用'}
        </Button>
      </CardContent>
    </Card>
  );
}