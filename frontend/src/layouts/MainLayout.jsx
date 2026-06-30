import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function MainLayout({ children }) {
    return(
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar />

            <main className="p-8"> {children} </main>
        </div>
        </div>
    );
}

export default MainLayout;