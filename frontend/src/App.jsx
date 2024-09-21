import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Collection from "./pages/Collection/Collection";
import NewLaunch from "./pages/NewLaunch/NewLaunch";
import Sale from "./pages/Sale/Sale";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact={true} path="/collections" element={<Collection />} />
          <Route exact={true} path="/new-launches" element={<NewLaunch />} />
          <Route exact={true} path="/sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
