import fitz # PyMuPDF
import os

def extract_images_from_pages(pdf_path, output_dir, start_page, end_page):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    doc = fitz.open(pdf_path)
    for page_num in range(start_page - 1, end_page):
        page = doc.load_page(page_num)
        image_list = page.get_images(full=True)
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_filename = f"page_{page_num + 1}_img_{img_index + 1}.{image_ext}"
            image_path = os.path.join(output_dir, image_filename)
            
            with open(image_path, "wb") as f:
                f.write(image_bytes)
            print(f"Extracted: {image_path}")

# Run for Tap 2, pages 44 to 47
pdf2 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_2_KNTT_95fd1.pdf"
output_folder = r"C:\Users\Admin\Desktop\edurobot5\edurobot5\extracted_images"
extract_images_from_pages(pdf2, output_folder, 44, 47)
