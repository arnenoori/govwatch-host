import * as React from "react"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonAboutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
}

function ButtonAbout({ label = "About", className, ...props }: ButtonAboutProps) {
    return (
        <Button
            variant="ghost"
            className={cn(
                "group relative h-10 px-6 rounded-full overflow-hidden transition-all duration-500",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-[#4ade80] via-[#22c55e] to-[#16a34a]">
                <div className="absolute inset-0 bg-[#0f172a] rounded-full opacity-90" />
            </div>

            <div className="absolute inset-[1px] bg-[#0f172a] rounded-full opacity-95" />

            <div className="absolute inset-[1px] bg-gradient-to-r from-[#0f172a] via-[#172033] to-[#0f172a] rounded-full opacity-90" />
            <div className="absolute inset-[1px] bg-gradient-to-b from-[#4ade80]/40 via-[#172033] to-[#16a34a]/30 rounded-full opacity-80" />
            <div className="absolute inset-[1px] bg-gradient-to-br from-[#4ade80]/10 via-[#172033] to-[#172033]/50 rounded-full" />

            <div className="absolute inset-[1px] shadow-[inset_0_0_15px_rgba(74,222,128,0.15)] rounded-full" />

            <div className="relative flex items-center justify-center gap-2">
                <span className="text-sm font-medium bg-gradient-to-b from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(74,222,128,0.4)]">
                    {label}
                </span>
            </div>

            <div className="absolute inset-[1px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#172033]/20 via-[#4ade80]/10 to-[#172033]/20 group-hover:opacity-100 rounded-full" />
        </Button>
    );
}

export { ButtonAbout } 