
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Filter, Medal, Users, ChartBar, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

// Mock data for top users
const topUsers = [
  {
    id: 1,
    name: "Olivia Green",
    avatar: "/placeholder.svg",
    score: 9875,
    country: "United States",
    badges: ["Energy Saver", "Tree Planter"],
    rank: 1,
  },
  {
    id: 2,
    name: "Noah Earth",
    avatar: "/placeholder.svg",
    score: 8940,
    country: "Canada",
    badges: ["Eco Commuter", "Solar Power"],
    rank: 2,
  },
  {
    id: 3,
    name: "Emma Sustain",
    avatar: "/placeholder.svg",
    score: 7650,
    country: "Germany",
    badges: ["Zero Waste", "Water Conserver"],
    rank: 3,
  },
];

// Mock data for all users
const allUsers = [
  ...topUsers,
  {
    id: 4,
    name: "Liam Parker",
    avatar: "/placeholder.svg",
    score: 6890,
    country: "UK",
    badges: ["Energy Saver"],
    rank: 4,
  },
  {
    id: 5,
    name: "Ava Wilson",
    avatar: "/placeholder.svg",
    score: 6240,
    country: "Australia",
    badges: ["Eco Commuter"],
    rank: 5,
  },
  {
    id: 6,
    name: "Jackson Lee",
    avatar: "/placeholder.svg",
    score: 5970,
    country: "South Korea",
    badges: ["Zero Waste"],
    rank: 6,
  },
  {
    id: 7,
    name: "Sophia Chen",
    avatar: "/placeholder.svg",
    score: 5650,
    country: "China",
    badges: ["Energy Saver", "Tree Planter"],
    rank: 7,
  },
  {
    id: 8,
    name: "Lucas Schmidt",
    avatar: "/placeholder.svg",
    score: 5320,
    country: "France",
    badges: ["Solar Power"],
    rank: 8,
  },
  {
    id: 9,
    name: "Isabella Russo",
    avatar: "/placeholder.svg",
    score: 5100,
    country: "Italy",
    badges: ["Water Conserver"],
    rank: 9,
  },
  {
    id: 10,
    name: "Aiden Patel",
    avatar: "/placeholder.svg",
    score: 4870,
    country: "India",
    badges: ["Eco Commuter", "Zero Waste"],
    rank: 10,
  },
  // Representing current user
  {
    id: 42,
    name: "You",
    avatar: "/placeholder.svg",
    score: 3260,
    country: "Your Country",
    badges: ["Energy Saver"],
    rank: 42,
    isCurrentUser: true,
  },
];

