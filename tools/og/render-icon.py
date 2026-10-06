#!/usr/bin/env python3
"""
Render the site icon (tools/og/icon.html) to assets/icon-48.png, icon-180.png
(Apple touch icon) and icon-192.png. Search results show the icon, and Google
wants a square at a multiple of 48 px.

    python3 tools/og/render-icon.py
"""
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / "tools" / "og" / "icon.html"

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome")
    for size in (48, 180, 192):
        page = browser.new_page(viewport={"width": 192, "height": 192}, device_scale_factor=size / 192)
        page.goto(SRC.as_uri())
        page.evaluate("document.fonts.ready")
        page.wait_for_timeout(300)
        out = ROOT / "assets" / f"icon-{size}.png"
        # the Apple icon is drawn without transparency: iOS rounds its own corners
        page.screenshot(path=str(out), type="png", omit_background=(size != 180), clip={"x": 0, "y": 0, "width": 192, "height": 192})
        print(f"wrote {out.relative_to(ROOT)}")
        page.close()
    browser.close()
