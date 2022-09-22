import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/loader/Loader";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <Providers>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Providers>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
reportWebVitals();
