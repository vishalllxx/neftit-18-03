
import { Mail, Twitter, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SocialSectionProps {
  twitter: string;
  telegram: string;
  onTwitterChange: (value: string) => void;
  onTelegramChange: (value: string) => void;
  onConnect: (platform: string) => void;
}

export const SocialSection = ({
  twitter,
  telegram,
  onTwitterChange,
  onTelegramChange,
  onConnect,
}: SocialSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Social Connections
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Twitter className="h-5 w-5 text-[#1DA1F2]" />
              <div className="flex-1">
                <Label>Twitter</Label>
                <Input 
                  placeholder="Your Twitter username"
                  value={twitter}
                  onChange={(e) => onTwitterChange(e.target.value.replace('@', ''))}
                  className="mt-1"
                />
              </div>
            </div>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onConnect("Twitter")}
              disabled={!twitter}
              className="min-w-[100px]"
            >
              Connect
            </Button>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Send className="h-5 w-5 text-[#0088cc]" />
              <div className="flex-1">
                <Label>Telegram</Label>
                <Input 
                  placeholder="Your Telegram username"
                  value={telegram}
                  onChange={(e) => onTelegramChange(e.target.value.replace('@', ''))}
                  className="mt-1"
                />
              </div>
            </div>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onConnect("Telegram")}
              disabled={!telegram}
              className="min-w-[100px]"
            >
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
