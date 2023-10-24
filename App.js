import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Slide from "./components/Slide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import Number from "./components/Number";
import Run from "./components/Run";
import Hooks from "./components/Hooks";
import Forms from "./components/Forms";
import Table from "./components/Table";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/slide" element={<Slide />} />
          <Route path="/hooks" element={<Hooks/>}/>
          <Route path="/forms" element={<Forms/>}/>
          <Route path="/table" element={<Table/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/profile" element={<Profile />} >
            <Route path="number" element={<Number/>}>
              <Route path="run" element={<Run/>}/>
            </Route>
              
          </Route>
        </Routes>
        <Toaster position="bottom-center"  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
