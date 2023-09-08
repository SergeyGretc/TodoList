import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceProvider from "./ServiceProvider";
import App from "./App";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <ServiceProvider>
      <App />
    </ServiceProvider>
  );
}
