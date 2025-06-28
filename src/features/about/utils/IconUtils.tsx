import { Mail, Users, Target, Heart, Award, Zap, Shield, Globe, BookOpen, Calculator, FileText, TrendingUp, Clock, Star, Briefcase, Lock, Eye } from 'lucide-react';

export const getIconComponent = (iconName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconMap: Record<string, React.ComponentType<any>> = {
    heart: Heart,
    users: Users,
    target: Target,
    award: Award,
    zap: Zap,
    shield: Shield,
    globe: Globe,
    book: BookOpen,
    calculator: Calculator,
    file: FileText,
    trendingup: TrendingUp,
    clock: Clock,
    star: Star,
    briefcase: Briefcase,
    mail: Mail,
    lock: Lock,
    eye: Eye,
  };
  
  const IconComponent = iconMap[iconName.toLowerCase()];
  return IconComponent || Heart;
}; 