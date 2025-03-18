import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function ProfileButton() {
  return <Button variant="ghost" size="icon" className="rounded-full p-0 h-10 w-10 ring-1 ring-white/20 hover:ring-white/40 transition-all" type="button" aria-label="Open profile menu">
      <Avatar>
        <AvatarImage alt="Bored Ape" src="https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?fit=max&w=350" />
        <AvatarFallback>BA</AvatarFallback>
      </Avatar>
    </Button>;
}