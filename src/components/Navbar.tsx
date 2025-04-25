
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#221F26]/95 backdrop-blur-sm z-50 border-b border-[#8B5CF6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-[#8B5CF6] transition-colors">
              EcoAI
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/user">User Page</NavLink>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
              <NavLink to="/login">Login</NavLink>
              <Link to="/account" className="text-gray-300 hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110">
                <UserRound className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-[#8B5CF6] relative group px-3 py-2"
  >
    {children}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#8B5CF6] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
  </Link>
);

export default Navbar;
