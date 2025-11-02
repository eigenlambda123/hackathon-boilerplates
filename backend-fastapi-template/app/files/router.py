from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from fastapi.responses import FileResponse as FastAPIFileResponse
from .crud import save_file, save_multiple_files, delete_file, list_files
from .utils import get_file_path
from .schemas import FileResponse, MultiFileResponse
from typing import List
import os

router = APIRouter(prefix="/files", tags=["files"])

# Upload single file
@router.post("/upload", response_model=FileResponse)
def upload_file(file: UploadFile = File(...), user_id: str | int = None):
    filename = save_file(file, user_id)
    return {"filename": filename, "url": f"/files/download/{filename}"}

# Upload multiple files
@router.post("/upload-multiple", response_model=MultiFileResponse)
def upload_multiple_files(files: List[UploadFile] = File(...), user_id: str | int = None):
    filenames = save_multiple_files(files, user_id)
    return {
        "files": [{"filename": f, "url": f"/files/download/{f}"} for f in filenames]
    }

@router.get("/download/{filename}")
def download_file(filename: str, user_id: str | int = None):
    file_path = get_file_path(filename, user_id)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    return FastAPIFileResponse(file_path, filename=filename)

@router.delete("/{filename}")
def remove_file(filename: str, user_id: str | int = None):
    delete_file(filename, user_id)
    return {"detail": f"{filename} deleted successfully"}

@router.get("/list", response_model=List[str])
def get_files(user_id: str | int = None):
    return list_files(user_id)
