import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Define proper TypeScript interface for user data
interface UserData {
  id: number;
  name: string;
  avatar: string;
  score: number;
  country: string;
  badges: string[];
  rank: number;
  isCurrentUser?: boolean;
}

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('weekly');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Update mock data to include isCurrentUser property
  const mockUsers: UserData[] = [
    {
      id: 1,
      name: "Emma Green",
      avatar: "/placeholder.svg",
      score: 2500,
      country: "USA",
      badges: ["🌱", "⚡", "🌍"],
      rank: 1
    },
    {
      id: 2,
      name: "John Eco",
      avatar: "/placeholder.svg",
      score: 2300,
      country: "Canada",
      badges: ["🌱", "🌍"],
      rank: 2
    },
    {
      id: 3,
      name: "Priya Sharma",
      avatar: "/placeholder.svg",
      score: 2100,
      country: "India",
      badges: ["🌱", "💧"],
      rank: 3
    },
    {
      id: 4,
      name: "Kenji Tanaka",
      avatar: "/placeholder.svg",
      score: 1800,
      country: "Japan",
      badges: ["⚡", "♻️"],
      rank: 4
    },
    {
      id: 5,
      name: "Lars Olsen",
      avatar: "/placeholder.svg",
      score: 1500,
      country: "Norway",
      badges: ["🌱", "⚡"],
      rank: 5
    }
  ];

  // Add current user to the data
  const currentUser: UserData = {
    id: 6,
    name: "You",
    avatar: "/placeholder.svg",
    score: 1200,
    country: "UK",
    badges: ["🌱"],
    rank: 6,
    isCurrentUser: true
  };

  const users = [...mockUsers, currentUser].sort((a, b) => b.score - a.score);

  const chartData = users.map(user => ({
    name: user.name,
    score: user.score,
  }));

  return (
    <div className="min-h-screen bg-[#221F26] text-white pt-20">
      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>

        {/* Filters */}
        <div className="flex justify-start gap-4 mb-4">
          <select
            className="bg-gray-700 text-white rounded p-2"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="allTime">All Time</option>
          </select>

          <select
            className="bg-gray-700 text-white rounded p-2"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="energy">Energy</option>
            <option value="water">Water</option>
            <option value="waste">Waste</option>
          </select>
        </div>

        {/* Leaderboard List */}
        <Card className="bg-white/5 border-none">
          <CardContent className="p-0">
            <ul className="divide-y divide-gray-700">
              {users.map((user) => (
                <li key={user.id} className={`p-4 flex items-center justify-between ${user.isCurrentUser ? 'bg-purple-900/30' : ''}`}>
                  <div className="flex items-center">
                    <span className="mr-4">{user.rank}</span>
                    <Avatar className="mr-4 h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{user.name}</h3>
                      <div className="flex gap-2">
                        {user.badges.map((badge, index) => (
                          <span key={index}>{badge}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold">{user.score}</span>
                    <span className="text-sm ml-1">points</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Progress Chart */}
        <Card className="mt-8 bg-white/5 border-none">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Score Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="score" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Leaderboard;
