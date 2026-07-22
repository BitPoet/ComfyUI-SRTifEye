# __init__.py
from aiohttp import web
from pathlib import Path
from server import PromptServer

from .nodes import SRTifEyeNode

DIST_DIR = Path(__file__).parent / "srtifeye_dist"

PromptServer.instance.app.add_routes([
    web.static("/srtifeye", str(DIST_DIR)),
])

NODE_CLASS_MAPPINGS = {
    "SRTifEye": SRTifEyeNode,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "SRTifEye": "SRTifEye",
}

WEB_DIRECTORY = "./web"

__all__ = [
    "NODE_CLASS_MAPPINGS",
    "NODE_DISPLAY_NAME_MAPPINGS",
    "WEB_DIRECTORY",
]