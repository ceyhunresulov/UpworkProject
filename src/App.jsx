import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Drag from "./pages/Drag";

function App() {
  return (
    <div className="bg-gray-100 w-screen h-screen p-4 flex flex-col gap-6">
      <Header />
      <div className="grid grid-cols-12 gap-6 h-full">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9 h-full">
          <Drag />
        </div>
      </div>
    </div>
  );
}

export default App;
