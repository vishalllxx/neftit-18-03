import { MainNav } from "@/components/layout/MainNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Bell, Moon, Sun, Globe, Shield, Key, Wallet } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-gray-300">Manage your account preferences and configurations</p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-6">
            {/* Profile Settings */}
            <Card className="p-6 bg-white/5 border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Profile Settings</h2>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300">Display Name</label>
                    <Input 
                      placeholder="Your display name"
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  Save Changes
                </Button>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Notifications</h2>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Email Notifications", description: "Receive updates via email" },
                  { label: "Push Notifications", description: "Get instant updates in your browser" },
                  { label: "Marketing Emails", description: "Receive promotional content" }
                ].map((setting, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium text-white">{setting.label}</div>
                      <div className="text-sm text-gray-400">{setting.description}</div>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </Card>

            {/* Appearance Settings */}
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Appearance</h2>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-white">Dark Mode</div>
                    <div className="text-sm text-gray-400">Toggle dark mode theme</div>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Security Settings */}
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Security</h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    <Key className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                </div>
              </div>
            </Card>

            {/* Language Settings */}
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Language</h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300">Select Language</label>
                  <select className="mt-1 w-full bg-white/5 border-white/10 text-white rounded-md">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
