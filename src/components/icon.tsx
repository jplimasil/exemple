import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  ClipboardList,
  Clock,
  House,
  Leaf,
  PhoneCall,
  Repeat,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/config/types";

const icons = {
  home: House,
  sparkles: Sparkles,
  truck: Truck,
  building: Building2,
  store: Store,
  repeat: Repeat,
  shield: ShieldCheck,
  badge: BadgeCheck,
  clock: Clock,
  leaf: Leaf,
  users: Users,
  calendar: CalendarCheck,
  wallet: Wallet,
  phone: PhoneCall,
  list: ClipboardList,
  check: Check,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" focusable="false" strokeWidth={1.75} {...props} />;
}
