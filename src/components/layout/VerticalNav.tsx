
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Compass, Trophy, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function VerticalNav() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Compass, label: "Discover", path: "/" },
    { icon: Trophy, label: "Streaks", path: "/streaks" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="h-screen w-16 fixed left-0 top-0 glass border-r border-border/50">
      <ScrollArea className="h-full">
        <div className="space-y-4 py-4">
          <div className="px-2 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white">
              Menu
            </h2>
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "w-full h-12 text-white",
                      location.pathname === item.path && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
