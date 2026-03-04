$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false
$filePath = (Get-ChildItem "c:\Users\Admin\Desktop\edurobot5\edurobot5\PPCTLS*").FullName
$wb = $excel.Workbooks.Open($filePath)
foreach ($ws in $wb.Worksheets) {
    Write-Host "=== SHEET: $($ws.Name) ==="
    $usedRange = $ws.UsedRange
    $rowCount = [Math]::Min($usedRange.Rows.Count, 120)
    $colCount = $usedRange.Columns.Count
    for ($r = 1; $r -le $rowCount; $r++) {
        $line = ""
        for ($c = 1; $c -le $colCount; $c++) {
            $cell = $usedRange.Cells.Item($r, $c)
            if ($cell.MergeCells) {
                $mergeArea = $cell.MergeArea
                $val = $mergeArea.Cells.Item(1, 1).Text
            }
            else {
                $val = $cell.Text
            }
            if ($c -gt 1) { $line += "|" }
            $line += $val
        }
        Write-Host $line
    }
}
$wb.Close($false)
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
