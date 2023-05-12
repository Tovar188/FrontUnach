import React from "react";
import ReactDOM from "react-dom/client";
/* import FormsPersons from "./components/Projects/FormsPersons"; */
import RegisterProyect from "./pages/Projects/RegisterProyect.jsx";
/* import Login from './pages/login/Login' */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FormsPersons></FormsPersons> */}
    <RegisterProyect />
    {/* <Login></Login> */}
  </React.StrictMode>
);