// Mock data for environmental impact
const impactData = [
  { month: "Jan", userGrowth: 2000, co2Saved: 500 },
  { month: "Feb", userGrowth: 3000, co2Saved: 1500 },
  { month: "Mar", userGrowth: 5000, co2Saved: 3000 },
  { month: "Apr", userGrowth: 7000, co2Saved: 5000 },
  { month: "May", userGrowth: 8000, co2Saved: 8000 },
  { month: "Jun", userGrowth: 10000, co2Saved: 12000 },
];

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState("all-time");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Current user data (in a real app, this would come from authentication/user context)
  const currentUser = allUsers.find(user => user.isCurrentUser);

  return (
    <div className="pt-20 min-h-screen bg-[#221F26] text-white px-4 pb-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-transparent bg-clip-text">
            Global Green Leaderboard
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Track your eco-score and climb to the top! Each sustainable AI prompt saves energy and helps our planet.
        </p>
      </div>

      {/* Top 3 Leaderboard Section */}
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 2nd Place */}
          <div className="order-2 md:order-1">
            <Card className="bg-[#2A2731] border-[#7E69AB] border-2 transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#C0C0C0] flex items-center justify-center mb-2">
                  <Medal className="w-8 h-8 text-[#221F26]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#C0C0C0]">
                  Silver - 2nd Place
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-[#C0C0C0]">
                    <AvatarImage src={topUsers[1].avatar} alt={topUsers[1].name} />
                    <AvatarFallback>{topUsers[1].name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{topUsers[1].name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{topUsers[1].country}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#C0C0C0] mb-3">{topUsers[1].score.toLocaleString()} pts</p>
                  <div className="flex gap-1 flex-wrap justify-center">
                    {topUsers[1].badges.map((badge, i) => (
                      <Badge key={i} className="bg-[#7E69AB] hover:bg-[#6E59A5]">{badge}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 1st Place - Larger card */}
          <div className="order-1 md:order-2 transform md:-translate-y-4">
            <Card className="bg-[#2A2731] border-[#FFD700] border-2 transform hover:scale-105 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFE29F] to-[#FF719A]"></div>
              <CardHeader className="text-center pb-2 pt-6">
                <div className="mx-auto w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mb-2">
                  <Medal className="w-10 h-10 text-[#221F26]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#FFD700]">
                  Gold - 1st Place
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-[#FFD700]">
                    <AvatarImage src={topUsers[0].avatar} alt={topUsers[0].name} />
                    <AvatarFallback>{topUsers[0].name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-semibold mb-1">{topUsers[0].name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{topUsers[0].country}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#FFD700] mb-3">{topUsers[0].score.toLocaleString()} pts</p>
                  <div className="flex gap-1 flex-wrap justify-center">
                    {topUsers[0].badges.map((badge, i) => (
                      <Badge key={i} className="bg-[#FFD700] text-[#221F26] hover:bg-[#E5C100]">{badge}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 3rd Place */}
          <div className="order-3">
            <Card className="bg-[#2A2731] border-[#CD7F32] border-2 transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#CD7F32] flex items-center justify-center mb-2">
                  <Medal className="w-8 h-8 text-[#221F26]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#CD7F32]">
                  Bronze - 3rd Place
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-[#CD7F32]">
                    <AvatarImage src={topUsers[2].avatar} alt={topUsers[2].name} />
                    <AvatarFallback>{topUsers[2].name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{topUsers[2].name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{topUsers[2].country}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#CD7F32] mb-3">{topUsers[2].score.toLocaleString()} pts</p>
                  <div className="flex gap-1 flex-wrap justify-center">
                    {topUsers[2].badges.map((badge, i) => (
                      <Badge key={i} className="bg-[#CD7F32] hover:bg-[#B87333]">{badge}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rank Section - Sticky panel */}
      {currentUser && (
        <section className="max-w-7xl mx-auto mb-8 sticky top-20 z-20">
          <Card className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2731] border-[#8B5CF6] border-2 shadow-lg shadow-[#8B5CF6]/20">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="font-bold text-xl text-[#8B5CF6] w-12 text-center">
                    #{currentUser.rank}
                  </div>
                  <Avatar className="h-12 w-12 border-2 border-[#8B5CF6]">
                    <AvatarImage src={currentUser.avatar} alt="Your avatar" />
                    <AvatarFallback>YO</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">{currentUser.name}</p>
                    <p className="text-sm text-gray-300">{currentUser.country}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <p className="text-sm text-gray-300">Your Eco-Score</p>
                  <p className="text-2xl font-bold text-[#8B5CF6]">{currentUser.score.toLocaleString()} pts</p>
                </div>
                <div className="hidden md:block">
                  <Button className="bg-[#8B5CF6] hover:bg-[#7C4DEF]">Improve Your Score</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Filters & Search Section */}
      <section className="max-w-7xl mx-auto mb-8">
        <div className="bg-[#2A2731] rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2 bg-[#221F26] border border-[#3A3643] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Time Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm whitespace-nowrap">Time Period:</span>
              <div className="flex">
                <Button
                  variant={timeFilter === "all-time" ? "default" : "outline"}
                  size="sm"
                  className={timeFilter === "all-time" ? "bg-[#8B5CF6] hover:bg-[#7C4DEF]" : ""}
                  onClick={() => setTimeFilter("all-time")}
                >
                  All-Time
                </Button>
                <Button
                  variant={timeFilter === "monthly" ? "default" : "outline"}
                  size="sm"
                  className={timeFilter === "monthly" ? "bg-[#8B5CF6] hover:bg-[#7C4DEF]" : ""}
                  onClick={() => setTimeFilter("monthly")}
                >
                  Monthly
                </Button>
                <Button
                  variant={timeFilter === "weekly" ? "default" : "outline"}
                  size="sm"
                  className={timeFilter === "weekly" ? "bg-[#8B5CF6] hover:bg-[#7C4DEF]" : ""}
                  onClick={() => setTimeFilter("weekly")}
                >
                  Weekly
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-300" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-[#221F26] border border-[#3A3643] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              >
                <option value="all">All Categories</option>
                <option value="energy">Energy Savers</option>
                <option value="commute">Green Commuters</option>
                <option value="waste">Zero Waste</option>
                <option value="water">Water Conservers</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Full Leaderboard Table */}
      <section className="max-w-7xl mx-auto mb-12">
        <Card className="bg-[#2A2731] border-[#3A3643]">
          <Table>
            <TableCaption>
              Showing top eco-contributors based on sustainable actions.
            </TableCaption>
            <TableHeader>
              <TableRow className="hover:bg-[#3A3643]/50 border-b border-[#3A3643]">
                <TableHead className="text-[#0EA5E9] w-[80px]">Rank</TableHead>
                <TableHead className="text-[#0EA5E9]">User</TableHead>
                <TableHead className="text-[#0EA5E9]">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Eco-Score
                    <div className="flex flex-col">
                      <ArrowUp size={12} />
                      <ArrowDown size={12} />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="text-[#0EA5E9] hidden md:table-cell">Location</TableHead>
                <TableHead className="text-[#0EA5E9] hidden md:table-cell">Badges</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers.map((user) => (
                <TableRow 
                  key={user.id} 
                  className={`hover:bg-[#3A3643]/50 ${user.isCurrentUser ? "bg-[#8B5CF6]/10" : ""}`}
                >
                  <TableCell className="font-medium">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${user.rank === 1 ? "bg-[#FFD700] text-[#221F26]" : 
                        user.rank === 2 ? "bg-[#C0C0C0] text-[#221F26]" :
                        user.rank === 3 ? "bg-[#CD7F32] text-[#221F26]" : "bg-[#3A3643]"}`}>
                      {user.rank}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className={`font-medium ${user.isCurrentUser ? "text-[#8B5CF6]" : ""}`}>{user.name}</p>
                        {user.isCurrentUser && <span className="text-xs text-[#8B5CF6]">You</span>}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">
                    {user.score.toLocaleString()} pts
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{user.country}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex gap-1 flex-wrap">
                      {user.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="bg-[#3A3643]/50">{badge}</Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Card>
      </section>

      {/* User Growth & Environmental Impact Graph */}
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-[#F97316] to-[#8B5CF6] text-transparent bg-clip-text">
            Environmental Impact Metrics
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Growth Chart */}
          <Card className="bg-[#2A2731] border-[#3A3643] p-4">
            <CardHeader>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-[#0EA5E9]" />
                <CardTitle className="text-xl text-[#0EA5E9]">User Growth</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={impactData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3A3643" />
                    <XAxis dataKey="month" stroke="#8B5CF6" />
                    <YAxis stroke="#8B5CF6" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#221F26', borderColor: '#8B5CF6' }}
                      labelStyle={{ color: '#8B5CF6' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="userGrowth" 
                      name="Users"
                      stroke="#0EA5E9" 
                      strokeWidth={2}
                      dot={{ stroke: '#0EA5E9', strokeWidth: 2, fill: '#221F26', r: 4 }}
                      activeDot={{ r: 6, stroke: '#0EA5E9', strokeWidth: 2, fill: '#8B5CF6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Environmental Impact Chart */}
          <Card className="bg-[#2A2731] border-[#3A3643] p-4">
            <CardHeader>
              <div className="flex items-center">
                <ChartBar className="mr-2 h-5 w-5 text-[#F97316]" />
                <CardTitle className="text-xl text-[#F97316]">CO₂ Saved (tons)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3A3643" />
                    <XAxis dataKey="month" stroke="#8B5CF6" />
                    <YAxis stroke="#8B5CF6" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#221F26', borderColor: '#F97316' }}
                      labelStyle={{ color: '#F97316' }}
                    />
                    <Bar 
                      dataKey="co2Saved" 
                      name="CO₂ Saved (tons)"
                      fill="#F97316" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Section with eco-tips and social sharing */}
      <section className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2731] rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Eco Tips */}
            <div>
              <h3 className="text-xl font-semibold text-[#0EA5E9] mb-4">Eco Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">•</span> Use shorter AI prompts to save energy
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">•</span> Consider batching your AI requests
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">•</span> Try text prompts before image generation
                </li>
              </ul>
            </div>
            
            {/* Challenge Friends */}
            <div>
              <h3 className="text-xl font-semibold text-[#F97316] mb-4">Challenge Your Friends</h3>
              <p className="text-gray-300 mb-4">
                Invite friends to join the eco-challenge and see who can reach the top of the leaderboard!
              </p>
              <Button className="bg-[#F97316] hover:bg-[#E56205] w-full sm:w-auto">
                Send Challenge
              </Button>
            </div>
            
            {/* Social Sharing */}
            <div>
              <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Share Your Impact</h3>
              <p className="text-gray-300 mb-4">
                Spread the word about sustainable AI usage and your environmental contributions!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="hover:bg-[#1877F2] hover:border-[#1877F2]">
                  Facebook
                </Button>
                <Button variant="outline" className="hover:bg-[#1DA1F2] hover:border-[#1DA1F2]">
                  Twitter
                </Button>
                <Button variant="outline" className="hover:bg-[#0A66C2] hover:border-[#0A66C2]">
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
