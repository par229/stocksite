import './App.css';
import React, {useState, useEffect} from 'react';
import LoginForm from "./Components/LoginForm/LoginForm";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import FindForm from "./Components/FindForm/FindForm";
import Main from "./Components/MainForm/Main";
import Krtrade from "./Components/TradeForm/KoreaTradeForm"
import Kdtrade from "./Components/TradeForm/KosdaqTradeForm"
import Kptrade from "./Components/TradeForm/KospiTradeForm"


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        // 로그인 상태를 확인하는 로직 (예: 로컬 스토리지, 쿠키, API 호출 등)
        const loggedIn = sessionStorage.getItem('isAuthenticated');
        if (loggedIn === 'true') {
            setIsAuthenticated(true);
        }
    }, []);


  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />}/>
                    <Route path="/login"
                           element={
                               isAuthenticated ? <Navigate to="/main" /> : <LoginForm setIsAuthenticated={setIsAuthenticated} />
                           }></Route>
                    <Route path ="/register" element={<RegisterForm/>}></Route>
                    <Route path ="/find" element={<FindForm/>}></Route>
                    <Route path="/main"
                           element={
                               isAuthenticated ? <Main /> : <Navigate to="/login" />
                           }></Route>
                    <Route path="/krTrade"
                           element={
                               sessionStorage.getItem('isAuthenticated') === 'true' ? <Krtrade /> : <Navigate to="/login" />
                           }></Route>
                    <Route path="/kdTrade"
                           element={
                               sessionStorage.getItem('isAuthenticated') === 'true' ? <Kdtrade /> : <Navigate to="/login" />
                           }></Route>
                    <Route path="/kpTrade"
                           element={
                               sessionStorage.getItem('isAuthenticated') === 'true' ? <Kptrade /> : <Navigate to="/login" />
                           }></Route>
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;