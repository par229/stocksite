import React, {useState} from 'react';
import "./RegisterForm.css";
import {FaLock, FaUser, FaMailBulk} from "react-icons/fa";

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_check, setPasswordCheck] = useState('');
    const [email, setEmail] = useState('');
    const [Verification_code, setVerificationCode] = useState('');

    const [shake, setShake] = useState(false);

    const handleRegisteration = () => {
        if (!username || !password) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        } else {

        }
    };

    const checkduplicate = () => {
        //return 사용 가능한 ID입니다
        //return 사용 불가능한 ID입니다.
    };

    const checkemail = () => {
        const emailchecker = document.querySelector(".verify-email");
        if (email) {
            //return 이메일이 발송되었습니다. 이메일을 확인해주십시오.
            emailchecker.style.display = 'flex';
            //발송된 메일과 일치할 시 return 이메일 인증이 완료되었습니다.
        }
    };

    return (
        <div className="wrapper" id="RegisterForm">
            <h1>회원 가입</h1>
            <form action="">
                <div className="input-box check-required">
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
                    <button className="checkbtn" onClick={checkduplicate}>중복 확인</button>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Password'
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={shake && !password ? 'shake-horizontal' : ''}
                        required/>
                    <FaLock className="icon"/>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Password check'
                        id="passwordcheck"
                        name="passwordcheck"
                        value={password_check}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        className={shake && !password_check ? 'shake-horizontal' : ''}
                        required/>
                    <FaLock className="icon"/>
                </div>
                <div className="input-box check-required">
                    <input
                        type="text"
                        placeholder='Email'
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={shake && !email ? 'shake-horizontal' : ''}
                        required/>
                    <FaMailBulk className="icon"/>
                    <button className="checkbtn" onClick={checkemail}>인증메일 발송</button>
                </div>
                <div className="input-box check-required verify-email">
                    <input
                        type="text"
                        placeholder='Verification code'
                        id="Verification-code"
                        name="Verification-code"
                        value={Verification_code}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className={shake && !email ? 'shake-horizontal' : ''}
                        required/>
                    <FaMailBulk className="icon"/>
                    <button className="checkbtn" onClick={checkemail}>인증번호 확인</button>
                </div>
                <button type="submit" onClick={handleRegisteration}>가입하기</button>
            </form>
        </div>
    )
}
export default RegisterForm;