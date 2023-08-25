import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flex, FlexColumn } from "./components/shared/Flex";
import { Auth } from "./components/static/Auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { DashboardContextProvider } from "./contexts/DashboardContext";
//import { Counter } from "./components/static/Counter";

function App() {
  return (
    <Flex width="100vw" height="100vh">
      <FlexColumn
        width="100%"
      >
        <DashboardContextProvider>
        <RouterProvider router={router} />
        </DashboardContextProvider>
      </FlexColumn>
      </Flex>
  );
}

export default App;
