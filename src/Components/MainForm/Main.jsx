import React from 'react';
import "./Main.css";

const Main = () => {
    return (
        <div className="wrapper main-container">
            <h1>모의 주식 투자</h1>
            <div id ="menubar">
                <nav>
                    <ul className="menu-bar">
                        <li><a href="kpTrade">KOSPI 주식 거래</a></li>
                        <li><a href="kdTrade">KOSDAQ 주식 거래</a></li>
                        <li><a href="krTrade">한국 거래소</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Main;