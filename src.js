function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const range = ss.getSheetByName("③日誌").getRange("C11");

  const richText = range.getRichTextValue();

  // セルの値
  console.log("セルの値：" + range.getValue());
  const d1 = new Date("2021/04/12 00:00:00");
  const date_now = new Date();

  var diffTime = date_now.getTime() - d1.getTime();
  var diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDay); // 21

  //sheet.getSheetByName("③日誌").getRange(`C${543 + diffDay}`).setValue("こんちは");
  // for
  ss
    .getSheetByName("③日誌")
    .getRange(543 + diffDay, 3)
    .setValue("true");
}
