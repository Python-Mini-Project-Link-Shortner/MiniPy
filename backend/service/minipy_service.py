import os, smtplib, ssl
from datetime import datetime, timedelta, time
# Google OAuth
from apiclient          import discovery
from oauth2client       import client

# 구글 클라이언트 정보
GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID', None)
GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET', None)
if GOOGLE_CLIENT_ID is None:
    raise Exception("환경변수 GOOGLE_CLIENT_ID를 설정해주십시오.")
if GOOGLE_CLIENT_SECRET is None:
    raise Exception("환경변수 GOOGLE_CLIENT_SECRET을 설정해주십시오.")
# 구글 이메일 정보
GOOGLE_MINIPY_ID = os.environ.get('GOOGLE_MINIPY_ID', None)
GOOGLE_MINIPY_PASSWORD = os.environ.get('GOOGLE_MINIPY_PASSWORD', None)
if GOOGLE_MINIPY_ID is None:
    raise Exception("환경변수 GOOGLE_MINIPY_ID를 설정해주십시오.")
if GOOGLE_MINIPY_PASSWORD is None:
    raise Exception("환경변수 GOOGLE_MINIPY_PASSWORD를 설정해주십시오.")


def handshake_oauth(code):
    # 일회성 코드와 Access 토큰, Refresh 토큰 교환
    credentials = client.credentials_from_code(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET,
        ['profile', 'email'],
        code
    )

    # 이메일과 아이디 받기
    access_token = credentials.access_token
    refresh_token = credentials.refresh_token
    email = credentials.id_token['email']
    name = credentials.id_token['name']
    expiresAt = datetime.now() + timedelta(hours=1)

    # 반환
    return {
        'accessToken': access_token,
        'refreshToken': refresh_token,
        'email': email,
        'name': name,
        # 1시간 후 로그아웃
        'expiresAt': expiresAt.timestamp()
    }

def send_gmail(sender_email, text):
    ssl_port = 465                          # SSL로 접근할 경우의 Google Port
    context = ssl.create_default_context()  # SSL 컨텍스트 객체

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", ssl_port, context=context) as server:
            server.login(GOOGLE_MINIPY_ID, GOOGLE_MINIPY_PASSWORD)
            server.sendmail(sender_email, GOOGLE_MINIPY_ID, text)
    except:
        return False

    return True
