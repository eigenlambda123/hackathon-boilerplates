from pydantic import BaseModel
from typing import List

class FileResponse(BaseModel):
    filename: str
    url: str

class MultiFileResponse(BaseModel):
    files: List[FileResponse]
