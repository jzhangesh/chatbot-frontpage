import { Bell, Search, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
      {/* 左侧：搜索 */}
      <div className="flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="搜索功能模块..." 
            className="pl-10 w-80 bg-background/50 border-border focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      {/* 右侧：用户操作 */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-destructive-foreground rounded-full"></span>
          </span>
        </Button>
        
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
        
        <div className="h-6 w-px bg-border mx-2" />
        
        <Button variant="ghost" className="flex items-center gap-2 px-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium">管理员</span>
        </Button>
      </div>
    </header>
  );
}