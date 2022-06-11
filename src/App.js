import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDash from "./component/AdminDash";
import CoursList from "./component/CoursList";
import Footer from "./component/Footer";
import Login from "./component/login/Login";
import Navbar from "./component/Navbar";
import QuizList from "./component/QuizList";
import UserList from "./component/UserList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<AdminDash />} />

        <Route path="/adminDash" element={<AdminDash />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/quiz" element={<QuizList />} />
        <Route path="/cours" element={<CoursList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
