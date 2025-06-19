import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider} from "react-router";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const AppLayout = () => {
  //React
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([ //a list of various path-containing-objects
  {
    path: "/",
    element: <AppLayout />
  },
  {
    path: "/about",
    element: <AboutUs />
  },
  {
    path: "/contactus",
    element: <ContactUs/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);