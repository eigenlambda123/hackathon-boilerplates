# app/core/responses.py
from fastapi.responses import JSONResponse
from typing import Any

def success_response(
    data: Any = None,
    message: str = "Success",
    status_code: int = 200
):
    """
    Standard success response wrapper.
    """
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "success",
            "message": message,
            "data": data,
        }
    )

def error_response(
    message: str = "An error occurred",
    status_code: int = 400,
    details: Any = None
):
    """
    Standard error response wrapper.
    """
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "error",
            "message": message,
            "details": details,
        }
    )

def validation_error_response(errors: Any):
    """
    Standard validation error response wrapper.
    """
    return JSONResponse(
        status_code=422,
        content={
            "status": "fail",
            "message": "Validation failed",
            "errors": errors,
        }
    )
