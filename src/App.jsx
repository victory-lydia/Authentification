import "./App.css";
import LoginButton from "./components/loginButton";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupButton from "./components/SignupButton";
import ProtectedRoutes from "./services/ProtectedRoutes";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/loginButton" element={<LoginButton />} />
            <Route path="/signupButton" element={<SignupButton />} />
            {/*protected routes*/}
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<h1>homepage</h1>} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
