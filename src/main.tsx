import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import clsx from "clsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="overflow-hidden">
      <div className="w-screen">
        <div className={clsx("mx-auto", "p-3", "max-w-screen-lg", "text-slate-700")}>
          <App />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
