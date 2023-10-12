import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./rtk/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientGoogleId = "43127046985-2etlihf83g7v2fm4u6pastj46231m6bq.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientGoogleId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);
