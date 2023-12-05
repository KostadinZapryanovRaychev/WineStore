import React from "react";
import ReactDOM from "react-dom";
import Footer from "footer/Footer";
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

const App = () => (
  <BrowserRouter>
    <ApplicationProvider>
      <Layout>
        <div>Name: winery</div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wine-list" element={<WineListPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-new-wine" element={<CreateWinePage />} />
        </Routes>
      </Layout>
    </ApplicationProvider>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
