import fitz
import os

def render_lessons_as_images(pdf_path, output_dir, start_page, end_page, dpi=300):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    doc = fitz.open(pdf_path)
    # Mapping for lessons 117-120
    # On many SGKs, page# in PDF = printed_page# + offset.
    # Looking at p44-p50, we get the whole pages.
    
    for page_num in range(start_page - 1, end_page):
        page = doc.load_page(page_num)
        zoom = dpi / 72
        mat = fitz.Matrix(zoom, zoom)
        
        # Step 1: Render the whole page first
        pix = page.get_pixmap(matrix=mat)
        filename = f"math5_p{page_num + 1}.png"
        filepath = os.path.join(output_dir, filename)
        pix.save(filepath)
        print(f"Rendered Page {page_num + 1}: {filepath}")
        
# Output to managed folder
pdf2 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_2_KNTT_95fd1.pdf"
output_folder = r"C:\Users\Admin\Desktop\edurobot5\edurobot5\hinh_anh\toan_tap_2"
render_lessons_as_images(pdf2, output_folder, 44, 52)
