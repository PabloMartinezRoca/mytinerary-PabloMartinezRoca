import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
      <App />
      <ToastContainer
        position="top-right"
        //autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </GoogleOAuthProvider>
  </Provider>
  // </React.StrictMode>,
);
