import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import CropGuide from "./pages/CropGuide";
import Livestock from "./pages/Livestock";
import FarmJournal from "./pages/FarmJournal";
import Settings from "./pages/Settings";
import MainLayout from "./layouts/MainLayout";

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={ <MainLayout> <Dashboard /> </MainLayout>} />
        <Route path="/chat" element={ <MainLayout> <Chat /> </MainLayout>} />
        <Route path="/crops" element={ <MainLayout> <CropGuide /> </MainLayout>} />
        <Route path="/livestock" element={ <MainLayout> <Livestock /> </MainLayout>} />
        <Route path="/journal" element={ <MainLayout> <FarmJournal /> </MainLayout>} />
        <Route path="/settings" element={ <MainLayout> <Settings /> </MainLayout>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;