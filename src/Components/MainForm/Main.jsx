import React from 'react';
import "./Main.css";

const Main = () => {
    return (
        <div className="wrapper main-container">

            {/* 제목 */}
            <div id ="menubar">
                <nav>
                    <ul className="menu-bar">
                        <li className='list1'><button className='button'>주가 현황</button></li>
                        <h1 className='h1'>모의 주식 투자</h1>
                        <li className='list2'><button className='button'>마이페이지</button></li>
                        <li className='list3'><button className='button'>로그아웃</button></li>
                        <br></br>
                        
                    </ul>
                </nav>
            </div>

            {/* 메뉴 */}
            <div className='side_menu'>
                <ul>
                    <li><b>Menu</b></li>
                    <div className='menu_hr'></div>
                    <br></br>
                    <li><a href="kpTrade">KOSPI 주식 거래</a></li>
                    <li><a href="kdTrade">KOSDAQ 주식 거래</a></li>
                    <li><a href="https://www.krx.co.kr" target="_blank">한국 거래소</a></li>
                    {/* krTrade */}
                </ul>
            </div>

            {/* 현황판 */}
            <div className='content_boxs'>
                <ul>
                    <li className='content_li_1'>
                        <h2>KOSPI 지수</h2>
                        <div className='hr'></div>
                        <div className='content'>
                            
                        </div>
                    </li>

                    <li className='content_li_2'>
                        <h2>KOSDAQ 지수</h2>
                        <div className='hr'></div>
                        <div className='content'>
                            
                        </div>
                    </li>

                    <li className='content_li_3'>
                        <h2>관심 주식 지수</h2>
                        <div className='hr'></div>
                        <div className='content'>
                            
                        </div>
                    </li>

                    <li className='content_li_4'>
                        <h2>보유 주식 수익률</h2>
                        <div className='hr'></div>
                        <div className='content'>
                            
                        </div>
                    </li>

                </ul>
            </div>
            

        </div>
    )
}
export default Main;