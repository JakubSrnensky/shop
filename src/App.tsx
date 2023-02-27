import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
