import fitz
import os

base_dir = r"c:\Users\Admin\Desktop\edurobot5\edurobot5"
out_dir = os.path.join(base_dir, "hinh_anh", "toan", "toan_tap_2")
if not os.path.exists(out_dir):
    os.makedirs(out_dir)

doc = fitz.open(os.path.join(base_dir, "Toan 5 Tap 2.pdf"))
# Page 50 is Index 51
page = doc.load_page(51)

# 1. 121-b1-lamps.png
rect1 = fitz.Rect(50, 130, 580, 370)
page.get_pixmap(clip=rect1, matrix=fitz.Matrix(2, 2)).save(os.path.join(out_dir, "121-b1-lamps.png"))

# 2. 121-b2-mai-cake.png (Right of Ex 2)
rect2 = fitz.Rect(520, 370, 840, 530) # PDF coords might be larger than 600 if it's points vs pixels
# Let's check page size in points
print(f"Page size in points: {page.rect}") # Standard is 595.3 x 841.9

# Corrected rects based on standard points
# Ex 1: 50, 130, 580, 370
# Ex 2 image (Mai with cake): right side, y around 370-530
rect2 = fitz.Rect(350, 370, 580, 530)
page.get_pixmap(clip=rect2, matrix=fitz.Matrix(3, 3)).save(os.path.join(out_dir, "121-b2-mai-cake.png"))

# Ex 3 image (Robot with pot): right side, y around 550-710
rect3 = fitz.Rect(350, 550, 580, 710)
page.get_pixmap(clip=rect3, matrix=fitz.Matrix(3, 3)).save(os.path.join(out_dir, "121-b3-robot-pot.png"))

# Ex 4 image (Kids with blocks): bottom right, y around 730-840
rect4 = fitz.Rect(350, 730, 580, 841)
page.get_pixmap(clip=rect4, matrix=fitz.Matrix(3, 3)).save(os.path.join(out_dir, "121-b4-kids-cubes.png"))

print("Cropped 4 images for Lesson 121")
