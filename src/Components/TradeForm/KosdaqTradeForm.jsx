import React, { useState } from 'react';
import "./KosdaqTradeForm.css";

const KosdaqTradeForm = () => {
    const [tradeType, setTradeType] = useState('buy');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tradeType === 'buy') {
            alert(`매수 주문: 수량 ${quantity}, 가격 ${price}`);
        } else {
            alert(`매도 주문: 수량 ${quantity}, 가격 ${price}`);
        }
        setQuantity('');
        setPrice('');
    }

    return (
        <div className="wrapper">
            <ul className="menu-bar">
                <li><a href="">KOSPI 주식 거래</a></li>
                <li><a href="">KOSDAQ 주식 거래</a></li>
                <li><a href="">한국 거래소</a></li>
            </ul>

            <form className="trade-form" onSubmit={handleSubmit}>
                <label>주문 유형</label>
                <div className="trade-buttons">
                    <button 
                        type="button" 
                        className={tradeType === 'buy' ? '' : 'sell'}
                        onClick={() => setTradeType('buy')}
                    >
                        매수
                    </button>
                    <button 
                        type="button" 
                        className={`sell ${tradeType === 'sell' ? 'sell' : ''}`}
                        onClick={() => setTradeType('sell')}
                    >
                        매도
                    </button>
                </div>

                <label>수량</label>
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)} 
                    placeholder="수량 입력" 
                    required 
                />

                <label>가격</label>
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    placeholder="가격 입력" 
                    required 
                />

                <button type="submit">
                    {tradeType === 'buy' ? '매수 주문' : '매도 주문'}
                </button>
            </form>
        </div>
    );
}

export default KosdaqTradeForm;
