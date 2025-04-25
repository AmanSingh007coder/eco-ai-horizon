
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { QrCode, Download, Share2, Trophy, Award } from "lucide-react";

const mockEcoActions = [
  { action: "Used public transport", points: 50, category: "Transport", date: "2025-04-25" },
  { action: "Recycled waste", points: 30, category: "Waste", date: "2025-04-25" },
  { action: "Used renewable energy", points: 100, category: "Energy", date: "2025-04-24" },
  { action: "Reduced water usage", points: 45, category: "Water", date: "2025-04-23" },
  { action: "Planted a tree", points: 120, category: "Environment", date: "2025-04-22" },
];

const mockCO2Data = [
  { month: 'Jan', co2: 65 },
  { month: 'Feb', co2: 85 },
  { month: 'Mar', co2: 120 },
  { month: 'Apr', co2: 90 },
  { month: 'May', co2: 140 },
  { month: 'Jun', co2: 170 },
];

const mockAchievements = [
  { title: "First Steps", description: "Completed 5 eco actions", icon: "🌱" },
  { title: "Energy Saver", description: "Saved 50kWh of electricity", icon: "⚡" },
  { title: "Transport Hero", description: "Used public transport 10 times", icon: "🚌" },
];

const UserPage = () => {
  const [timeView, setTimeView] = useState<'monthly' | 'yearly'>('monthly');
  const [category, setCategory] = useState<string>('all');
  
  const filteredActions = category === 'all' 
    ? mockEcoActions 
    : mockEcoActions.filter(action => action.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="min-h-screen bg-[#221F26] text-white pt-20">
      {/* Profile Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <Avatar className="h-24 w-24 border-4 border-[#8B5CF6]">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
            EcoWarrior123
          </h1>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="container mx-auto px-4 py-8">
        <Card className="bg-white/5 border-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Recent Actions</h2>
              <select 
                className="bg-gray-700 text-white rounded p-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="transport">Transport</option>
                <option value="waste">Waste</option>
                <option value="energy">Energy</option>
                <option value="water">Water</option>
                <option value="environment">Environment</option>
              </select>
            </div>
            <div className="space-y-4">
              {filteredActions.map((action, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-[#8B5CF6]/20">
                      {action.category === 'Transport' ? '🚌' :
                       action.category === 'Waste' ? '♻️' :
                       action.category === 'Energy' ? '⚡' :
                       action.category === 'Water' ? '💧' : '🌱'}
                    </span>
                    <span>{action.action}</span>
                  </div>
                  <span className="text-[#8B5CF6] font-medium">+{action.points} points</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Eco-Saver Stats */}
      <section className="container mx-auto px-4 py-8">
        <Card className="bg-gradient-to-br from-[#8B5CF6]/20 to-transparent border-none">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-2">Total CO₂ Saved</h2>
            <p className="text-5xl font-bold text-[#8B5CF6] mb-4">156kg</p>
            <div className="animate-fade-in bg-[#8B5CF6]/20 p-4 rounded-lg">
              <p className="text-lg">🎉 You saved 3kg CO₂ today!</p>
              <p className="text-sm text-gray-300 mt-2">🌿 Monthly milestone reached: 100kg CO₂ saved!</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Eco Card */}
      <section className="container mx-auto px-4 py-8">
        <Card className="bg-gradient-to-br from-[#8B5CF6]/30 to-[#EC4899]/30 border-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">EcoWarrior123</h3>
                <p className="text-lg opacity-80">On my green journey 🌍</p>
                <p className="text-xl font-semibold mt-2">156kg CO₂ saved</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#8B5CF6]/20 rounded-full px-3 py-1 text-sm">Rank #42</span>
                  <span className="bg-[#8B5CF6]/20 rounded-full px-3 py-1 text-sm">Level 5</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <QrCode className="h-6 w-6" />
                </button>
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Download className="h-6 w-6" />
                </button>
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Progress Graph */}
      <section className="container mx-auto px-4 py-8">
        <Card className="bg-white/5 border-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">CO₂ Savings Over Time</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => setTimeView('monthly')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    timeView === 'monthly' ? 'bg-[#8B5CF6]' : 'bg-white/10'
                  }`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setTimeView('yearly')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    timeView === 'yearly' ? 'bg-[#8B5CF6]' : 'bg-white/10'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {timeView === 'monthly' ? (
                  <BarChart data={mockCO2Data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Bar dataKey="co2" fill="#8B5CF6" />
                  </BarChart>
                ) : (
                  <LineChart data={[
                    { year: '2020', co2: 320 },
                    { year: '2021', co2: 580 },
                    { year: '2022', co2: 890 },
                    { year: '2023', co2: 1200 },
                    { year: '2024', co2: 1500 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="year" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Line type="monotone" dataKey="co2" stroke="#EC4899" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockAchievements.map((achievement, index) => (
            <Card key={index} className="bg-white/5 border-none">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl font-semibold mb-4">"Small steps = Big change"</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7C4CEF] transition-colors">
            Share Journey
          </button>
          <button className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            Invite Friends
          </button>
        </div>
      </footer>
    </div>
  );
};

export default UserPage;
