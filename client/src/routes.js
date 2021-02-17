import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import ShowMeme from "./components/ShowMeme";

const routes = [
  {
    path: "/",
    // element: <Layout />,
    children: [
      // { path: 'home', element: <Home /> },
      { path: "/", element: <Layout /> },
      { path: "/:id", element: <ShowMeme /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];

export default routes;
