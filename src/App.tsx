import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { LandingContainer } from './components/Landing/LandingContainer';
import {Header} from "./components/HeaderNav/Header";
import {useAppDispatch, useAppSelector} from "./hooks/Hooks";
import {action} from "./Redux/Reducers/MainReducer";
import Preloader from "./Common/Preloader";

function App() {
    const dispatch = useAppDispatch();
    const [time, setTime] = useState(0);
    let {isLoading} = useAppSelector(state => state.main)
    useEffect(() => {
        const x = setTimeout(() => setTime(time + 1), 1000)
        if (time === 3){
            dispatch(action.GetLoad(false))
            return clearTimeout(x);
        }
        console.log("hello")
    },[dispatch,time])
  return (
      <BrowserRouter>
          {isLoading  ? <Preloader/> : <div className="App">
              <Header/>
              <Routes>
                  <Route path={"/"} element={<LandingContainer/>}></Route>
              </Routes>
          </div>}
      </BrowserRouter>

  );
}

export default App;
