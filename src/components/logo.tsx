import { cn } from "@/lib/utils";
import { LineShadowText } from "./ui/line-shadow-text";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("font-light", className)}>
        <span className="tracking-tight">All bits of </span>
        <LineShadowText as="span" className="tracking-tight font-bold text-primary" shadowColor="hsl(var(--primary-foreground))">
            ICT
        </LineShadowText>
    </div>
  );
}
