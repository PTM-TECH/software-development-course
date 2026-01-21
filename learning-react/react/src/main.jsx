import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GitHubUsers from "./GitHubUsersProject";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubUsers />
  </StrictMode>,
);
