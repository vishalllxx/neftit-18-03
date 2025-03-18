import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

export function ProfileBox() {
  return (
    <Link to="/profile" className="block">
      <div className="relative p-4 mb-6 rounded-xl hover:bg-white/5 group transition-all duration-200">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 via-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative flex items-center gap-4">
          <div className="relative">
            <Avatar className="h-12 w-12 ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300">
              <AvatarImage 
                alt="Profile" 
                src="https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?fit=max&w=350" 
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <AvatarFallback>BA</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500/90 ring-2 ring-[#0A0A0F] group-hover:ring-white/10 transition-all duration-300" />
          </div>

          <div className="flex items-center justify-between flex-grow">
            <h4 className="font-medium text-base text-white/90 group-hover:text-white transition-colors duration-300">
              neftit ranger
            </h4>
            <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}