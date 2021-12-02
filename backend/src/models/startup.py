from enum import Enum
from typing import List, Optional
from pydantic import BaseModel
from src.models.status import StatusBase
from src.models.category import CategoryBase
from src.models.company import CompanyBase


class StartupBase(BaseModel):
    id: int = None
    name: str
    description: str
    author: int
    statuses: List[StatusBase]
    sertificate: str = None
    categories: List[CategoryBase]
    company: CompanyBase = None

    class Config:
        orm_mode = True


class StartupCrateorUpdate(BaseModel):
    description: str
    name: str
    author: int
    company_id: int
    statuses: List[int]
    sertificate: str
    categories: List[int]

    class Config:
        orm_mode = True


class StartupList(BaseModel):
    startups: Optional[List[StartupBase]] = None

    class Config:
        orm_mode = True
