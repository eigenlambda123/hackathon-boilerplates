from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def _trim(password: str) -> str:
    # bcrypt only uses first 72 bytes; slice to avoid ValueError
    return password.encode("utf-8")[:72].decode("utf-8", errors="ignore")

def get_password_hash(password: str) -> str:
    return pwd_context.hash(_trim(password))

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(_trim(plain_password), hashed_password)
