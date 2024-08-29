from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 브라우저 꺼짐 방지 옵션
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)

# 웹페이지 해당 주소 이동
driver.get("https://finance.naver.com/sise/")

# 요소 로드를 기다림
try:
    # 'box_type_l' 클래스 이름을 가진 요소가 로드될 때까지 최대 10초 대기
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "box_type_l"))
    )
    print(element.text)  # 해당 요소의 텍스트 출력
except Exception as e:
    print("오류 발생:", e)




# *가상환경으로 시작*
# 1. requests 라이브러리 설치
# pip install requests


# 2. Request 라이브러리 사용
# import requests

# r = request.get('url')
# url -> 가져오고 싶은 페이지나 API주소 입력

# 3. Requests 라이브러리로 가져온 정보 추출 -> Beautifulsoup4
# pip install bs4

# 4. 터미널에 입력
# pip install bs4 #beautifulsoup4

# 5. 기초 코드 완성
# import requests
# from bs4 import BeautifulSoup

# headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# data = requests.get('스크래핑할 주소',headers=headers)

# soup = BeautifulSoup(data.text, 'html.parser')

# 6. F12 누르고 추출할 정보 찾기

# 7. HTML에서 오른쪽 마우스 > 복사 > selector 복사

# 8. SELECT 예시
# soup.select('태그명')
# soup.select('.클래스명')
# soup.select('#아이디명')
 
# soup.select('상위태그명 > 하위태그명 > 하위태그명')
# soup.select('상위태그명.클래스명 > 하위태그명.클래스명')
 
# soup.select('태그명[속성="값"]')
 
# soup.select_one('위와 동일')

# 9. 코드 완성 예시
# import requests
# from bs4 import BeautifulSoup
 
# headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# data = requests.get('https://www.melon.com/chart/',headers=headers)
 
# soup = BeautifulSoup(data.text, 'html.parser')
 
# title = soup.select_one(' SELECT 입력란 ')
 
# print(title)

# 10. Crawling 확인
# print(title.text)