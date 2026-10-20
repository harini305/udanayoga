"""
Generate optimised, responsive derivatives of the original Udana Yoga media.

Reads only from docs/source-audit/assets/original/ (never modified) and writes
AVIF + WebP variants to public/images/, plus src/data/image-manifest.json with
the intrinsic size and available widths of every derivative.

Run from the project root:  python scripts/optimize-images.py
Requires Pillow >= 11.3 (AVIF support).
"""
import json
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "assets", "original")
OUT = os.path.join(ROOT, "public", "images")
MANIFEST = os.path.join(ROOT, "src", "data", "image-manifest.json")

WIDTHS = [480, 800, 1200, 1600]

# slug -> (original path, optional crop box as fractions (left, top, right, bottom))
PHOTOS = {
    "shala-mandala": ("2024/08/mandala-1.webp", None),
    "shala-pavilion-class": ("2024/08/udana-yoga-shala-KSR.webp", None),
    "graduation-certificates": ("2024/08/YTTC-udana.webp", None),
    "graduation-celebration": ("2024/08/Udana-YTTC.webp", None),
    "mandala-ceremony": ("2024/08/YTTC-2.webp", None),
    "studio-ceremony-circle": ("2024/07/yoda-udana.webp", None),
    "studio-students": ("2024/08/Yoga-Class.webp", None),
    "studio-backbend-class": ("2024/07/galle-3.webp", None),
    "studio-group-yellow": ("2024/07/gale-4.webp", None),
    "graduates-seaside": ("2024/07/gale-5.webp", None),
    "aerial-studio": ("2024/07/gale-1.webp", None),
    "aerial-class": ("2025/02/aerial-yoga-pic-1.webp", None),
    "aerial-hammocks": ("2025/02/aerial-yoga-pic-2.webp", None),
    "aerial-mandala-circle": ("2025/02/aerial-yoga-pics-4.webp", None),
    "side-stretch-assist": ("2024/08/workshop-udana.webp", None),
    "headstand-assist": ("2024/08/udana-yoga-putu.jpg", None),
    "ceremony-sashes": ("2024/08/Workshop-bg-2-2.webp", None),
    "temple-prayer": ("2024/08/praying-temple.webp", None),
    "melukat-blessing": ("2024/08/melukat-2-2.webp", None),
    "melukat-spring": ("2024/08/Melukat-1.webp", None),
    "water-temple": ("2024/07/gale-2.webp", None),
    "canang-sari": ("2024/08/Canang-Sari.webp", None),
    "balinese-food": ("2024/07/udanas-food.webp", None),
    "putu-dwijendra": ("2024/08/Pak-Putu-Udana.webp", None),
    "putu-dwijendra-seated": ("2024/08/Pak-Putu-Dwijendra.webp", None),
    "tomoko": ("2024/08/Tomoko-Udana.webp", None),
}

# Small graphics: exported at their native size only.
GRAPHICS = {
    "badge-rys-200": "2024/08/Rys-200-1.webp",
    "badge-yacep": "2024/08/B5DABCAC-1262-442C-B88F-6FCE71631382_4_5005_c.jpeg",
    "badge-yoga-alliance": "2024/08/B8572940-2AFD-40CA-BD7E-513361E73216_4_5005_c.jpeg",
}


def save_variants(img, slug, widths):
    out = []
    for w in widths:
        h = round(img.height * w / img.width)
        resized = img.resize((w, h), Image.LANCZOS) if w != img.width else img
        resized.save(os.path.join(OUT, f"{slug}-{w}.webp"), "WEBP", quality=72, method=6)
        resized.save(os.path.join(OUT, f"{slug}-{w}.avif"), "AVIF", quality=52, speed=6)
        out.append(w)
    return out


def tinted_logo(src, slug, rgb, width):
    """Recolour the genuine transparent logo (white artwork) to a solid brand colour."""
    img = Image.open(os.path.join(SRC, src)).convert("RGBA")
    alpha = img.getchannel("A")
    solid = Image.new("RGBA", img.size, rgb + (255,))
    solid.putalpha(alpha)
    bbox = alpha.getbbox()
    solid = solid.crop(bbox)
    h = round(solid.height * width / solid.width)
    solid = solid.resize((width, h), Image.LANCZOS)
    solid.save(os.path.join(OUT, f"{slug}.webp"), "WEBP", quality=90, method=6)
    return {"width": width, "height": h}


def main():
    os.makedirs(OUT, exist_ok=True)
    manifest = {}
    for slug, (path, crop) in PHOTOS.items():
        img = Image.open(os.path.join(SRC, path)).convert("RGB")
        if crop:
            l, t, r, b = crop
            img = img.crop((int(l * img.width), int(t * img.height), int(r * img.width), int(b * img.height)))
        top = min(img.width, WIDTHS[-1])
        # Skip a standard width when the largest variant is less than 15% bigger
        # (e.g. 1200 next to a 1280px original) — it would be a near-duplicate.
        widths = sorted({w for w in WIDTHS if w < top and top / w >= 1.15} | {top})
        if img.width > WIDTHS[-1]:
            img = img.resize((WIDTHS[-1], round(img.height * WIDTHS[-1] / img.width)), Image.LANCZOS)
        saved = save_variants(img, slug, widths)
        manifest[slug] = {"src": path, "width": img.width, "height": img.height, "widths": saved}

    for slug, path in GRAPHICS.items():
        img = Image.open(os.path.join(SRC, path)).convert("RGB")
        img.save(os.path.join(OUT, f"{slug}.webp"), "WEBP", quality=85, method=6)
        manifest[slug] = {"src": path, "width": img.width, "height": img.height, "widths": [img.width], "single": True}

    # Logos (genuine artwork, recoloured only)
    manifest["logo-brown"] = {"src": "2024/06/Udana-yoga-Logo-asli.webp", **tinted_logo("2024/06/Udana-yoga-Logo-asli.webp", "logo-brown", (98, 58, 41), 320), "single": True}
    manifest["logo-white-academy"] = {"src": "2024/08/Udana-yoga-Logo-asli-footer.webp", **tinted_logo("2024/08/Udana-yoga-Logo-asli-footer.webp", "logo-white-academy", (255, 248, 244), 360), "single": True}

    # App icon from the orange brand symbol
    icon = Image.open(os.path.join(SRC, "2024/08/cropped-udana-logo-orange.webp")).convert("RGBA")
    icon.resize((192, 192), Image.LANCZOS).save(os.path.join(ROOT, "src", "app", "icon.png"), "PNG", optimize=True)
    icon.resize((180, 180), Image.LANCZOS).save(os.path.join(ROOT, "src", "app", "apple-icon.png"), "PNG", optimize=True)

    with open(MANIFEST, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=1)

    total = sum(os.path.getsize(os.path.join(OUT, n)) for n in os.listdir(OUT))
    print(f"{len(os.listdir(OUT))} files, {total / 1024:.0f} KB in public/images")


if __name__ == "__main__":
    main()
