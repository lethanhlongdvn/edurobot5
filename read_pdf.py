import sys
import PyPDF2

def read_pdf(file_path):
    with open(file_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"--- Page {i+1} ---\n"
            try:
                text += page.extract_text() + "\n"
            except Exception as e:
                text += f"[Error extracting text: {e}]\n"
        return text

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python read_pdf.py <pdf_file>")
        sys.exit(1)
        
    pdf_path = sys.argv[1]
    extracted_text = read_pdf(pdf_path)
    
    out_path = pdf_path + ".txt"
    with open(out_path, 'w', encoding='utf-8') as out_file:
        out_file.write(extracted_text)
    print(f"Text extracted to {out_path}")
