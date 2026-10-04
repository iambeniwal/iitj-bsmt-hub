#!/usr/bin/env python3
"""
Flatten the whole hub into one self-contained .html file.

The hosted site is several files. This inlines all of them into a single
document you can WhatsApp or email. It opens with no server and no
network (fonts fall back to system ones), and progress still saves in
the browser that opens it.

    python3 tools/build-offline.py

Output: dist/bsmt-hub-offline.html
"""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"


def main():
    html = (ROOT / "index.html").read_text(encoding="utf-8")

    # the offline copy must never phone home
    html = re.sub(r'\n?\s*<script src="[^"]*analytics\.js"></script>', "", html)

    def css(m):
        href = m.group(1)
        if href.startswith("http"):
            return m.group(0)
        return "<style>\n" + (ROOT / href).read_text(encoding="utf-8") + "\n</style>"

    def js(m):
        src = m.group(1)
        if src.startswith("http"):
            return m.group(0)
        body = (ROOT / src).read_text(encoding="utf-8").replace("</script>", "<\\/script>")
        return "<script>\n" + body + "\n</script>"

    html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
    html = re.sub(r'<script src="([^"]+)"></script>', js, html)

    DIST.mkdir(exist_ok=True)
    out = DIST / "bsmt-hub-offline.html"
    out.write_text(html, encoding="utf-8")
    print(f"built {out.relative_to(ROOT)}  ({round(len(html.encode()) / 1024)} KB)")


if __name__ == "__main__":
    main()
