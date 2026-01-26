import "./App.css";
import AppRoutes from "./components/AppRoutes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div dir={localStorage.getItem("lang") == "en" ? "ltr" : "rtl"}>
          <AppRoutes />
        </div>
      </Provider>
    </>
  );
}

export default App;
