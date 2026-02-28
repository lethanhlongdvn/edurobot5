import fitz
import os

def crop_page_47(pdf_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    doc = fitz.open(pdf_path)
    dpi = 300
    zoom = dpi / 72
    mat = fitz.Matrix(zoom, zoom)

    # Page 47 in printed book is typically p46 in PDF (0-indexed)
    page_idx = 46 
    page = doc.load_page(page_idx)
    
    # Define crops based on typical layout
    # [x0, y0, x1, y1] in points
    # Page size is roughly 595 x 842
    crops = [
        {"rect": [40, 60, 550, 240], "name": "119-b1.png"}, # Ex 1
        {"rect": [40, 240, 550, 480], "name": "119-b2.png"}, # Ex 2
        {"rect": [40, 480, 550, 660], "name": "119-b3.png"}, # Ex 3
        {"rect": [40, 660, 550, 810], "name": "119-b4.png"}, # Ex 4 illustration
    ]

    for item in crops:
        rect = fitz.Rect(item["rect"])
        pix = page.get_pixmap(matrix=mat, clip=rect)
        filepath = os.path.join(output_dir, item["name"])
        pix.save(filepath)
        print(f"Saved: {filepath}")

pdf2 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_2_KNTT_95fd1.pdf"
output_folder = r"C:\Users\Admin\Desktop\edurobot5\edurobot5\hinh_anh\toan_tap_2"
crop_page_47(pdf2, output_folder)
