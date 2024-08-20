//  1. 백엔드 서버 구축
//  ( Node.js Express 환경설정)

//  sudo apt install npm

//  sudo apt install nodejs

//  sudo npm install -g n 
//  sudo n latest 

//  2. npm 명령어를 이용해서, 서버 역할을 해줄 프로그램인 Express를 Node.js에 설치
//  npm install express

//  3. 설치 시 파일
//  node_modules //module 정보
//  package-lock.json //오늘 기준 환경 저장됨
//  package.json //명세서임

//  4. touch server.js로 파일 생성
//  -> Node.js 환경에서 해당파일을 실행하게 되면 서버를 실행

//  5. 파일 안에 코드 작성
//  const express =require("express") //자바스크립트 끼리 파일 임포트가 됩니다.
//  const app = express()
//  app.use(express.json())

//  app.listen(8000,() => {
//      console.log("test message")
//  })

//  6. AWS의 insatance에서 8000번 port 열기

//  7. Node filename.js 입력으로 코드 실행