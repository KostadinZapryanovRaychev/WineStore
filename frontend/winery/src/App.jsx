import React from "react";
import ReactDOM from "react-dom";
import Footer from "footer/Footer";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { ApplicationProvider } from "./context/ApplicatinContext";
import Layout from "./common/Layout/Layout";
import WineList from "./components/TestComponent/WineList/WineList";

const App = () => (
  <BrowserRouter>
    <ApplicationProvider>
      <Layout>
        <div>Name: winery</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        <WineList />
      </Layout>
    </ApplicationProvider>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
