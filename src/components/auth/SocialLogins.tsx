
import { Button } from "@/components/ui/button";

interface SocialLoginProps {
  onLogin: (method: string) => void;
}

export function SocialLogins({ onLogin }: SocialLoginProps) {
  const socialLogins = [
    {
      name: "Google",
      icon: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
      onClick: () => onLogin("Google"),
      primary: true
    },
    {
      name: "Discord",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
      onClick: () => onLogin("Discord")
    },
    {
      name: "Twitter",
      icon: "https://cdn-icons-png.flaticon.com/128/3670/3670151.png",
      onClick: () => onLogin("Twitter")
    },
    {
      name: "Telegram",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111646.png",
      onClick: () => onLogin("Telegram")
    }
  ];

  return (
    <div className="space-y-4">
      <Button 
        variant="outline" 
        className="w-full bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border-0 text-white h-12"
        onClick={() => onLogin("Google")}
      >
        <img src={socialLogins[0].icon} alt="Google" className="w-6 h-6 mr-2" />
        Continue with Google
      </Button>
      
      <div className="grid grid-cols-3 gap-4">
        {socialLogins.slice(1).map((login) => (
          <Button
            key={login.name}
            variant="outline"
            className="bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border-0"
            onClick={login.onClick}
          >
            <img src={login.icon} alt={login.name} className="w-6 h-6" />
          </Button>
        ))}
      </div>
    </div>
  );
}
