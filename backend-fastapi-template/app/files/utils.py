import os
from fastapi import HTTPException

BASE_DIR = "uploaded_files"  # directory to store uploaded files
os.makedirs(BASE_DIR, exist_ok=True)  # ensure folder exists

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "pdf", "txt"}

def validate_filename(filename: str):
    ext = filename.split(".")[-1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail=f"File type .{ext} not allowed")
    return filename

def get_user_folder(user_id: str | int):
    folder = os.path.join(BASE_DIR, str(user_id))
    os.makedirs(folder, exist_ok=True)
    return folder

def get_file_path(filename: str, user_id: str | int = None):
    if user_id:
        folder = get_user_folder(user_id)
        return os.path.join(folder, filename)
    return os.path.join(BASE_DIR, filename)