import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.js";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./Utils/store.js";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
