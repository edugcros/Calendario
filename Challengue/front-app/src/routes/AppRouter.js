import { Route, Routes } from "react-router-dom";
import Calendar from "../pages/Calendar/Calendar";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default AppRouter;
