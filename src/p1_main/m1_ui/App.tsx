import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "../Main";
import RoutesInProject from "./routes/Routes";
import {store} from "../m2_bll/redux/store";


function App() {
  return (
      <div className="App">

        <Provider store={store}>
          <HashRouter>
            <>
              <Main/>
              <RoutesInProject/>
            </>
          </HashRouter>
        </Provider>

      </div>
  );
}

export default App;