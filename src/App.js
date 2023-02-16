import { useRoutes } from "react-router-dom";
import { appRoutes } from "./route/app.routes";

import "./App.css";

function App() {
  return useRoutes(appRoutes);
}

export default App;
