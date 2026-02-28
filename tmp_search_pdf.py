import fitz # PyMuPDF

def search_lesson(pdf_path, search_terms):
    doc = fitz.open(pdf_path)
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text().lower()
        for term in search_terms:
            if term.lower() in text:
                print(f"Found '{term}' on page {page_num + 1}")

pdf1 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_1_KNTT_18b92.pdf"
pdf2 = r"C:\Users\Admin\Desktop\SGK Toán 5\thanthinhb_bacninh_edu_vn_SGK_Toan_lop_5_tap_2_KNTT_95fd1.pdf"

print("Searching Tap 2...")
search_lesson(pdf2, ["diện tích xung quanh", "diện tích toàn phần", "tiết 117", "bài 50"])
