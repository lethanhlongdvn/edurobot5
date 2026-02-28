import fitz # PyMuPDF
import os

def extract_and_rename_images(pdf_path, output_dir, start_page, end_page):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    doc = fitz.open(pdf_path)
    for page_num in range(start_page - 1, end_page):
        page = doc.load_page(page_num)
        
        # We render the whole page first to let the user see and decide
        # OR we can try to extract vector images/bitmaps.
        # But for SGK, rendering blocks of the page is usually better because 
        # many "images" are actually collections of smaller icons or vectors.
        # For now, let's extract raw images to see what they look like.
        
        image_list = page.get_images(full=True)
        print(f"Page {page_num + 1}: Found {len(image_list)} raw images.")
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Temporary generic naming
            image_filename = f"p{page_num + 1}_img{img_index + 1}.{image_ext}"
            image_path = os.path.join(output_dir, image_filename)
            
            with open(image_path, "wb") as f:
                f.write(image_bytes)
            print(f"Extracted: {image_path}")

# Output to hinh_anh/toan_tap_2
pdf2 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_2_KNTT_95fd1.pdf"
output_folder = r"C:\Users\Admin\Desktop\edurobot5\edurobot5\hinh_anh\toan_tap_2"

# Extracting a range that covers lessons 117, 118, and maybe some context around them
# Based on previous search, pages 44-47 were relevant.
extract_and_rename_images(pdf2, output_folder, 44, 50)
