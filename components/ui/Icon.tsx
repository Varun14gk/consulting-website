import {
  Badge, BadgeCheck, BarChart3, Bot, Brain, Briefcase, Building2, Calendar, Clock, Cloud, Code, Compass,
  Database, Eye, Factory, FileText, Flag, GitBranch, GraduationCap, Handshake, Headphones, HeartPulse,
  Landmark, Layers, LayoutDashboard, Lightbulb, LifeBuoy, Mail, MapPin, MessageSquare, PenTool, Phone,
  Repeat, Rocket, ScanEye, Search, Shield, ShoppingCart, Target, Truck, Users, Workflow, Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

const icons: Record<IconName, LucideIcon> = {
  bot: Bot, "message-square": MessageSquare, "scan-eye": ScanEye, layout: LayoutDashboard, "bar-chart": BarChart3,
  cloud: Cloud, workflow: Workflow, shield: Shield, "heart-pulse": HeartPulse, "shopping-cart": ShoppingCart,
  "graduation-cap": GraduationCap, truck: Truck, factory: Factory, building: Building2, rocket: Rocket,
  landmark: Landmark, zap: Zap, users: Users, eye: Eye, headphones: Headphones, brain: Brain, target: Target,
  compass: Compass, "pen-tool": PenTool, code: Code, flag: Flag, "life-buoy": LifeBuoy, search: Search,
  "file-text": FileText, database: Database, "git-branch": GitBranch, layers: Layers, clock: Clock,
  "badge-check": BadgeCheck, lightbulb: Lightbulb, handshake: Handshake, calendar: Calendar, repeat: Repeat,
  mail: Mail, phone: Phone, "map-pin": MapPin, briefcase: Briefcase,
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const Cmp = icons[name] ?? Badge;
  return <Cmp className={className} aria-hidden="true" />;
}
