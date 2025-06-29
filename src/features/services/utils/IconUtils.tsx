import { CheckCircle, FileText, Calculator, Users, TrendingUp, Shield, MessageCircle, DollarSign } from 'lucide-react';

// Icon mapping function for small icons
export const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'FileText': <FileText className="w-6 h-6" />,
    'Calculator': <Calculator className="w-6 h-6" />,
    'TrendingUp': <TrendingUp className="w-6 h-6" />,
    'Shield': <Shield className="w-6 h-6" />,
    'CheckCircle': <CheckCircle className="w-6 h-6" />,
    'DollarSign': <DollarSign className="w-6 h-6" />,
    'Users': <Users className="w-6 h-6" />,
    'MessageCircle': <MessageCircle className="w-6 h-6" />,
  };
  return iconMap[iconName] || <FileText className="w-6 h-6" />;
};

export const getServiceIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'FileText': <FileText className="w-12 h-12" />,
    'Calculator': <Calculator className="w-12 h-12" />,
    'Users': <Users className="w-12 h-12" />,
  };
  return iconMap[iconName] || <FileText className="w-12 h-12" />;
}; 