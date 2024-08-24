import React, { useState, useEffect } from 'react';
import "./KosdaqTradeForm.css";

const KosdaqTradeForm = () => {
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [kosdaqPrice, setKosdaqPrice] = useState(null);

    // KOSDAQ 실시간 주가 가져오기 (임시 데이터로 예시)
    useEffect(() => {
        const fetchKosdaqPrice = async () => {
            try {
                // 여기에서 API 호출 또는 크롤링 결과를 가져옴
                const response = await fetch('/api/kosdaq-price'); // 가상의 API 호출
                const data = await response.json();
                setKosdaqPrice(data.price); // 예시: { "price": 850.75 }
            } catch (error) {
                console.error("Error fetching KOSDAQ price:", error);
            }
        };

        fetchKosdaqPrice();

        const interval = setInterval(fetchKosdaqPrice, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleBuy = () => {
        alert(`KOSDAQ 주식 ${quantity}주를 ${price} KRW에 매수했습니다.`);
        // 매수 로직 구현 부분
    };

    const handleSell = () => {
        alert(`KOSDAQ 주식 ${quantity}주를 ${price} KRW에 매도했습니다.`);
        // 매도 로직 구현 부분
    };

    return (
        <div className="wrapper">
            <div className="trade-section">
                <ul className="menu-bar">
                    <li><a href="#kospi">KOSPI 주식 거래</a></li>
                    <li><a href="#kosdaq">KOSDAQ 주식 거래</a></li>
                    <li><a href="#krx">한국 거래소</a></li>
                </ul>

                <div className="trade-form">
                    <h2>KOSDAQ 주식 거래</h2>
                    <div className="input-group">
                        <label htmlFor="quantity">수량:</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="주식 수량 입력"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="price">가격 (KRW):</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="가격 입력"
                        />
                    </div>

                    <div className="button-group">
                        <button onClick={handleBuy}>매수</button>
                        <button onClick={handleSell}>매도</button>
                    </div>
                </div>
            </div>

            {/* KOSDAQ 현재 상황 표시 섹션 */}
            <div className="kosdaq-status">
                <h2>KOSDAQ 현재 상황</h2>
                <p>현재 KOSDAQ 지수: {kosdaqPrice !== null ? `${kosdaqPrice} KRW` : "로딩 중..."}</p>
            </div>
        </div>
    );
};

export default KosdaqTradeForm;
