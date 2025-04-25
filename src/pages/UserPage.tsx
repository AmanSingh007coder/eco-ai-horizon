
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { QrCode, Download, Share2 } from "lucide-react";

const mockEcoActions = [
  { action: "Used public transport", points: 50, category: "Transport", date: "2025-04-25" },
  { action: "Recycled waste", points: 30, category: "Waste", date: "2025-04-25" },
  { action: "Used renewable energy", points: 100, category: "Energy", date: "2025-04-24" },
];

const mockCO2Data = [
  { month: 'Jan', co2: 65 },
  { month: 'Feb', co2: 85 },
  { month: 'Mar', co2: 120 },
  { month: 'Apr', co2: 90 },
];

const UserPage = () => {
  const [timeView, setTimeView] = useState<'monthly' | 'yearly'>('monthly');
  
  return (
    <div className="min-h-screen bg-[#221F26] text-white pt-20">
      {/* Profile Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-4">
          <Avatar className="h-24 w-24">
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
            <h2 className="text-2xl font-semibold mb-4">Recent Actions</h2>
            <div className="space-y-4">
              {mockEcoActions.map((action, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <span>{action.action}</span>
                  <span className="text-[#8B5CF6]">+{action.points} points</span>
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
                <BarChart data={mockCO2Data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="co2" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl font-semibold mb-4">"Small steps = Big change"</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            Share Journey
          </button>
        </div>
      </footer>
    </div>
  );
};

export default UserPage;
