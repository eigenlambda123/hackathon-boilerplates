import shutil
from fastapi import UploadFile, HTTPException
from .utils import get_file_path, validate_filename, get_user_folder, BASE_DIR
import os

def save_file(file: UploadFile, user_id: str | int = None) -> str:
    filename = validate_filename(file.filename)
    file_path = get_file_path(filename, user_id)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return filename

def save_multiple_files(files: list[UploadFile], user_id: str | int = None) -> list[str]:
    saved_files = []
    for file in files:
        saved_files.append(save_file(file, user_id))
    return saved_files

def delete_file(filename: str, user_id: str | int = None):
    file_path = get_file_path(filename, user_id)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    os.remove(file_path)

def list_files(user_id: str | int = None):
    folder = get_user_folder(user_id) if user_id else BASE_DIR
    return os.listdir(folder)
