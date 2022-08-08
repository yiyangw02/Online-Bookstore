import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import RouteDir from "./Routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouteDir />
  // {/* </React.StrictMode> */}
);

// ReactDOM.render(<App />, document.getElementById("root"));