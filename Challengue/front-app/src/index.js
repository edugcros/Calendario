import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
