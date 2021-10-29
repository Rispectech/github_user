import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-idufuy9f.us.auth0.com
//2R7kybydxAbCE1YUGJhDL8603EOwb942

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-idufuy9f.us.auth0.com"
      clientId="2R7kybydxAbCE1YUGJhDL8603EOwb942"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
