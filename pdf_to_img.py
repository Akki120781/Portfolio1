import fitz
import sys
import shutil

pdf_files = [
    ("C:\\Users\\asus\\Downloads\\SkillsCert20260409-31-viyxy6.pdf", "public/certifications/cert-skillscert.png"),
    ("C:\\Users\\asus\\Downloads\\digital-skills-social-media_certificate_of_achievement_cucilf1.pdf", "public/certifications/cert-social-media.png")
]

for src, out in pdf_files:
    try:
        doc = fitz.open(src)
        page = doc.load_page(0)
        pix = page.get_pixmap()
        pix.save(out)
        print(f"Saved {out}")
        print(f"--- Text snippet from {src} ---")
        text = page.get_text()
        print(text[:300]) # Print first 300chars to identify Title
        print("-------------------------------")
    except Exception as e:
        print(f"Failed to process {src}: {e}")

# Also copy the image files
image_files = [
    ("C:\\Users\\asus\\Pictures\\Screenshots\\Screenshot 2026-02-19 102621.png", "public/certifications/cert-gfg-fullstack.png"),
    ("C:\\Users\\asus\\Pictures\\Screenshots\\Screenshot 2025-11-02 142450.png", "public/certifications/cert-lpu-java.png"),
    ("C:\\Users\\asus\\Pictures\\Screenshots\\Screenshot 2026-01-19 224309.png", "public/certifications/cert-lpu-java-duplicate.png"),
    ("C:\\Users\\asus\\Pictures\\Screenshots\\Screenshot 2026-04-20 184952.png", "public/projects/portfolio-new.png")
]

for src, out in image_files:
    try:
        shutil.copy(src, out)
        print(f"Copied {src} to {out}")
    except Exception as e:
        print(f"Failed to copy {src}: {e}")
