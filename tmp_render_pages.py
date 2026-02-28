import fitz # PyMuPDF
import os

def render_pages_to_images(pdf_path, output_dir, start_page, end_page, dpi=300):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    doc = fitz.open(pdf_path)
    for page_num in range(start_page - 1, end_page):
        page = doc.load_page(page_num)
        zoom = dpi / 72  # standard 72 dpi
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        
        image_filename = f"page_{page_num + 1}.png"
        image_path = os.path.join(output_dir, image_filename)
        pix.save(image_path)
        print(f"Saved: {image_path}")

# Run for Tap 2, pages 44 to 47
pdf2 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_2_KNTT_95fd1.pdf"
output_folder = r"C:\Users\Admin\Desktop\edurobot5\edurobot5\extracted_pages"
render_pages_to_images(pdf2, output_folder, 44, 47)
