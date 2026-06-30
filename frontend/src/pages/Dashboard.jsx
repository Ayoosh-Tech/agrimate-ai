import { MessageSquare, Sprout, BookOpen, Beef } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";


function Dashboard  () {
    const navigate = useNavigate();
  return (
    <div className="space-y-8">
        <div><h1 className="text-4xl font-bold text-green-800">
        Welcome to AgriMate AI 🌱</h1>
        <p className="text-gray-600 mt-2">Your offline farming assistant for smarter decisions.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        <DashboardCard 
            title="AI Chat"
            description="Get instant farming advice."
            icon={<MessageSquare size={32} />}
            color="bg-green-100"
            button="Start Chat"
            onClick={() => navigate("/chat")}
        />

        <DashboardCard 
            title="Crop Guide"
            description="Explore crop care and disease management."
            icon={<Sprout size={32} />}
            color="bg-emerald-100"
            button="Explore"
            onClick={() => navigate("/crops")}
        />

        <DashboardCard 
            title="Farm Journal"
            description="Keep track of farm activities."
            icon={<BookOpen size={32} />}
            button="Open Journal"
            onClick={() => navigate("/journal")}
        />

        <DashboardCard 
            title="Livestock"
            description="Animal care and management."
            icon={<Beef size={32} />}
            button="View Care"
            onClick={() => navigate("/livestock")}
        />
    </div>
    </div>
  );
}

export default Dashboard;