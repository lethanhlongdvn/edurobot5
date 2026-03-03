$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false
$workbook = $excel.Workbooks.Open('c:\Users\Admin\Desktop\edurobot5\edurobot5\PPCTKhoahoc.xlsx')
$workbook.SaveAs('c:\Users\Admin\Desktop\edurobot5\edurobot5\PPCTKhoahoc.csv', 62)  # 62 = xlCSVUTF8
$workbook.Close($false)
$excel.Quit()
Write-Output "Excel converted to CSV with UTF8"
