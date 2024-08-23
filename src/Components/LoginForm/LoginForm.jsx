import React, {useEffect, useState} from 'react';
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
//import axios from 'axios';

function LoginForm ({setIsAuthenticated}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [shake, setShake] = useState(false);
    const navigate = useNavigate();
    const [bChecked, setChecked] = useState(false);

    const saveId = () =>{
            return (
                <input
                    type ="checkbox"
                    checked={bChecked}
                    onChange={(e) => checkHandler(e)}
                />
            );
    };

    const checkHandler =({target}) => {
        setChecked(target.checked);
        if(target.checked){
            setChecked(true);
            localStorage.setItem('save', 'true');
            localStorage.setItem('Id', username);
        } else{
            localStorage.removeItem('save');
            localStorage.removeItem('Id');
        }
    }

    useEffect(() => {
        if(localStorage.getItem('save') === 'true'){
            setUsername(localStorage.getItem('Id'));
            setChecked(true);
        }
    }, [bChecked]);


    /*function Axiostest() {
        axios.get("/blog")
            .then((response) => { // 성공
                console.log(response.data.email)
            })
            .catch((error) => { // 실패
                console.log(error)
            })

        axios.post("/blog/account",
            {
                id: username,
                password: password,
            });
    }*/
    // axios test

    const handleLogin = () => {
        if (!username || !password) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        } else {
            //console.log(username, password);
            //db get~~~ 일치시 성공
            sessionStorage.setItem('isAuthenticated', 'true');
            //보안문제 나중에 고쳐야 함 http-only cookie?
            setIsAuthenticated(true);
            navigate('/main');
        }
    };

    return (
        <div className="wrapper">
            <h1>로그인</h1>
            <form action="" method="post">
                <div className="input-box">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={shake && !username ? 'shake-horizontal' : ''}
                        placeholder='ID'
                        required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder='Password'
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={shake && !password ? 'shake-horizontal' : ''}
                        required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label>{saveId()}아이디 저장</label>
                    <a href="find">아이디/비밀번호 찾기</a>
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
                <div className="register-link">
                    <p>계정이 없으신가요?&nbsp;<a href="register">회원가입</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;