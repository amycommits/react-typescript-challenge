import React from "react";
import { render } from "react-dom";
import { Router, RouteComponentProps } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import { useGlobal, GlobalContext } from "./context";
import Home from "./pages/Home";
import BusinessInfo from './pages/BusinessInfo'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
  }
`;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const cacheStore = window.localStorage.getItem("store") || {};
function ContextWrapper() {
  const globalValues = useGlobal(cacheStore);
  return (
    <GlobalContext.Provider value={globalValues}>
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <RouterPage path="/" pageComponent={<Home />}/>
          <RouterPage path="/info/:listing_id" pageComponent={<BusinessInfo />}/>
        </Router>
      </React.Fragment>
    </GlobalContext.Provider>
  );
}

render(<ContextWrapper />, document.getElementById("root"));
