"""Auth router — JWT issue/refresh, register, me. Stubbed for MVP."""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/auth", tags=["auth"])


class RegisterBody(BaseModel):
    email: str
    password: str
    display_name: str


class LoginBody(BaseModel):
    email: str
    password: str


@router.post("/register", status_code=201)
def register(body: RegisterBody):
    # TODO: persist user, hash password, return tokens
    raise HTTPException(501, "not implemented — Phase 1")


@router.post("/login")
def login(body: LoginBody):
    raise HTTPException(501, "not implemented — Phase 1")


@router.get("/me")
def me():
    raise HTTPException(501, "not implemented — Phase 1")
