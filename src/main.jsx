import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ChatBot from "./Components/Chatbot/ChatBot.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Provider store={store}>
        {" "}
        <App />
      </Provider>

      <ChatBot />
    </Provider>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
