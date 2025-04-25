
import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Search, TrophyIcon, Medal, Award } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

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
  const [searchQuery, setSearchQuery] = useState('');

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

  // Environmental impact data
  const impactData = [
    { month: 'Jan', co2: 65, trees: 2 },
    { month: 'Feb', co2: 85, trees: 3 },
    { month: 'Mar', co2: 120, trees: 4 },
    { month: 'Apr', co2: 90, trees: 3 },
    { month: 'May', co2: 150, trees: 5 },
    { month: 'Jun', co2: 180, trees: 6 },
  ];

  const categoryData = [
    { name: 'Energy', value: 40 },
    { name: 'Transport', value: 30 },
    { name: 'Waste', value: 20 },
    { name: 'Water', value: 10 },
  ];

  const COLORS = ['#8B5CF6', '#EC4899', '#10B981', '#3B82F6'];

  // Filter top 3 users
  const topThree = users.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#221F26] text-white pt-20">
      <section className="container mx-auto p-4">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Global Green Leaderboard</h1>
          <p className="text-lg text-gray-300 mt-2">Track your eco-score and climb to the top!</p>
        </div>

        {/* Top 3 Leaderboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topThree.map((user, index) => (
            <Card key={user.id} className={`bg-white/5 border-none ${index === 0 ? 'md:transform md:scale-110 z-10' : ''}`}>
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4
                  ${index === 0 ? 'bg-yellow-500/20 text-yellow-500' : 
                    index === 1 ? 'bg-gray-400/20 text-gray-400' : 
                    'bg-amber-700/20 text-amber-700'}`}>
                  {index === 0 ? <Award className="h-8 w-8" /> : 
                   index === 1 ? <Medal className="h-8 w-8" /> : 
                   <TrophyIcon className="h-8 w-8" />}
                </div>
                <Avatar className="mx-auto h-20 w-20 border-4 border-[#8B5CF6]">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-semibold">{user.name}</h3>
                <p className="text-3xl font-bold text-[#8B5CF6] my-2">{user.score}</p>
                <div className="flex justify-center gap-1 mt-2">
                  {user.badges.map((badge, i) => (
                    <span key={i} className="text-lg">{badge}</span>
                  ))}
                </div>
                <p className="mt-2 text-gray-400">{user.country}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Your Rank - Sticky Panel */}
        <div className="sticky top-[4.5rem] z-20 bg-[#8B5CF6]/20 backdrop-blur-sm p-4 rounded-lg mb-6 border border-[#8B5CF6]/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-xl">Your Rank: #{currentUser.rank}</span>
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser.avatar} alt="Your Avatar" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
              <span className="font-bold text-[#8B5CF6]">{currentUser.score} points</span>
            </div>
            <div className="hidden md:block">
              <Progress value={70} className="w-64 bg-white/10" />
              <p className="text-xs text-gray-400 mt-1">130 points until next rank</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
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
              <option value="energy">Energy Savers</option>
              <option value="transport">Green Commuters</option>
              <option value="waste">Waste Reducers</option>
              <option value="water">Water Conservers</option>
            </select>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 bg-gray-700 text-white rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Leaderboard Table */}
        <Card className="bg-white/5 border-none mb-8">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Rank</TableHead>
                  <TableHead className="text-white">User</TableHead>
                  <TableHead className="text-white">Score</TableHead>
                  <TableHead className="text-white">Country</TableHead>
                  <TableHead className="text-white">Badges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className={user.isCurrentUser ? 'bg-purple-900/30' : ''}>
                    <TableCell className="font-medium">{user.rank}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold">{user.score}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {user.badges.map((badge, index) => (
                          <span key={index}>{badge}</span>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Environmental Impact Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* CO2 Saved Over Time */}
          <Card className="bg-white/5 border-none">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">CO₂ Saved Over Time</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={impactData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Line type="monotone" dataKey="co2" stroke="#8B5CF6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="bg-white/5 border-none">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Impact by Category</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Score Distribution Chart */}
        <Card className="mt-8 bg-white/5 border-none">
          <CardContent className="p-6">
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

        {/* Eco Tips */}
        <div className="mt-8 p-6 bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Eco Tip of the Day</h3>
          <p className="text-gray-300">Unplug electronic devices when not in use to save energy and reduce your carbon footprint!</p>
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-[#8B5CF6] rounded-full hover:bg-[#7C4CEF] transition-colors">
              Challenge Friends
            </button>
            <button className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              Share Results
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
