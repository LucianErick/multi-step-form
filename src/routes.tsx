import { Routes, Route } from "react-router-dom";
import { FirstStep } from "./pages/FirstStep";
import { SecondStep } from "./pages/SecondStep";
import { ThirdStep } from "./pages/ThirdStep";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FirstStep />} />
      <Route path="/step-2" element={<SecondStep />} />
      <Route path="/step-3" element={<ThirdStep />} />
    </Routes>
  );
}
