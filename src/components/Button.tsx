
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-neftit-blue via-neftit-indigo to-neftit-purple text-white",
        secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:shadow-sm",
        outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 py-1.5 text-sm",
        lg: "h-12 px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, href, ...props }, ref) => {
    if (href) {
      return (
        <a href={href} className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </a>
      );
    }
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
