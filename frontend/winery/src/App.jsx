import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { ApplicationProvider } from "./context/ApplicatinContext";
import Layout from "./common/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import WineListPage from "./pages/WineListPage/WineListPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreateWinePage from "./pages/CreateWinePage/CreateWinePage";
import EditWine from "./pages/EditWine/EditWine";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => (
  <BrowserRouter>
    <ApplicationProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wine-list" element={<WineListPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-new-wine" element={<CreateWinePage />} />
          <Route path="/edit-wine" element={<EditWine />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </ApplicationProvider>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
