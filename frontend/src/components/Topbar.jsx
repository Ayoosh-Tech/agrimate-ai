import { Search, Bell } from "lucide-react";

function Topbar() {
    return(
        <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
            <div>
                <h2 className="text-2xl font-bold text-green-800">Dashboard</h2>

                <p className="text-gray-500 text-sm">Welcome back 👋</p>
            </div>

            <div className="flex items-center gap-5">

                <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">

                    <Search
                    size={18}
                    className="text-gray-400"
                    />

                    <input 
                    type="text"
                    placeholder="Search..."
                    className="ml-2 bg-transparent outline-none"
                    />
                </div>

                <Bell
                size={22}
                className="cursor-pointer"
                />

                <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
                    AI
                </div>
            </div>
        </header>
    );
}

export default Topbar;