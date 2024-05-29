import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./projectRouting/projectRoute";
import GlobalContext from "./globalContext/GlobalContext";

const App = () => {
  return (
    <GlobalContext>
      <RouterProvider router={routes} />
    </GlobalContext>
  );
};

export default App;
