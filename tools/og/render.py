#!/usr/bin/env python3
"""
Render the Open Graph card (tools/og/og.html) to assets/og.png at 1200×630.

    python3 tools/og/render.py

Uses the Google Chrome already installed (Playwright's "chrome" channel), so no
browser download is needed. Waits for the web fonts before taking the shot.
"""
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / "tools" / "og" / "og.html"
OUT = ROOT / "assets" / "og.png"

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome")
    page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    page.goto(SRC.as_uri())
    page.evaluate("document.fonts.ready")
    page.wait_for_timeout(400)
    page.screenshot(path=str(OUT), type="png")
    browser.close()

print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")
