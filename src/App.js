import logo from "./logo.svg";
import "./App.css";
import Login from "./Login.js";
import Main from "./Main.js";
import Blogs from "./Blogs.js";
import Plans from "./Plans.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route /* exact */ path="/blogs" element={<Blogs />} />
          <Route
            /* exact */ path="/login"
            element={<Login title="Continue" />}
          />
          <Route
            /* exact */ path="/plans"
            element={<Plans title="Continue" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
