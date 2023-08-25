import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import NetflixIndexComponent from './components/NetflixIndexComponent';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import RegisterComponent from './components/Registercomponent';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import DataBindingComponent from './components/DataBindingComponent';
// import DataBindingComponents from './components/DataBindingComponenets';
import DataTwoWayBinding from './components/DataTwoWayBinding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

{/* <RegisterComponent/> */}
{/* <DataBindingComponent/> */}
{/* <NetflixIndexComponent/> */}
{/* <DataBindingComponents/> */}

<DataTwoWayBinding/>

{/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
