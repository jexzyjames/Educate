import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Signin from "../SignIn Page/Signin";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Food App/Home";
import Login from "../Food App/Login";
import Provider, { ImageProvider } from '../Context/Context'
import Accordion from "../Accordion/Accordion";
import Gallery from "../Context/Gallery";
import Material from "../Material-UI/Material";
import { Container } from "@mui/material";
import Display from "../ToggleButons/Display";
import { StoreProvider } from "../ToggleButons/Context";
import Check from "../ToggleButons/Check";
import Form from "../Form";
function Router(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <BrowserRouter>
      <StoreProvider>

        <Routes>
          <Route
            path="/"
            element={<Form  />}
          />
          <Route
            path="/dashboard"
            element={<Gallery />}
          />  <Route
          path="/check"
          element={<Check />}
        />
        </Routes>
        </StoreProvider>


        {/* <Login/> */}
      </BrowserRouter>
    </div>
  );
}

export default Router;
