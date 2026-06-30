import { NavLink } from "react-router-dom";
{/*import {
    FaHome,
    FaComments,
    FaSeedling,
    FaBook,
    FaCog,
} from "react-icons/fa";
import { GiCow } from "react-icons/gi"; */}
import {
    LayoutDashboard,
    MessageSquare,
    Sprout,
    Beef,
    BookOpen,
    Settings,
} from "lucide-react";

function Sidebar () {
    const menuItems = [
        { name: "Dashboard", path: "/", icon: LayoutDashboard},
         { name: "AI Chat", path: "/chat", icon: MessageSquare},
          { name: "Crop Guide", path: "/crops", icon: Sprout},
           { name: "Livestock", path: "/livestock", icon: Beef},
             { name: "Farm Journal", path: "/journal", icon: BookOpen},
              { name: "Settings", path: "/settings", icon: Settings}
    ];
 
    return (
        <div className="flex min-h-screen">
        <aside className="w-64 bg-green-800 text-white p-5">
            <h1 className="text-2xl font-bold mb-8">🌱 AgriMate AI</h1>

            <nav className="space-y-2">
                {menuItems.map((item) => { 
                    const Icon = item.icon;
                    return ( 
                    <NavLink 
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                    `flex items-center gap-3 p-3 rounded-lg px-4 py-3 transition ${
                        isActive ? "bg-green-600" : "hover:bg-green-700"
                    }`
                } ><Icon size={20} />
                <span>{item.name}</span>
                </NavLink>
                 );
})}
            </nav>
            </aside>
            </div>
    );
    
}

export default Sidebar;