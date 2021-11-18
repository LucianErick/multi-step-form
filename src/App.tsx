import { BrowserRouter as Router } from "react-router-dom";

import { FormProvider } from "./contexts/FormContext";
import MainRoutes from "./routes";

import "./App.css";

function App() {
  return (
    <FormProvider>
      <Router>
        <MainRoutes />
      </Router>
    </FormProvider>
  );
}

export default App;
