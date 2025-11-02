from fastapi.responses import JSONResponse

def success_response(data=None, message="Success"):
    return {"status": "success", "message": message, "data": data}

def error_response(message="An error occurred", status_code=400):
    return JSONResponse(
        status_code=status_code,
        content={"status": "error", "message": message},
    )