const ExcelJS = require("exceljs");

const newExcel = async () => {
  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile("report.xlsx"); //reading from file
  const sheet = workbook.getWorksheet("Report"); //getting sheet from
  const header = sheet.getRow(1).values.slice(1);
  console.log(header, "HEADER");
  // sheet.addRow(["Name", "Age", "City"]);

  // await workbook.xlsx.writeFile("report.xlsx"); //writing to file
};

newExcel();
