import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IndexDay5 from './day5/indexDay5.jsx'
import {CtrlComp} from './day5HM/CtrlComp.jsx'
import SelectAll from './day5HM/SelectAll.jsx'
import reportWebVitals from './reportWebVitals';
import EventList from './day7/EventList.jsx'
import HOC from './classComponentHOC/index.jsx';
import FunctionTheme from './useContext/ThemeContext'
import EventProvider from './useContext/eventContext/ContextEvent'
import AddEvent from './useContext/eventContext/addEvent'
import EventUI from './useContext/eventContext/EventUI'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventProvider>
      <AddEvent />
      <EventUI />
    </EventProvider>
    {/* <FunctionTheme/> */}
    {/* <HOC /> */}
    {/* <EventList /> */}
    {/* <CtrlComp /> */}
    {/* <SelectAll/> */}
    {/* <IndexDay5 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
