import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { PlanProvider } from "./planContext";

import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PlanProvider>
      <Router>
        <App />
      </Router>
    </PlanProvider>
  </StrictMode>
);
