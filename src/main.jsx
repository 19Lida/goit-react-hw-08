import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
// import AuthLayout from "./components/AuthLayout/AuthLayout.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <AuthLayout> */}
          <App />
          {/* </AuthLayout> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
