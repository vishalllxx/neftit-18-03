import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export function AuthPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // If already authenticated, redirect to home
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = (method: string) => {
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Login Successful",
      description: `Logged in with ${method}`,
    });
    navigate("/home");
  };

  const walletOptions = [
    {
      name: "MetaMask",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png",
      onClick: () => handleLogin("MetaMask")
    },
    {
      name: "X",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
      onClick: () => handleLogin("X")
    },
    {
      name: "Discord",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
      onClick: () => handleLogin("Discord")
    }
  ];

  const socialLogins = [
    {
      name: "Google",
      icon: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
      onClick: () => handleLogin("Google")
    },
    {
      name: "Apple",
      icon: "https://cdn-icons-png.flaticon.com/128/0/747.png",
      onClick: () => handleLogin("Apple")
    }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
            alt="Web3 Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        {/* Branding Content - Moved to top and bottom */}
        <div className="relative z-10 flex flex-col justify-between w-full h-full p-16">
          {/* NEFTIT Text - Now at very top with less padding */}
          <span className="text-4xl font-bold text-white pt-4">NEFTIT</span>
          
          {/* Tagline - Now at bottom */}
          <h1 className="text-5xl font-bold leading-tight text-white max-w-xl">
            Empowering the Future of Digital Ownership
          </h1>
        </div>
      </div>

      {/* Right Side - Login Options */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#111111]">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-400">Connect your wallet to continue</p>
          </div>

          {/* Wallet Options */}
          <div className="space-y-4">
            {walletOptions.map((wallet) => (
              <Button
                key={wallet.name}
                onClick={wallet.onClick}
                className="w-full h-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all duration-200 hover:scale-[1.02] space-x-3"
              >
                <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
                <span>Continue with {wallet.name}</span>
              </Button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#111111] text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            {socialLogins.map((social) => (
              <Button
                key={social.name}
                onClick={social.onClick}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all duration-200 hover:scale-[1.02] space-x-3"
              >
                <img src={social.icon} alt={social.name} className="w-5 h-5" />
                <span>{social.name}</span>
              </Button>
            ))}
          </div>

          {/* Terms */}
          <p className="text-center text-sm text-gray-400 mt-8">
            By connecting, you agree to our{" "}
            <Button variant="link" className="text-white hover:text-white/80 p-0">
              Terms of Service
            </Button>
            {" & "}
            <Button variant="link" className="text-white hover:text-white/80 p-0">
              Privacy Policy
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
