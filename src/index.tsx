import { createRoot } from "react-dom/client";
import App from "./App";
import { Planner } from "./components/planner";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<Planner />);
}
