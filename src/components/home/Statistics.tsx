
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", users: 4000, nfts: 2400, volume: 2400 },
  { name: "Feb", users: 3000, nfts: 1398, volume: 2210 },
  { name: "Mar", users: 2000, nfts: 9800, volume: 2290 },
  { name: "Apr", users: 2780, nfts: 3908, volume: 2000 },
  { name: "May", users: 1890, nfts: 4800, volume: 2181 },
  { name: "Jun", users: 2390, nfts: 3800, volume: 2500 },
  { name: "Jul", users: 3490, nfts: 4300, volume: 2100 },
];

const volumeData = [
  { date: "Week 1", volume: 1200 },
  { date: "Week 2", volume: 2100 },
  { date: "Week 3", volume: 1800 },
  { date: "Week 4", volume: 2400 },
];

export const Statistics = () => {
  return (
    <div className="py-20 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 via-transparent to-transparent blur-3xl opacity-20" />
      
      <div className="relative z-10 space-y-8">
        <h2 className="text-3xl font-bold text-[#D1D5DB]">Platform Statistics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-[#D1D5DB]">User Growth</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#222',
                      border: '1px solid #444',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{ fill: '#8B5CF6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* NFT Trading Volume */}
          <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-[#D1D5DB]">NFT Trading Volume</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: '#222',
                      border: '1px solid #444',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="volume"
                    stroke="#D946EF"
                    fill="url(#colorVolume)"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D946EF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#D946EF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* NFTs Created */}
          <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-[#D1D5DB]">NFTs Created</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: '#222',
                      border: '1px solid #444',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar
                    dataKey="nfts"
                    fill="#8B5CF6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Overall Platform Growth */}
          <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-[#D1D5DB]">Overall Platform Growth</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: '#222',
                      border: '1px solid #444',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    name="Users"
                  />
                  <Line
                    type="monotone"
                    dataKey="nfts"
                    stroke="#D946EF"
                    strokeWidth={2}
                    name="NFTs"
                  />
                  <Line
                    type="monotone"
                    dataKey="volume"
                    stroke="#F97316"
                    strokeWidth={2}
                    name="Volume"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
