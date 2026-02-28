import fitz
import os

def crop_sections(pdf_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    doc = fitz.open(pdf_path)
    dpi = 300
    zoom = dpi / 72
    mat = fitz.Matrix(zoom, zoom)

    # CROP DEFINITIONS (x0, y0, x1, y1 in points)
    # Note: These are estimated based on typical KNTT Page Layout
    # Page numbers are 1-based for the user, 0-based for PyMuPDF
    crops = [
        # LESSON 117 (p44-45 in PDF)
        {"page": 43, "rect": [50, 50, 550, 250], "name": "117-khampha.png"},
        {"page": 44, "rect": [50, 350, 550, 550], "name": "117-b2.png"},
        
        # LESSON 118 (p46-47 in PDF)
        {"page": 45, "rect": [50, 50, 550, 300], "name": "118-khampha-illus.png"}, # The 3D box and net
        {"page": 46, "rect": [50, 80, 550, 300], "name": "118-b1-images.png"}, # The 3 boxes a, b, c
        {"page": 46, "rect": [50, 320, 550, 550], "name": "118-b2-boxes.png"}, # Box comparison
    ]

    for item in crops:
        page = doc.load_page(item["page"])
        # Standard A4 is roughly 595 x 842 pts
        rect = fitz.Rect(item["rect"])
        pix = page.get_pixmap(matrix=mat, clip=rect)
        filepath = os.path.join(output_dir, item["name"])
        pix.save(filepath)
        print(f"Cropped and Saved: {filepath}")

pdf2 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_2_KNTT_95fd1.pdf"
output_folder = r"C:\Users\Admin\Desktop\edurobot5\edurobot5\hinh_anh\toan_tap_2"
crop_sections(pdf2, output_folder)
